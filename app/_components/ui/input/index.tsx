import * as S from "./style";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  margin?: string;
  isError?: boolean;
  register?: any;
}

export default function NormalInput(props: Props) {
  const { ...rest } = props;
  return (
    <S.InputWrapper style={{ margin: props.margin }}>
      <S.InputTitle isError={props.isError}> {props.title}</S.InputTitle>
      <S.Input isError={props.isError} {...rest} {...props.register} />
    </S.InputWrapper>
  );
}
