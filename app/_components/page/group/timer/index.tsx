"use client";

import { Unsubscribe, off, onValue, ref } from "@firebase/database";
import { useEffect, useState } from "react";
import * as S from "./style";
import { useRecoilState, useRecoilValue } from "recoil";
import { set } from "firebase/database";
import { TimerUserType } from "@/app/_types/user.type";
import { GroupDataAtom, UserDataAtomFamily, UserIdAtom } from "@/app/_atoms";
import { db } from "@/app/_shared/firebase";
import GroupPageHeader from "@/app/_components/common/header/group-page";
import MemberTimerItem from "@/app/_components/ui/group/timer";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import groupRequest from "@/app/_api/request/group.request";

type MyInfo = TimerUserType;

export default function GroupTimerPage({ groupId }: { groupId: number }) {
  const [users, setUsers] = useState<TimerUserType[]>([]);
  const [active, setActive] = useState<boolean>(false);
  const [userId] = useRecoilState(UserIdAtom);
  const groupData = useRecoilValue(GroupDataAtom);
  const [userName] = useRecoilState(UserDataAtomFamily("name"));
  const [groupName, setGroupName] = useState("");
  const router = useRouter();
  const [myInfo, setMyInfo] = useState<MyInfo>({
    name: "",
    time: 0,
    active: false,
    id: 0,
  });

  useEffect(() => {
    const checkServerAndClientSync = () => {
      if (groupData?.name !== "") {
        setGroupName(groupData?.name);
      }
    };

    const checkIsMember = async () => {
      try {
        const response: any = await groupRequest.isMember(groupId);

        if (response.data.isMember) {
          checkServerAndClientSync();
        } else {
          router.replace("/");
          toast.error("잘못된 접근입니다");
        }
      } catch {
        router.replace("/");
        toast.error("잘못된 접근입니다");
      }
    };

    checkIsMember();
  }, [groupData]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setActive(false);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const timerRef = ref(db, `/timers/${groupName}/users`);

    const unscribe: Unsubscribe = onValue(timerRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const timer: TimerUserType[] = Object.values(data);
        setUsers(timer);
        timer.forEach((item) => {
          if (item.id === userId) {
            setMyInfo(item);
          }
        });
      }
    });

    return () => {
      off(timerRef, "value", unscribe);
    };
  }, [groupName]);

  useEffect(() => {
    let time = Number(myInfo?.time);

    if (active) {
      const id = setInterval(() => {
        time = time += 1;

        set(ref(db, `timers/${groupName}/users/${userName}`), {
          name: userName,
          time: time,
          active: active,
          id: userId,
        });
      }, 1000);

      return () => clearInterval(id);
    }

    if (!active && myInfo.time !== 0) {
      set(ref(db, `timers/${groupName}/users/${userName}`), {
        name: userName,
        time: time,
        active: false,
        id: userId,
      });
    }
  }, [active]);

  const format = (type: string) => {
    const time = myInfo.time;

    const hour = time / 3600;
    const minute = (time % 3600) / 60;
    const second = time % 60;

    if (type == "hour") {
      return hour > 9 ? parseInt(String(hour)) : "0" + parseInt(String(hour));
    }

    if (type == "minute") {
      return minute > 9
        ? parseInt(String(minute))
        : "0" + parseInt(String(minute));
    }

    if (type == "second") {
      return second > 9 ? second : "0" + second;
    }
  };

  return (
    <S.GroupTimerPageLayout>
      <GroupPageHeader idx={groupId} />
      <S.MyTimerBox>
        <div className="hour">
          <S.ElementType>시간</S.ElementType>
          <S.ElementValue>{format("hour")}</S.ElementValue>
        </div>
        <S.Colon>:</S.Colon>
        <div className="minute">
          <S.ElementType>분</S.ElementType>
          <S.ElementValue>{format("minute")}</S.ElementValue>
        </div>
        <S.Colon>:</S.Colon>
        <div className="second">
          <S.ElementType>초</S.ElementType>
          <S.ElementValue>{format("second")}</S.ElementValue>
        </div>
      </S.MyTimerBox>
      <S.ButtonDecorate />
      {!active && (
        <S.TimerButton onClick={() => setActive(true)}>시작</S.TimerButton>
      )}
      {active && (
        <S.TimerButton onClick={() => setActive(false)}>중단</S.TimerButton>
      )}
      <S.MemberTimerBox>
        {users
          .filter((item) => item.name !== userName)
          .map((item, index) => (
            <MemberTimerItem
              key={index}
              memberName={item.name}
              memberTime={item.time}
              isActive={item.active}
            />
          ))}
      </S.MemberTimerBox>
    </S.GroupTimerPageLayout>
  );
}
