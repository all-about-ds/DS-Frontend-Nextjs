"use client";

import * as S from "./style";
import * as Image from "@/app/_assets";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GroupDataAtom } from "@/app/_atoms/container";
import { useEffect, useState } from "react";
import groupRequest from "@/app/_api/request/group.request";
import { useQuery } from "@tanstack/react-query";

export default function GroupPageHeader({ idx }: { idx: number }) {
  const pathname = usePathname();
  const setGroupData = useSetRecoilState(GroupDataAtom);
  const resetGroupData = useResetRecoilState(GroupDataAtom);
  const [groupName, setGroupName] = useState("");

  const select = (currentPath: string) => {
    if (currentPath === pathname) {
      return "active";
    }
  };

  const getUgetGroupgroupDataByIdser = async () => {
    const response: any = await groupRequest.getGroupInformation(String(idx));
    return response?.data;
  };

  const { data: headerData, refetch: refetchHeaderData } = useQuery({
    queryKey: ["get-grou-header-data"],
    queryFn: getUgetGroupgroupDataByIdser,
  });

  useEffect(() => {
    setGroupData(headerData);
    setGroupName(headerData?.name);
  }, [headerData]);

  useEffect(() => {
    resetGroupData();
    refetchHeaderData();
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
