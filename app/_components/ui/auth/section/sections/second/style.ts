import styled from "@emotion/styled";

export const SecondSectionLayout = styled.section`
  margin: 0.8rem auto -1rem;
  width: 18vw;
  min-width: 300px;
`;

export const Text = styled.p`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #acacac;
  text-align: center;
  margin-bottom: 3rem;
`;

export const NumberForm = styled.form<{ isError: string }>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 10px;
  margin-bottom: 1.2rem;

  & > input {
    border: ${(e) => (e.isError ? "1px solid #EE3939" : "none")};
    background: ${(e) => (e.isError ? "#412626" : "#232323")};
  }
`;

export const AuthenticationNumberInput = styled.input`
  height: 70px;
  border-radius: 10px;
  border: none;
  background: #232323;
  font-size: 2em;
  padding: 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.5s ease;

  :focus {
    transform: scale(1.1);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    outline: none;
  }
`;

export const ResendBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  gap: 5px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #6a6a6a;
  }
  margin-bottom: 1rem;
`;

export const Timer = styled.p<{ isError: string }>`
  font-family: "AppleSDGothicNeoM00";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #efefef;
  margin-bottom: ${(e) => (e.isError ? "3rem" : "9.6rem")};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  button {
    width: 100%;
  }
`;

export const ErrorText = styled.p<{ isError: string }>`
  display: ${(e) => (e.isError ? "block" : "none")};
  color: #ee3939;
  font-size: 13px;
  text-align: center;
  margin-bottom: 5.5rem;
`;
