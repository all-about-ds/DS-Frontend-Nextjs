import styled from "@emotion/styled";

export const GroupPageHeader = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0 1rem;
  background-color: rgba(255, 255, 255, 0);
`;

export const Elements = styled.div`
  display: flex;
  gap: 16px;
  color: white;

  & .active > svg > * > * {
    fill: #7848de;
  }

  & > div > svg {
    cursor: pointer;
  }

  &.center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
