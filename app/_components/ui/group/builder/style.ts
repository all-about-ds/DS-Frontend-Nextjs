import styled from "@emotion/styled";

export const Layout = styled.main`
  margin-top: 174px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 340px;
  height: fit-content;
  background: #161616;
`;

export const TopText = styled.h1`
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  margin-top: 2.06rem;
  font-family: AppleSDGothicNeoB00;
`;

export const TitleText = styled.h1`
  font-weight: 400;
  font-size: 22px;
  color: #ffffff;
  margin-top: 0.7rem;
  font-family: AppleSDGothicNeoEB00;
`;

export const ElementsWrapper = styled.section`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 53px;
`;

export const BoldText = styled.p`
  font-family: AppleSDGothicNeoB00;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 0.63rem;
`;

export const Input = styled.textarea`
  resize: none;
  border: none;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background: #232323;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  padding: 13px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  font-family: AppleSDGothicNeoM00;
  box-sizing: border-box; /* Opera/IE 8+ */
  ::-webkit-scrollbar {
    display: none;
  }

  :focus {
    outline: none;
  }
`;

export const ImageBox = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  background: #232323;
  border-radius: 10px;
  position: relative;
`;

export const ImageArea = styled.input`
  display: none;
`;

export const ImageLabel = styled.label`
  width: 100px;
  height: 130px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SmallBox = styled.div`
  width: 100px;
  height: 100px;
  background: #2c2c2c;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ImageText = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #636363;
  margin-top: 0.75rem;
`;

export const MemberBox = styled.div`
  background: #232323;
  border-radius: 10px;
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const MemberTextWrapper = styled.div`
  width: 245px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 14px;
`;

export const Member = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #636363;
`;

export const ButtonBox = styled.div`
  width: 15px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 11px;
`;

export const Button = styled.div`
  width: 13px;
  height: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const RadiusButtonBox = styled.div`
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

export const LeftRadiusButton = styled.div`
  width: 149px;
  height: 40px;
  background: #232323;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0 0 10px;
  cursor: pointer;
`;

export const RightRadiusButton = styled.div`
  width: 149px;
  height: 40px;
  background: #232323;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
`;

export const TextInButton = styled.div`
  font-family: AppleSDGothicNeoM00;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #636363;
`;

export const SubmithButtonBox = styled.div`
  width: 196px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 3rem 52px;
`;

export const CancleButton = styled.div`
  background: #2e2e2e;
  border-radius: 10px;
  width: 92px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: AppleSDGothicNeoSB00;
  font-style: normal;
  font-weight: 400;
  color: #818181;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  border: none;
  background: #7848de;
  border-radius: 10px;
  width: 92px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: AppleSDGothicNeoSB00;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;
  cursor: pointer;
`;

export const UploadedImage = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  flex-shrink: 0;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
`;

export const ChangeButton = styled.input`
  display: none;
`;

export const ChangeText = styled.label`
  font-family: AppleSDGothicNeoM00;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #915de7;
  margin-bottom: 0.63rem;
  margin-top: 2.5rem;
  cursor: pointer;
`;

export const TextWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;
