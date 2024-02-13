import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  width: 100%;
  min-width: 284px;
`;

export const InputTitle = styled.p<{ isError: boolean | undefined }>`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: ${(e) => (e.isError ? "#EE3939" : "rgba(255, 255, 255, 0.9)")};
  margin-left: 8px;
  margin: 0 0 10px 8px;
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

  ::placeholder {
    color: ${(props) =>
      props.isError ? "#EE3939" : "rgba(255, 255, 255, 0.35)"};
  }
`;
