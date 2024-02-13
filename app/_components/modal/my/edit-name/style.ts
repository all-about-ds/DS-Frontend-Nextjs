import styled from "@emotion/styled";

export const EmotikonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: #363636;
  border-radius: 10px;
  margin: 1rem auto 0;
  font-size: 35px;
`;

export const Description = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  margin: 1rem 0 2rem;
`;

export const Input = styled.input<{ isError: string }>`
  border: ${(e) => (e.isError ? "1px solid #EE3939" : "none")};
  background: ${(e) => (e.isError ? "#412626" : "#363636")};
  display: block;
  margin: 0 auto;
  width: 90%;
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

export const ErrorText = styled.p<{ isError: string }>`
  display: ${(e) => (e.isError ? "block" : "none")};
  color: #ee3939;
  font-size: 13px;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
`;

export const SubmitButton = styled.button<{ isError: string }>`
  display: block;
  margin: ${(e) => (e.isError ? "4.75rem auto 0" : "6rem auto 0")};
  width: 66px;
  height: 37px;
  background: #7848de;
  border-radius: 10px;
  outline: none;
  border: 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  color: #ffffff;
`;
