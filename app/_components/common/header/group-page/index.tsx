"use client";

import * as S from "./style";
import * as Image from "@/app/_assets";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GroupTitleAtom } from "@/app/_atoms";

type titleType = string | "그룹정보" | "타이머";

export default function GroupPageHeader({
  title,
  groupId,
}: {
  title?: titleType;
  groupId: number;
}) {
  const pathname = usePathname();
  const [groupTitle, setGroupTitle] = useRecoilState(GroupTitleAtom);

  const select = (currentPath: string) => {
    if (currentPath === pathname) {
      return "active";
    }
  };

  useEffect(() => {
    if (title !== undefined && title !== "타이머") {
      setGroupTitle(title);
    }
  }, [title]);

  return (
    <S.GroupPageHeader>
      <S.Elements>
        <Link
          href={"/"}
          onClick={() => {
            setGroupTitle("");
          }}
        >
          <Image.BackButton />
        </Link>
      </S.Elements>
      <S.Elements className="center">
        <p>{title}</p>
      </S.Elements>
      <S.Elements>
        <Link
          href={{
            pathname: "/group/" + groupId + "/chatting",
            query: { groupName: String(groupTitle) },
          }}
          as={"/group/" + groupId + "/chatting"}
        >
          <div className={select("/group/" + groupId + "/chatting")}>
            <Image.ChattingIcon />
          </div>
        </Link>
        <Link
          href={{
            pathname: "/group/" + groupId + "/timer",
            query: { groupName: String(groupTitle) },
          }}
          as={"/group/" + groupId + "/timer"}
        >
          <div className={select("/group/" + groupId + "/timer")}>
            <Image.TimerIcon />
          </div>
        </Link>
        <Image.FaceTimeIcon />
        <Link href={"/group/" + groupId + "/information"}>
          <div className={select("/group/" + groupId + "/information")}>
            <Image.InformationIcon />
          </div>
        </Link>
      </S.Elements>
    </S.GroupPageHeader>
  );
}
