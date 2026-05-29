import PageTransition from "@/components/PageTransition";
import WhoWeWorkWithContent from "@/components/WhoWeWorkWithContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Work With — Hurdler",
};

export default function WhoWeWorkWith() {
  return (
    <PageTransition>
      <WhoWeWorkWithContent />
    </PageTransition>
  );
}
