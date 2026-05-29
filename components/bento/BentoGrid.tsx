import GuaranteeCard from "./GuaranteeCard";
import GuaranteeTypesCard from "./GuaranteeTypesCard";
import QuoteCard from "./QuoteCard";
import RiskCard from "./RiskCard";
import SprintStatsCard from "./SprintStatsCard";
import WhoQualifiesCard from "./WhoQualifiesCard";

export default function BentoGrid() {
  return (
    <section className="bg-off-white px-[5vw] py-12">
      <div className="grid grid-cols-12 gap-4">
        <GuaranteeCard delay={0} />
        <SprintStatsCard delay={0.08} />
        <RiskCard delay={0.16} />
        <WhoQualifiesCard delay={0.24} />
        <GuaranteeTypesCard delay={0.32} />
        <QuoteCard delay={0.4} />
      </div>
    </section>
  );
}
