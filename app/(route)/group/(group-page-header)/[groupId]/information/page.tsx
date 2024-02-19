import GroupInformationPage from "@/app/_components/page/group/information";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DS | 그룹정보",
  description: "그룹의 정보를 한 눈에 살펴봐요.",
  openGraph: {
    title: "DS | 그룹정보",
    description: "그룹의 정보를 한 눈에 살펴봐요.",
  },
};

export default function GroupInformation({
  params,
}: {
  params: { groupId: number };
}) {
  return <GroupInformationPage groupId={params.groupId} />;
}
