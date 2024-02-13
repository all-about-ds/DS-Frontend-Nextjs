import styled from "@emotion/styled";

export const ImageUploadSection = styled.section`
  position: relative;
  width: 180px;
  height: 180px;
  background: #363636;
  border-radius: 10px;
  margin: 2.5rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div > input {
    display: none;
  }
`;

export const EmotikonBox = styled.div`
  width: 60px;
  height: 60px;
  background: #525252;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  cursor: pointer;
`;

export const UploadedImageChange = styled.p`
  position: absolute;
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #915de7;
  cursor: pointer;
  top: 5px;
  right: 9px;
`;

export const UploadedImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  object-fit: cover;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  margin-top: 8px;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  margin-top: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`;

export const SubmitButton = styled.button`
  display: block;
  width: 66px;
  height: 37px;
  background: #7848de;
  border-radius: 10px;
  outline: none;
  border: 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  color: #ffffff;
  margin: 1.75rem auto 0;
`;
