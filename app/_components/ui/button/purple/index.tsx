import * as S from "./style";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  isError?: boolean;
  margin?: string;
}

export default function PurpleButton({
  isError,
  style,
  children,
  ...rest
}: Props) {
  return (
    <S.Purple style={style} {...rest}>
      {children}
    </S.Purple>
  );
}
