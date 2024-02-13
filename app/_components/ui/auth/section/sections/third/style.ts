import styled from "@emotion/styled";

export const ThirdSectionLayout = styled.form`
  margin: 0 auto -1rem;
  width: 18vw;
  min-width: 300px;
`;

export const Text = styled.h1`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #acacac;
  text-align: center;
  line-height: 20px;
  margin-bottom: 0.5rem;

  &.password-description {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: #acacac;
    margin-bottom: 1.8rem;
  }
`;

export const InputWrapper = styled.div<{ isError?: boolean | undefined }>`
  width: 100%;
  min-width: 284px;
  margin: 0 auto 1.2rem;
  border-radius: 10px;

  &.name {
    margin: 2rem auto 1.2rem;
  }

  &.password {
    margin: 0 auto 2.5rem;
  }
`;

export const InputTitle = styled.p<{ isError: boolean | undefined }>`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: ${(e) => (e.isError ? "#EE3939" : "rgba(255, 255, 255, 0.9)")};
  margin-left: 8px;
  margin: 0 0 10px 8px;
`;

export const InputBox = styled.div<{ isError?: boolean | undefined }>`
  display: flex;
  background-color: #232323;
  border-radius: 10px;
  align-items: center;
  border: ${(e) => (e.isError ? "1px solid #EE3939" : "none")};
  background: ${(e) => (e.isError ? "#412626" : "#232323")};

  & > input {
    background: ${(e) => (e.isError ? "#412626" : "#232323")};
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  & > div > svg {
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
    animation: fadein 0.3s;
    -webkit-animation: fadein 0.3s;
  }
`;

export const Input = styled.input<{ isError?: boolean | undefined }>`
  border: ${(e) => (e.isError ? "1px solid #EE3939" : "none")};
  background: ${(e) => (e.isError ? "#412626" : "#232323")};
  width: 100%;
  height: 40px;
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  padding: 13px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  button {
    width: 100%;
    margin-top: 5.9rem;
  }
`;

export const ErrorText = styled.p<{ isError: string }>`
  display: ${(e) => (e.isError ? "block" : "none")};
  color: #ee3939;
  font-size: 13px;
  text-align: center;
  margin-bottom: ${(e) => (e.isError ? "-1rem" : "0")};
`;
