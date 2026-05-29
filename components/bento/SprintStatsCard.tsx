import BentoCard from "./BentoCard";

type SprintStatsCardProps = {
  delay?: number;
};

export default function SprintStatsCard({ delay = 0 }: SprintStatsCardProps) {
  return (
    <BentoCard
      delay={delay}
      className="col-span-12 bg-white p-8 md:col-span-5"
    >
      <p className="font-body text-[11px] font-normal uppercase tracking-widest text-green/60">
        SPRINT
      </p>
      <p className="mt-4 font-display text-[60px] font-bold leading-none text-green">
        $12-18K
      </p>
      <p className="mt-3 font-body text-[13px] font-light text-near-black/50">
        Fixed fee. 8 weeks.
      </p>
    </BentoCard>
  );
}
