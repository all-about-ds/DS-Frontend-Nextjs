import styled from "@emotion/styled";

export const MyPostCard = styled.div`
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.81) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 10px;
  width: 100%;
  height: 200px;
  cursor: pointer;

  @media screen and (max-width: 660px) {
    height: 165px;
  }
`;

export const ItemBackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 165px;
  border-radius: 10px;
  object-fit: cover;
`;

export const Shadow = styled.div`
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.81) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 10px;
  width: 100%;
  height: 165px;
  z-index: 5;
`;

export const ItemName = styled.p`
  position: absolute;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  z-index: 10;
  margin: 1.25rem 0 0 1.25rem;
`;
