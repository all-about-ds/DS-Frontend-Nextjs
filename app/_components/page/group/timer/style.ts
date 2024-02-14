import styled from "@emotion/styled";

export const GroupTimerPageLayout = styled.div`
  width: 66.25vw;
  margin: auto;
  min-width: 450px;
`;

export const MyTimerBox = styled.section`
  width: 24.11vw;
  min-width: 323px;
  margin: 8rem auto 4rem;
  display: flex;
  justify-content: space-between;
`;

export const ElementType = styled.h3`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: rgba(255, 255, 255, 0.9);
`;

export const ElementValue = styled.h1`
  width: 80px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 78px;
  color: rgba(255, 255, 255, 0.9);
`;

export const Colon = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 73px;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 18px;
`;

export const ButtonDecorate = styled.div`
  width: 12px;
  height: 6px;
  margin: 0 auto;
  background: #7139ea;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

export const TimerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 33px;
  margin: 0 auto;
  background: #7139ea;
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  border: none;
  outline: none;
`;

export const MemberTimerBox = styled.section`
  width: 100%;
  margin: 7rem auto 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  @media screen and (max-width: 1585px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1180px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 1020px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
