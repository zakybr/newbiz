import Link from "next/link";
import BentoCard from "./BentoCard";

type WhoQualifiesCardProps = {
  delay?: number;
};

export default function WhoQualifiesCard({ delay = 0 }: WhoQualifiesCardProps) {
  return (
    <BentoCard
      delay={delay}
      className="col-span-12 bg-white p-8 md:col-span-4"
    >
      <p className="font-body text-[11px] font-normal uppercase tracking-widest text-near-black/60">
        WHO QUALIFIES
      </p>
      <h2 className="mt-4 font-display text-[24px] font-semibold leading-snug text-near-black">
        We qualify hard. On purpose.
      </h2>
      <Link
        href="/who-we-work-with"
        className="mt-6 inline-block font-body text-[13px] text-green transition-opacity hover:opacity-70"
      >
        See criteria →
      </Link>
    </BentoCard>
  );
}
