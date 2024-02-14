"use client";

import * as S from "./style";
import * as Image from "@/app/_assets";
import { useRecoilState, useResetRecoilState } from "recoil";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GroupDataAtom } from "@/app/_atoms/container";
import { useEffect, useState } from "react";
import groupRequest from "@/app/_api/request/group.request";
import { toast } from "react-toastify";

export default function GroupPageHeader({ idx }: { idx: number }) {
  const pathname = usePathname();
  const router = useRouter();
  const [groupData, setGroupData] = useRecoilState(GroupDataAtom);
  const resetGroupData = useResetRecoilState(GroupDataAtom);
  const [groupName, setGroupName] = useState("");

  const select = (currentPath: string) => {
    if (currentPath === pathname) {
      return "active";
    }
  };

  useEffect(() => {
    const moveToClientSideData = () => {
      if (groupData?.name) {
        setGroupName(groupData?.name);
      }
    };

    const getGroupgroupDataById = async () => {
      try {
        const res: any = await groupRequest.getGroupInformation(String(idx));
        setGroupData(res.data);
        moveToClientSideData();
      } catch (e: any) {
        if (e.response.status === 404) {
          toast.error("존재하지 않는 그룹입니다");
          router.replace("/");
        }
      }
    };

    resetGroupData();
    getGroupgroupDataById();
  }, [idx]);

  return (
    <S.GroupPageHeader>
      <S.Elements>
        <Link href={"/"}>
          <Image.BackButton />
        </Link>
      </S.Elements>
      <S.Elements className="center">
        <p>{groupName}</p>
      </S.Elements>
      <S.Elements>
        <Link href={"/group/" + idx + "/chatting"}>
          <div className={select("/group/" + idx + "/chatting")}>
            <Image.ChattingIcon />
          </div>
        </Link>
        <Link href={"/group/" + idx + "/timer"}>
          <div className={select("/group/" + idx + "/timer")}>
            <Image.TimerIcon />
          </div>
        </Link>
        <Image.FaceTimeIcon />
        <Link href={"/group/" + idx + "/information"}>
          <div className={select("/group/" + idx + "/information")}>
            <Image.InformationIcon />
          </div>
        </Link>
      </S.Elements>
    </S.GroupPageHeader>
  );
}
