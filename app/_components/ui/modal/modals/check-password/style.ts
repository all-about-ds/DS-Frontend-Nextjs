import styled from "@emotion/styled";

export const PasswordBox = styled.div`
  width: 340px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1e1e1e;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const Title = styled.div`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  margin-top: 16px;
`;

export const Description = styled.div`
  width: 200px;
  height: 34px;
  font-family: "AppleSDGothicNeoR00";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 10px;
`;

export const InputBox = styled.input<{ isError: boolean }>`
  margin-top: 32px;
  width: 293px;
  height: 40px;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.9);
  padding-left: 14px;
  border: ${(props) => (props.isError ? "1px solid #EE3939" : "none")};
  background: ${(props) => (props.isError ? "#412626" : "#232323")};

  ::placeholder {
    color: ${(props) =>
      props.isError ? "#EE3939" : "rgba(255, 255, 255, 0.35)"};
  }
`;

export const ButtonBox = styled.div`
  width: 307px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const CancelButton = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #383838;
  border: none;
  border-radius: 10px;
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #808080;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7848de;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #ffffff;
`;
