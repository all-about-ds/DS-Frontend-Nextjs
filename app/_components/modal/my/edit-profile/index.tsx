import { useEffect, useRef } from "react";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { toast } from "react-toastify";
import MyPageModalLayout from "../base";
import { ImagesAtom, ModalAtomFamily } from "@/app/_atoms";
import userRequest from "@/app/_api/request/user.request";
import useImageToUrl from "@/app/_hooks/useImageToUrl";

export default function EditProfileImageModal() {
  const setImage = useRef<HTMLInputElement>(null);
  const [uploadedImage, setUplodedAtom] = useRecoilState<string>(ImagesAtom);
  const [, setModal] = useRecoilState(ModalAtomFamily("editProfileImage"));
  const { postImage } = useImageToUrl();

  useEffect(() => setUplodedAtom(""), []);

  const uploadButtonClick = (e: any) => {
    e.preventDefault();
    setImage.current?.click();
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

  const onProfileImageChange = async () => {
    if (uploadedImage) {
      try {
        await userRequest.changeProfileImage(uploadedImage);
        toast.success("이미지를 변경했어요");
        window.location.reload();
      } catch {
        toast.error("알 수 없는 오류입니다");
        setModal(false);
      }
    }
    setModal(false);
  };

  return (
    <MyPageModalLayout title="프로필 사진 변경" atomKey="editProfileImage">
      <S.ImageUploadSection>
        <div>
          <input
            ref={setImage}
            type={"file"}
            id={"profile"}
            accept={"image/*"}
            name={"file"}
            onChange={(e) => {
              if (!e.target?.files) return;
              encodeFileToBase64(e.target.files[0]);
            }}
          />
          {uploadedImage && (
            <S.UploadedImageChange onClick={uploadButtonClick}>
              변경
            </S.UploadedImageChange>
          )}
          {uploadedImage && (
            <S.UploadedImage src={uploadedImage} onClick={uploadButtonClick} />
          )}
          {!uploadedImage && (
            <>
              <S.EmotikonBox onClick={uploadButtonClick}>📷</S.EmotikonBox>
              <S.Text>업로드</S.Text>
            </>
          )}
        </div>
      </S.ImageUploadSection>
      <S.Description>이미지를 업로드 해주세요</S.Description>
      <S.SubmitButton onClick={onProfileImageChange}>완료</S.SubmitButton>
    </MyPageModalLayout>
  );
}
