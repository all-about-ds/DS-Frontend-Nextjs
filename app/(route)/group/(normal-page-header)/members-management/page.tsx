import GroupMembersManagementPage from "@/app/_components/page/group/members-management";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DS | 멤버관리",
  description: "그룹원을 관리해요.",
  openGraph: {
    title: "DS | 멤버관리",
    description: "그룹원을 관리해요.",
  },
};

export default function GroupMembersManagement() {
  return <GroupMembersManagementPage />;
}
