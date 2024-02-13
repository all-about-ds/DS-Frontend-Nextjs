import styled from "@emotion/styled";

export const MyPageModal = styled.div`
  width: 20vw;
  max-width: 400px;
  min-width: 300px;
  background: #232323;
  padding: 28px 24px;
  border-radius: 10px;
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div > svg {
    cursor: pointer;
  }

  h1 {
    margin-left: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: #ffffff;
  }
`;
