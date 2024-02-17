import GroupChattingPage from "@/app/_components/page/group/chatting";

export default function GroupChatting({
  params,
}: {
  params: { groupId: number };
}) {
  return <GroupChattingPage groupId={params.groupId} />;
}
