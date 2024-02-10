import * as S from "./style";

export default function LoadingSpinner({ isLoading }: { isLoading: boolean }) {
  return (
    <S.LoadingAnimation isLoading={isLoading}>
      <div className="spinner">
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
      </div>
    </S.LoadingAnimation>
  );
}
