import BentoCard from "./BentoCard";

const guaranteeTypes = [
  {
    number: "01",
    title: "Attention",
    description: "A defined CTR threshold, set before the sprint starts.",
  },
  {
    number: "02",
    title: "Brand Lift",
    description: "Pre/post survey movement on aided recall and sentiment.",
  },
  {
    number: "03",
    title: "Pipeline",
    description: "Named MQL count at an agreed CPL, tracked to CRM.",
  },
];

type GuaranteeTypesCardProps = {
  delay?: number;
};

export default function GuaranteeTypesCard({
  delay = 0,
}: GuaranteeTypesCardProps) {
  return (
    <BentoCard
      delay={delay}
      className="col-span-12 bg-white p-8 md:col-span-8"
    >
      <div className="flex flex-col gap-3 md:flex-row">
        {guaranteeTypes.map((type) => (
          <div
            key={type.title}
            className="flex-1 rounded-[12px] bg-off-white p-5"
          >
            <p className="font-display text-[48px] font-bold leading-none text-green/15">
              {type.number}
            </p>
            <p className="mt-3 font-display text-[16px] font-semibold text-near-black">
              {type.title}
            </p>
            <p className="mt-2 font-body text-[13px] font-light leading-relaxed text-near-black/50">
              {type.description}
            </p>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
