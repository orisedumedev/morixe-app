import PortfolioCard from "./PortfolioCard";
import usePortfolio from "./usePortfolio";

import {
  SectionHeader,
} from "@/features/dashboard/components";

const PortfolioCards = () => {
  const {
    portfolio,
    loading,
    error,
  } = usePortfolio();

  if (loading) {
    return (
      <p className="text-slate-400">
        Loading portfolio...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-red-400">
        {error}
      </p>
    );
  }

  return (
    <section>

      <SectionHeader
        title="Portfolio Overview"
        subtitle="Summary of your trading account"
      />

      <div
        className="
          grid
          gap-6
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {portfolio.map((card) => (
          <PortfolioCard
            key={card.id}
            {...card}
          />
        ))}
      </div>

    </section>
  );
};

export default PortfolioCards;