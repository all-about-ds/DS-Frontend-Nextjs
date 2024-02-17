"use client";

import CenterAlignmentLayout from "@/app/_components/common/layout/alignment";
import GroupBuilder from "@/app/_components/ui/group/builder";

export default function EditGroupPage() {
  return (
    <CenterAlignmentLayout>
      <GroupBuilder type="edit" />
    </CenterAlignmentLayout>
  );
}
