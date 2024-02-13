import styled from "@emotion/styled";

export const DefaultModal = styled.section`
  width: 350px;
  height: 160px;
  background: #1e1e1e;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 17px 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Description = styled.article`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 7px;
`;

const DefaultButtonStyle = styled.button`
  width: 100%;
  height: 39px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  cursor: pointer;
`;

export const CancleButton = styled(DefaultButtonStyle)`
  background: #383838;
  color: #808080;
`;

export const ExecuteButton = styled(DefaultButtonStyle)`
  background: #7848de;
  color: #ffffff;
`;
