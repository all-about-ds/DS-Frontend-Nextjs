"use client";

import CenterAlignmentLayout from "@/app/_components/common/layout/alignment";
import GroupBuilder from "@/app/_components/ui/group/builder";

export default function CreateGroupPage() {
  return (
    <CenterAlignmentLayout>
      <GroupBuilder groupType="create"></GroupBuilder>
    </CenterAlignmentLayout>
  );
}
