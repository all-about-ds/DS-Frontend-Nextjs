import styled from "@emotion/styled";

export const HeaderLayout = styled.header`
  width: 100%;
  height: 80px;
  background: rgba(16, 16, 16, 0.56);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderBottomBar = styled.div`
  background: rgba(255, 255, 255, 0.17);
  width: 100%;
  height: 1px;
  z-index: 999;
`;

export const HeaderContentWrapper = styled.div`
  width: 66.25%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1050px) {
    width: 97.5%;
  }
`;

export const StyledHeaderLogo = styled.div`
  cursor: pointer;
`;
