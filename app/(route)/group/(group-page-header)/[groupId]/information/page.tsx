import GroupInformationPage from "@/app/_components/page/group/information";

export default function GroupInformation({
  params,
}: {
  params: { groupId: number };
}) {
  return <GroupInformationPage groupId={params.groupId} />;
}
