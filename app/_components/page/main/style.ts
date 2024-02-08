import styled from "@emotion/styled";

export const MainPageLayout = styled.main`
  width: 66.25vw;
  margin: 0 auto;
  margin-top: 3rem;

  @media screen and (max-width: 1110px) {
    width: 95vw;
  }
`;

export const SortButtonsWrapper = styled.nav`
  height: 21px;
  display: flex;
  gap: 20px;
`;

export const SortButton = styled.p<{ isActive: boolean }>`
  color: ${(props) =>
    props.isActive ? "#ffffff" : "rgba(255, 255, 255, 0.4)"};
  font-weight: 400;
  font-size: 15px;
  font-family: AppleSDGothicNeoB00;
  cursor: pointer;
`;

export const PostCardWrapper = styled.section`
  width: 100%;
  margin: 27px auto 0;
  gap: 1.75rem 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1883px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1375px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 645px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
