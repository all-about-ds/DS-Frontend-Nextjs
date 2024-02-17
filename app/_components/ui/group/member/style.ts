import styled from "@emotion/styled";

export const MemberItem = styled.div`
  width: 250px;
  height: 36px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;

  &.deleted {
    display: none;
  }
`;

export const MemberBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12.5px;
`;

export const MemberProfile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

export const MemberName = styled.div`
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #969696;
`;

export const SettingBox = styled.div`
  position: relative;
`;

export const ManageButtonBox = styled.div`
  position: absolute;
  width: 134px;
  height: 98px;
  right: -150px;
  top: -10px;
  display: flex;
  flex-direction: column;
  background: rgba(14, 14, 14, 0.5);
  backdrop-filter: blur(2px);
  border-radius: 10px;
`;

export const NameBox = styled.div`
  width: 134px;
  border-radius: 50% 50% 0 0;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "AppleSDGothicNeoB00";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
`;

export const Line = styled.div`
  width: 134px;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
`;

export const Expel = styled.div`
  width: 134px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #d04040;
  line-height: 17px;
  cursor: pointer;
`;

export const HandOver = styled.div`
  width: 134px;
  border-radius: 0 0 50% 50%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #7848de;
  cursor: pointer;
`;
