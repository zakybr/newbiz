import ApplyContent from "@/components/ApplyContent";
import PageTransition from "@/components/PageTransition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply | Hurdler",
};

export default function Apply() {
  return (
    <PageTransition>
      <ApplyContent />
    </PageTransition>
  );
}
