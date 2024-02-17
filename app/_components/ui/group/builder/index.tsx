import { useEffect, useState } from "react";
import * as S from "./style";
import * as Image from "@/app/_assets";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { toast } from "react-toastify";
import { get, ref, set } from "firebase/database";
import {
  CreateGroupType,
  GroupBuilderType,
  GroupInformationType,
} from "@/app/_types/group.type";
import { GroupDataAtom, ImagesAtom, UserDataAtomFamily } from "@/app/_atoms";
import useImageToUrl from "@/app/_hooks/useImageToUrl";
import groupRequest from "@/app/_api/request/group.request";
import { db } from "@/app/_shared/firebase";
import { useRouter } from "next/navigation";
import { Input } from "@/app/_components/ui/input/style";

type FormType = {
  name: string;
  description: string;
  password: string | undefined;
};

export default function GroupBuilder({ type }: { type: GroupBuilderType }) {
  const [image, setImage] = useRecoilState<string>(ImagesAtom);
  const [memberNum, setMemberNum] = useState<number>(2);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const groupData = useRecoilValue(GroupDataAtom);
  const [group, setGroup] = useState<GroupInformationType>();
  const [userName] = useRecoilState(UserDataAtomFamily("name"));
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const { register, handleSubmit } = useForm<FormType>();
  const { postImage } = useImageToUrl();

  useEffect(() => {
    const checkServerAndClientSync = () => {
      if (groupData && groupData.host) {
        setGroup(groupData);
        setLoaded(true);
      } else if (type === "create") {
        setImage("");
        setMemberNum(2);
        setLoaded(true);
      } else {
        toast.error("잘못된 접근입니다.");
        router.replace("/");
      }
    };

    checkServerAndClientSync();
  }, []);

  const memberUp = () => {
    if (memberNum !== 7) {
      setMemberNum(memberNum + 1);
    } else {
      toast.error("현재 인원보다 높게 설정할 수 없어요!");
    }
  };

  const memberDown = () => {
    if (memberNum !== 2 && memberNum !== Number(group?.memberList.length) + 1) {
      setMemberNum(memberNum - 1);
    } else {
      toast.error("현재 인원보다 낮게 설정할 수 없어요!");
    }
  };

  const changePrivatePublic = () => {
    setIsClicked(!isClicked);
  };

  const onValid = async (data: FormType) => {
    if (image) {
      try {
        if (data.password && !/^[0-9]{4}$/.test(data.password)) {
          toast.error("숫자 4자리를 입력해주세요!");
          return;
        }

        const req: CreateGroupType = {
          name: data.name,
          description: data.description,
          img: image,
          maxCount: memberNum !== 1 ? memberNum : 2,
          secret: isClicked,
          password: data.password,
        };

        if (type === "create") {
          await groupRequest.createGroup(req);
          set(ref(db, `timers/${data.name}/users/${userName}`), {
            name: userName,
            time: 0,
            active: false,
          });
          toast.success("생성되었어요!");
          router.replace("/my-page");
        }

        if (type === "edit") {
          if (group?.name !== req.name) {
            const prevChatRef = ref(db, `chattings/${group?.name}`);
            const prevTimerRef = ref(db, `timers/${group?.name}`);
            get(prevChatRef).then((snapshot) => {
              if (snapshot.exists()) {
                const data = snapshot.val();

                const newChatRef = ref(db, `chattings/${req.name}`);
                set(newChatRef, data).then(() => {
                  set(prevChatRef, null)
                    .then()
                    .catch(() => {
                      toast.error("오류가 발생했어요!");
                    });
                });
              }
            });
            get(prevTimerRef).then((snapshot) => {
              if (snapshot.exists()) {
                const data = snapshot.val();

                const newTimerRef = ref(db, `timers/${req.name}`);
                set(newTimerRef, data).then(() => {
                  set(prevTimerRef, null)
                    .then()
                    .catch(() => {
                      toast.error("오류가 발생했어요!");
                    });
                });
              }
            });
          }
          await groupRequest.editGroup(req, Number(group?.idx));
          toast.success("수정되었어요!");
          router.replace("/group/" + group?.idx + "/information");
        }

        setImage("");
      } catch (e: any) {
        if (e.response.status === 400) {
          toast.error("잘못된 형식의 요청이에요!");
        } else if (e.response.status === 401) {
          toast.error("새로고침 후 다시 시도해주세요!");
        } else if (e.response.status === 409) {
          toast.error("이미 존재하는 이름이에요!");
        }
      }
    } else {
      toast.error("그룹 배너 사진이 없어요");
    }
  };

  const inValid = (e: any) => {
    const name = e?.name;
    const desc = e?.description;

    if (name && desc && name.type === "required" && desc.type === "required") {
      toast.error("이름과 설명은 필수 입력입니다.");
    } else if (name && name.type === "required") {
      toast.error(name.message);
    } else if (desc && desc.type === "required") {
      toast.error(desc.message);
    } else if (name && name.type === "maxLength") {
      toast.error("그룹 이름은 최대 16자 입니다");
    } else if (desc && desc.type === "maxLength") {
      toast.error("그룹 설명은 최대 100자 입니다");
    }
  };

  const encodeFileToBase64 = async (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    reader.onload = () => {
      if (reader.result) {
        postImage(fileBlob);
      }
    };
  };

  useEffect(() => {
    if (groupData?.img) {
      setImage(String(groupData?.img));
      setMemberNum(Number(groupData?.memberList.length) + 1);
    } else {
      setImage("");
    }
  }, []);

  return (
    <>
      {loaded && (
        <S.Layout>
          <S.TopText>DS</S.TopText>
          <S.TitleText>
            그룹
            {type === "create" && " 만들기"}
            {type === "edit" && " 수정하기"}
          </S.TitleText>
          <S.ElementsWrapper>
            <form onSubmit={handleSubmit(onValid, inValid)}>
              <S.BoldText>그룹 이름</S.BoldText>
              <Input
                placeholder="그룹 이름을 입력해주세요."
                {...register("name", {
                  required: "이름은 필수 입력입니다.",
                  maxLength: 16,
                })}
                defaultValue={type === "create" ? "" : String(group?.name)}
              />
              <S.BoldText style={{ marginTop: "1.5rem" }}>그룹 설명</S.BoldText>
              <S.Input
                placeholder="그룹을 설명해주세요 (100자 이내)"
                {...register("description", {
                  required: "설명은 필수 입력입니다.",
                  maxLength: 100,
                })}
                defaultValue={
                  type === "create" ? "" : String(group?.description)
                }
              ></S.Input>
              <S.TextWrapper>
                <S.BoldText style={{ marginTop: "2.5rem" }}>
                  배너 사진
                </S.BoldText>
                {image && (
                  <>
                    <S.ChangeButton
                      type={"file"}
                      onChange={(e) => {
                        if (!e.target?.files) return;
                        encodeFileToBase64(e.target.files[0]);
                      }}
                      id={"image"}
                      accept="image/*"
                    />
                    <S.ChangeText htmlFor="image">변경</S.ChangeText>
                  </>
                )}
              </S.TextWrapper>
              <S.ImageBox>
                {image && (
                  <S.UploadedImage
                    src={image}
                    alt="그룹이미지"
                  ></S.UploadedImage>
                )}
                <S.ImageArea
                  type={"file"}
                  onChange={(e) => {
                    if (!e.target?.files) return;
                    encodeFileToBase64(e.target.files[0]);
                  }}
                  accept="image/*"
                  id={"imageBox"}
                />
                <S.ImageLabel htmlFor="imageBox">
                  <S.SmallBox>
                    <Image.PhotoIcon />
                  </S.SmallBox>
                  <S.ImageText>이미지 업로드</S.ImageText>
                </S.ImageLabel>
              </S.ImageBox>
              <S.BoldText style={{ marginTop: "2.5rem" }}>인원</S.BoldText>
              <S.MemberBox>
                <S.MemberTextWrapper>
                  <S.Member>{memberNum < 2 ? 2 : memberNum}</S.Member>
                  <S.Member>명</S.Member>
                </S.MemberTextWrapper>
                <S.ButtonBox>
                  <S.Button onClick={memberUp}>
                    <Image.ArrowUpIcon />
                  </S.Button>
                  <S.Button onClick={memberDown}>
                    <Image.ArrowDownIcon />
                  </S.Button>
                </S.ButtonBox>
              </S.MemberBox>
              <S.BoldText style={{ marginTop: "1.5rem" }}>공개 여부</S.BoldText>
              <S.RadiusButtonBox>
                <S.LeftRadiusButton
                  onClick={changePrivatePublic}
                  style={isClicked ? { backgroundColor: "#7848DE" } : {}}
                >
                  <S.TextInButton style={isClicked ? { color: "#FFFFFF" } : {}}>
                    비공개
                  </S.TextInButton>
                </S.LeftRadiusButton>
                <S.RightRadiusButton
                  onClick={changePrivatePublic}
                  style={!isClicked ? { backgroundColor: "#7848DE" } : {}}
                >
                  <S.TextInButton
                    style={!isClicked ? { color: "#FFFFFF" } : {}}
                  >
                    공개
                  </S.TextInButton>
                </S.RightRadiusButton>
              </S.RadiusButtonBox>
              {isClicked && (
                <>
                  <S.BoldText style={{ marginTop: "24px" }}>
                    비밀번호
                  </S.BoldText>
                  <Input
                    placeholder="숫자 4자리를 입력해주세요"
                    type="password"
                    {...register("password", {
                      required: "비밀번호는 필수 입력입니다.",
                    })}
                  />
                </>
              )}
              <S.SubmithButtonBox>
                <S.CancleButton
                  onClick={() =>
                    router.push("/group/" + group?.idx + "/information")
                  }
                >
                  취소
                </S.CancleButton>
                <S.SubmitButton>완료</S.SubmitButton>
              </S.SubmithButtonBox>
            </form>
          </S.ElementsWrapper>
        </S.Layout>
      )}
    </>
  );
}
