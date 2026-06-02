import ModelContent from "@/components/ModelContent";
import PageTransition from "@/components/PageTransition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Model | Hurdler",
};

export default function Model() {
  return (
    <PageTransition>
      <ModelContent />
    </PageTransition>
  );
}
