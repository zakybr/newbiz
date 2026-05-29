import PageTransition from "@/components/PageTransition";
import ResultsContent from "@/components/ResultsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results | Hurdler",
};

export default function Results() {
  return (
    <PageTransition>
      <ResultsContent />
    </PageTransition>
  );
}
