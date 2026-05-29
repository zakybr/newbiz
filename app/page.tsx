import BentoGrid from "@/components/bento/BentoGrid";
import Hero from "@/components/Hero";
import PageTransition from "@/components/PageTransition";
import SprintTimeline from "@/components/SprintTimeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hurdler | Outcome-Contracted Content",
};

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <BentoGrid />
      <SprintTimeline />
    </PageTransition>
  );
}
