import styled from "@emotion/styled";

export const GroupIsClickedModal = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  background: #1e1e1e;
  border-radius: 10px;
`;

export const Image = styled.img`
  position: relative;
  border-radius: 10px;
  width: 450px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`;

export const ContentWrapper = styled.div`
  width: 408px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-left: 21px;
`;

export const memberNum = styled.p`
  font-family: AppleSDGothicNeoB00;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 12px;
`;

export const Title = styled.p`
  margin-bottom: 16px;
  font-family: AppleSDGothicNeoB00;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
`;

export const UserBox = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Profile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #d9d9d9;
  margin-right: 8px;
  object-fit: cover;
`;

export const UserName = styled.p`
  font-family: AppleSDGothicNeoB00;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  margin-left: 8px;
`;

export const Description = styled.div`
  font-family: AppleSDGothicNeoM00;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.35);
  margin-bottom: 46px;
`;

export const JoinButton = styled.div`
  width: 408px;
  height: 54px;
  background: #7848de;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: AppleSDGothicNeoB00;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #f3f3f3;
  margin-bottom: 28px;
  cursor: pointer;
`;

export const LockBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(132, 132, 132, 0.2);
  backdrop-filter: blur(3px);
  border-radius: 50%;
  position: absolute;
  top: 21px;
  left: 21px;
`;

export const ExitBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;
