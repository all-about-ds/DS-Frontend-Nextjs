import styled from "@emotion/styled";

export const Layout = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 290px;
  height: calc(100vh - 81px);
  background: linear-gradient(180deg, rgba(31, 31, 31, 0) 0%, #1f1f1f 100%);
`;

export const TopText = styled.h1`
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  margin-top: 2.5rem;
  font-family: "AppleSDGothicNeoB00";
`;

export const TitleText = styled.h1`
  font-weight: 400;
  font-size: 22px;
  color: #ffffff;
  margin-top: 0.7rem;
  font-family: "AppleSDGothicNeoEB00";
  margin-bottom: 34px;
`;

export const SubmithButtonBox = styled.div`
  width: 196px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  margin-top: 83.24vh;
`;

export const SubmitButton = styled.button`
  background: #7848de;
  border-radius: 10px;
  width: 160px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  font-family: "AppleSDGothicNeoSB00";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;
  cursor: pointer;
  border: none;
`;
