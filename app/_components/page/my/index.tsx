"use client";

import * as S from "./style";
import * as Image from "@/app/_assets";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { ref, remove } from "firebase/database";
import { db } from "@/app/_shared/firebase";
import tokenService from "@/app/_utils/tokenService";
import { ModalAtomFamily, UserDataAtomFamily } from "@/app/_atoms";
import userRequest from "@/app/_api/request/user.request";
import { GetMyDataType } from "@/app/_types/user.type";
import DefaultModal from "@/app/_components/modal/default";
import EditNameModal from "@/app/_components/modal/my/edit-name";
import EditProfileImageModal from "@/app/_components/modal/my/edit-profile";
import MyPostCard from "@/app/_components/ui/post-card/my";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MyPage() {
  const router = useRouter();
  const [myInfo, setMyInfo] = useState<GetMyDataType>();
  const [userName, setUserName] = useRecoilState(UserDataAtomFamily("name"));
  const [, setUserImage] = useRecoilState(UserDataAtomFamily("image"));
  const [loaded, setLoaded] = useState<boolean>(false);
  const [logoutModal, setLogoutModal] = useRecoilState(
    ModalAtomFamily("logout")
  );
  const [withdrawalModal, setWithdrawalModal] = useRecoilState(
    ModalAtomFamily("withdrawal")
  );
  const [editNameModal, setEditNameModal] = useRecoilState(
    ModalAtomFamily("editName")
  );
  const [editProfileImageModal, setEditProfileImageModal] = useRecoilState(
    ModalAtomFamily("editProfileImage")
  );

  useEffect(() => {
    const getMyInfo = async () => {
      setLoaded(false);

      try {
        const res: any = await userRequest.getMyData();

        setMyInfo(res.data);
        setLoaded(true);
      } catch {
        toast.error("잘못된 접근입니다");
        tokenService.removeUser();
        router.replace("/");
      }
    };

    getMyInfo();
  }, [userName]);

  const onLogout = () => {
    tokenService.removeUser();
    setLogoutModal(false);
    toast.success("로그아웃 되었어요");
    router.replace("/");
  };

  const onWithdrawal = async () => {
    try {
      await userRequest.withdrawal();
      removeUserOnFirebase();

      setWithdrawalModal(false);
      setUserName("");
      setUserImage("");
      tokenService.removeUser();
      toast.success("회원탈퇴 되었어요");
      router.replace("/");
    } catch {
      setWithdrawalModal(false);
      toast.error("알 수 없는 오류에요");
    }
  };

  const removeUserOnFirebase = () => {
    myInfo?.groups.map(async (item) => {
      await remove(ref(db, `timers/${item.name}/users/${userName}`));
    });
  };

  return (
    <>
      {logoutModal && (
        <DefaultModal
          atomKey="logout"
          title="로그아웃하기"
          description="정말 로그아웃 하시겠어요?"
          excuteButtonText="로그아웃"
          executeFunc={onLogout}
        />
      )}
      {withdrawalModal && (
        <DefaultModal
          atomKey="withdrawal"
          title="탈퇴하기"
          description="정말 저희 DS를 탈퇴하시겠어요?"
          excuteButtonText="탈퇴"
          executeFunc={onWithdrawal}
        />
      )}
      {editNameModal && <EditNameModal oldName={String(myInfo?.name)} />}
      {editProfileImageModal && <EditProfileImageModal />}
      <S.MyPageLayout>
        <S.ProfileSection>
          <S.NameBox>
            <S.Name>{myInfo?.name}님의 프로필</S.Name>
            <Image.NormalIcon />
          </S.NameBox>
          <S.Description>
            프로필 사진과 닉네임으로 자신을 표현해봐요.
          </S.Description>
          <S.ProfileBox>
            {!myInfo?.profileImg && <Image.DefaultProfileImage />}
            {myInfo?.profileImg && (
              <S.ProfileImage src={myInfo?.profileImg} alt="프로필 이미지" />
            )}
            <S.ColumnSortingBox>
              <S.UpdateBox loaded={loaded}>
                <div onClick={() => setEditProfileImageModal(true)}>
                  <Image.UpdateProfileImageIcon />
                </div>
                <div onClick={() => setEditNameModal(true)}>
                  <Image.UpdateNameIcon />
                </div>
                <p>{myInfo?.name}</p>
              </S.UpdateBox>
              <S.LogoutButton onClick={() => setLogoutModal(true)}>
                로그아웃
              </S.LogoutButton>
              <S.UserWithdrawalButton onClick={() => setWithdrawalModal(true)}>
                회원탈퇴
              </S.UserWithdrawalButton>
            </S.ColumnSortingBox>
          </S.ProfileBox>
        </S.ProfileSection>
        <S.GroupSection>
          <S.GroupText>내 그룹</S.GroupText>
          <S.GroupList>
            {myInfo?.groups.map((group) => (
              <Link
                href={"/group/" + group.idx + "/information"}
                key={crypto.randomUUID()}
              >
                <MyPostCard idx={group.idx} name={group.name} img={group.img} />
              </Link>
            ))}
          </S.GroupList>
          {!myInfo?.groups.length && (
            <S.MyGroupNotFound>
              <div>
                <S.NotFoundText>아직 가입된 그룹이 없어요. 🧐</S.NotFoundText>
                <S.MoveMainButton onClick={() => router.replace("/")}>
                  그룹 가입하기
                </S.MoveMainButton>
              </div>
            </S.MyGroupNotFound>
          )}
        </S.GroupSection>
      </S.MyPageLayout>
    </>
  );
}
