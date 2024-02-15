import styled from "@emotion/styled";

export const GroupInformationPageLayout = styled.section`
  width: 35.4vw;
  margin: auto;
  min-width: 450px;
`;

export const GroupImage = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 10px;
`;

export const TitleBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  & > svg {
    cursor: pointer;
  }
`;

export const GroupManageButtonBox = styled.section`
  width: 52px;
  height: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: #f1f1f1;
`;

export const LeaveGroupText = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #9773e3;
  cursor: pointer;
`;

export const Description = styled.article`
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.35);
  margin-top: 1.25rem;
  line-height: 20px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1px;
  margin: 2.5rem 0 1.25rem;
`;

export const TextMembersBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  & > div > svg {
    cursor: pointer;
  }
`;

export const TextMembers = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #f1f1f1;
`;

export const MemberList = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 13px 30px;
`;

export const MemberBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const MemberRole = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 13px;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 5px;
`;

export const MemberName = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;

export const MemberImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50px;
  object-fit: cover;
  cursor: pointer;
`;

export const RemoveGroupButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #ee3939;
  color: #232323;
  margin-top: 2rem;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
`;
