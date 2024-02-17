import * as S from "./style";
import * as Image from "@/app/_assets";

interface MemberTimerItemProps {
  memberName: string;
  memberTime: number;
  isActive: boolean;
}

export default function MemberTimerItem(props: MemberTimerItemProps) {
  const format = (time: number) => {
    const hour = time / 3600;
    const minute = (time % 3600) / 60;
    const second = time % 60;

    const hourValue =
      hour > 9 ? parseInt(String(hour)) : "0" + parseInt(String(hour));

    const minuteValue =
      minute > 9 ? parseInt(String(minute)) : "0" + parseInt(String(minute));

    const secondValue = second > 9 ? second : "0" + second;

    return hourValue + ":" + minuteValue + ":" + secondValue;
  };

  return (
    <S.MemberTimerItem isActive={props.isActive}>
      <Image.TimerIcon />
      <div>
        <S.MemberName>{props.memberName}</S.MemberName>
        <S.MemberTimer>{format(props.memberTime)}</S.MemberTimer>
      </div>
    </S.MemberTimerItem>
  );
}
