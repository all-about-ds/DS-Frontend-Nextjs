import styled from "@emotion/styled";

export const AuthFrame = styled.div`
  position: relative;
  width: 21vw;
  min-width: 372px;
  height: 55vh;
  min-height: 600px;
  margin-top: 15.7vh;
  background: #161616;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopBox = styled.div`
  width: 16.5vw;
  min-width: 284px;
  margin: 0 auto 2rem;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  align-items: center;

  & > div > svg {
    cursor: pointer;
  }
`;

export const AuthText = styled.h1`
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  margin-left: 13px;
`;

export const LoginText = styled.h1`
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  margin-top: 40px;
  text-align: center;
`;

export const ProgressBar = styled.progress`
  width: 100%;
  height: 2px;
  appearance: none;

  ::-webkit-progress-bar {
    background: #333333;
  }

  ::-webkit-progress-value {
    background: #7139ea;
    transition: width 0.5s;
  }
  margin: 5px 0 38px 0;
`;
