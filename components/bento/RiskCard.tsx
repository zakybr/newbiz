import BentoCard from "./BentoCard";

type RiskCardProps = {
  delay?: number;
};

export default function RiskCard({ delay = 0 }: RiskCardProps) {
  return (
    <BentoCard
      delay={delay}
      className="relative col-span-12 bg-near-black p-8 md:col-span-5"
    >
      <p className="font-body text-[11px] font-normal uppercase tracking-widest text-white/40">
        OUR GUARANTEE
      </p>
      <p className="mt-4 font-display text-[22px] font-semibold text-white">
        Miss by &gt;20%?
      </p>
      <p className="mt-2 font-body text-[14px] font-light text-white/60">
        50% refund. In the contract.
      </p>
      <div
        aria-hidden
        className="absolute bottom-8 right-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/30"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 8.5L6.5 12L13 4"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </BentoCard>
  );
}
