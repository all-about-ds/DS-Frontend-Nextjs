import GroupChattingPage from "@/app/_components/page/group/chatting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DS | 그룹채팅",
  description: "채팅을 통해 그룹원과 소통해요.",
  openGraph: {
    title: "DS | 그룹채팅",
    description: "채팅을 통해 그룹원과 소통해요.",
  },
};

export default function GroupChatting({
  params,
}: {
  params: { groupId: number };
}) {
  return <GroupChattingPage groupId={params.groupId} />;
}
