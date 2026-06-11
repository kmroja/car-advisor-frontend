import RecommendationCard from "../src/components/RecommendationCard";
import ComparisonTable from "../src/components/ComparisonTable";

const Result = ({ cars }) => {
  if (!cars.length) return null;

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-6">
        Top Recommendations
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <RecommendationCard
            key={car.id}
            car={car}
          />
        ))}
      </div>

      <ComparisonTable cars={cars} />
    </div>
  );
};

export default Result;