import Link from "next/link";
import BentoCard from "./BentoCard";

const tags = ["Attention", "Brand Lift", "Pipeline"];

type GuaranteeCardProps = {
  delay?: number;
};

export default function GuaranteeCard({ delay = 0 }: GuaranteeCardProps) {
  return (
    <BentoCard
      delay={delay}
      className="col-span-12 flex min-h-[320px] flex-col justify-between bg-green p-8 md:col-span-7 md:row-span-2"
    >
      <div>
        <p className="font-body text-[11px] font-normal uppercase tracking-widest text-white/50">
          THE MODEL
        </p>
        <h2 className="mt-6 font-display text-[36px] font-bold leading-[1.1] text-white">
          Guaranteed. Or we keep working.
        </h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white px-3.5 py-1.5 font-body text-[12px] font-normal text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Link
        href="#quote"
        className="mt-6 inline-block font-body text-[13px] font-normal text-white/60 transition-opacity hover:text-white/80"
      >
        How it works →
      </Link>
    </BentoCard>
  );
}
