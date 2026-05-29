import BentoCard from "./BentoCard";

type QuoteCardProps = {
  delay?: number;
};

export default function QuoteCard({ delay = 0 }: QuoteCardProps) {
  return (
    <BentoCard
      delay={delay}
      className="col-span-12 bg-off-white p-8 text-center md:p-12"
    >
      <blockquote
        id="quote"
        className="mx-auto max-w-4xl font-display text-[clamp(24px,3vw,40px)] font-bold italic leading-snug text-near-black"
      >
        Everyone is selling pieces of content. We sell the result those pieces
        are supposed to produce.
      </blockquote>
      <p className="mt-6 font-body text-[12px] text-near-black/40">
        — The Hurdler model
      </p>
    </BentoCard>
  );
}
