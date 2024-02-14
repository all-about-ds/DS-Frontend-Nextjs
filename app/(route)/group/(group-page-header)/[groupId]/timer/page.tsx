import GroupTimerPage from "@/app/_components/page/group/timer";

export default function GroupTimer({
  params,
}: {
  params: { groupId: number };
}) {
  return <GroupTimerPage groupId={params.groupId} />;
}
