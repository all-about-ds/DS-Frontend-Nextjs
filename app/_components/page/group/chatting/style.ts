import styled from "@emotion/styled";

export const GroupChattingLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ChattingLayout = styled.div`
  width: 66.25vw;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgba(62, 62, 62, 0) -22.54%,
    rgba(49, 49, 49, 0.28) 100%
  );
  position: relative;
`;

export const ChattingWrapper = styled.main`
  width: 60vw;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 0px 3.125vw;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    height: 30%;
    background: #3e3e3e;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #2b2b2b;
  }
`;

export const ChatWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputBox = styled.section`
  width: 66.25vw;
  height: 80px;
  position: absolute;
  bottom: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #101010;
`;

export const InputInnerBox = styled.div`
  width: 45.1vw;
  height: 44px;
  background: #232323;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px 0 20px;
`;

export const Input = styled.input`
  padding: 0;
  border: none;
  background: #232323;
  width: 42.6vw;
  margin-left: 10px;
  margin-right: 14px;
  height: 20px;
  font-family: AppleSDGothicNeoM00;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.8);
`;

export const MemberWrapper = styled.section`
  display: flex;
  width: auto;
  margin-top: 3vh;
`;

export const MemberBox = styled.div`
  width: 44px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MemberProfile = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
  background: #d9d9d9;
  border-radius: 50%;
`;

export const MemberName = styled.p`
  font-family: AppleSDGothicNeoB00;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #969696;
`;

export const ChattingBox = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Chatting = styled.div`
  max-width: 652px;
  height: auto;
  display: flex;
  align-items: center;
  border-radius: 0 10px 10px 10px;
  padding: 16px 24px;
  background: #323334;
`;

export const ChattingText = styled.p`
  font-family: AppleSDGothicNeoM00;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.8);
`;

export const Time = styled.p`
  font-family: AppleSDGothicNeoB00;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #6a6a6a;
  margin-top: 10px;
  margin-left: 12px;
`;

export const MyChatBox = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 3vh;
`;

export const MyChatting = styled.div`
  max-width: 652px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0px 10px 10px;
  padding: 16px 24px;
  background: #dfdfdf;
`;

export const MyChatText = styled.p`
  font-family: AppleSDGothicNeoM00;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: rgba(28, 28, 28, 0.76);
`;

export const MyChatTime = styled.p`
  font-family: AppleSDGothicNeoB00;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #6a6a6a;
  margin-top: 10px;
  margin-right: 12px;
  text-align: right;
`;
