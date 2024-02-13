import styled from "@emotion/styled";

export const DescWrapper = styled.div`
  width: 16.5vw;
  min-width: 284px;
  display: flex;
  background: #1c1c1c;
  border-radius: 10px;
  margin: 18px 0 1.22vh;
  align-items: center;
`;

export const IconBox = styled.div`
  width: 3vw;
  height: 5vh;
  min-width: 56px;
  min-height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2c2c2c;
  border-radius: 10px;
  margin: 12px;
  font-size: 40px;
`;

export const DescText = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #acacac;
  margin-right: 12px;
`;

export const InputWrapper = styled.div`
  width: 16.5vw;
  min-width: 284px;
  display: flex;
  flex-direction: column;
  margin-top: 2.08vh;
`;

export const InputText = styled.p<{ isError: boolean }>`
  font-weight: 400;
  font-size: 13px;
  color: ${(props) => (props.isError ? "#EE3939" : "rgba(255, 255, 255, 0.9)")};
  margin: 0 0 10px 8px;
`;

export const InputBox = styled.input<{ isError: boolean }>`
  width: 15.5vw;
  min-width: 266px;
  height: 40px;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.9);
  padding-left: 16px;
  border: ${(props) => (props.isError ? "1px solid #EE3939" : "none")};
  background: ${(props) => (props.isError ? "#412626" : "#232323")};

  ::placeholder {
    color: ${(props) =>
      props.isError ? "#EE3939" : "rgba(255, 255, 255, 0.35)"};
  }
`;

export const Button = styled.button<{ isError: boolean }>`
  width: 16.5vw;
  min-width: 284px;
  height: 40px;
  background: #7848de;
  border-radius: 10px;
  border-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;
  cursor: pointer;
  margin-top: ${(props) => (props.isError ? "7.5vh" : "10.32vh")};

  &:hover {
    border: 1px solid #7848de;
    border-radius: 10px;
    color: #7848de;
    background: none;
    box-sizing: border-box;
  }
`;

export const BottomTextBox = styled.div`
  margin-top: 19px;
  height: 16px;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

export const FirstText = styled.p`
  color: #c2c2c2;

  margin-right: 4px;
`;

export const ClickText = styled.p`
  color: #7139ea;
  font-size: 12px;
  cursor: pointer;
`;

export const Bar = styled.div`
  width: 22px;
  height: 1px;
  background: #a2a2a2;
  border-radius: 11px;
  margin: 1.21vh 0 11px;
`;

export const ErrorTextBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const ErrorText = styled.p`
  color: #ee3939;
  font-size: 12px;
  margin-top: 16px;
`;
