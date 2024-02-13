import styled from "@emotion/styled";

export const FirstSectionLayout = styled.form<{ isLoading: boolean }>`
  position: relative;
  margin: 2rem 0 -1rem 0;
  width: 18vw;
  min-width: 300px;
  pointer-events: ${(e) => e.isLoading && "none"};
`;

export const LoadingAnimation = styled.div``;

export const Description = styled.article<{ isError: string | undefined }>`
  text-align: center;
  color: white;
  margin-top: ${(e) => (e.isError ? "5rem" : "7.1rem")};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
    margin: 8.5rem 0 1rem;
  }
`;

export const ErrorText = styled.p`
  color: #ee3939;
  font-size: 13px;
  margin: 0 0 0 0.5rem;
`;
