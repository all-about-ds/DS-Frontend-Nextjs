import GroupTimerPage from "@/app/_components/page/group/timer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DS | 그룹타이머",
  description: "그룹의 공부 시간을 기록해요.",
  openGraph: {
    title: "DS | 그룹타이머",
    description: "그룹의 공부 시간을 기록해요.",
  },
};

export default function GroupTimer({
  params,
}: {
  params: { groupId: number };
}) {
  return <GroupTimerPage groupId={params.groupId} />;
}
