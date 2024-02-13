import styled from "@emotion/styled";

export const MyPageLayout = styled.section`
  width: 66.25vw;
  margin: auto;

  @media screen and (max-width: 926px) {
    width: 93vw;
  }
`;

export const ProfileSection = styled.section`
  width: 100%;
  margin-top: 4.5rem;
`;

export const NameBox = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 926px) {
    svg {
      display: none;
    }
  }
`;

export const Name = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  color: #ffffff;

  @media screen and (max-width: 900px) {
    font-size: 40px;
  }
`;

export const Description = styled.p`
  margin-top: 1rem;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.6);
`;

export const ProfileBox = styled.div`
  display: flex;
  margin-top: 3rem;
  gap: 3rem;

  & > svg {
    width: 115px;
    height: 115px;
  }
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 120px;
`;

export const UpdateBox = styled.div<{ loaded: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  pointer-events: ${(e) => !e.loaded && "none"};

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #ffffff;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    cursor: pointer;
  }
`;

export const ColumnSortingBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
`;

export const LogoutButton = styled.button`
  background: #7848de;
  border-radius: 10px;
  width: 85px;
  height: 32px;
  outline: none;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  color: #101010;
  cursor: pointer;
  border: 1px solid #7848de;

  :hover {
    background: #101010;
    color: #7848de;
    border: 1px solid #7848de;
  }
`;

export const UserWithdrawalButton = styled.button`
  background: #101010;
  border-radius: 10px;
  width: 85px;
  height: 32px;
  outline: none;
  border: 1px solid #7848de;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  color: #7848de;
  cursor: pointer;

  :hover {
    background: #7848de;
    color: #101010;
  }
`;

export const GroupSection = styled.section`
  margin-top: 4.75rem;
`;

export const GroupText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 1rem;
`;

export const GroupList = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media screen and (max-width: 1832px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1379px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MyGroupNotFound = styled.div`
  width: 100%;
  height: 31vh;
  display: flex;
  align-items: center;
  justify-content: center;

  div > button {
    margin: 0 auto;
  }
`;

export const NotFoundText = styled.h1`
  color: white;
  font-size: 1.75em;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const MoveMainButton = styled.button`
  width: 300px;
  outline: none;
  display: block;
  border: none;
  cursor: pointer;
  height: 40px;
  background: #7848de;
  border-radius: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  transition: 0.2s;

  :hover {
    box-sizing: border-box;
    border: 1px solid #7848de;
    color: #7848de;
    background: #161616;
  }
`;
