import styled from "@emotion/styled";

export const EmailErrorModal = styled.div`
  position: relative;
  width: 22vw;
  max-width: 240px;
  min-width: 200px;
  height: 20vh;
  min-height: 200px;
  background-color: #212121;
  border-radius: 10px;
`;

export const Text = styled.p`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #acacac;
  text-align: center;
  margin-top: 1.8rem;
`;

export const EmojiBox = styled.div`
  width: 60px;
  height: 60px;
  background: #2c2c2c;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  margin: 1rem auto 0;
`;

export const BottomButtonBox = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

export const GoLoginBox = styled.div`
  cursor: pointer;
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  border-top: 1px solid #2d2d2d;
  font-family: "AppleSDGothicNeoR00";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bea2fa;

  :hover {
    background-color: #1c1c1c;
  }
`;

export const RetryBox = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  border-top: 1px solid #2d2d2d;
  width: 100%;
  height: 30px;
  font-family: "AppleSDGothicNeoR00";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #915de7;

  :hover {
    background-color: #1c1c1c;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
