function RecommendationCard({ car }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 hover:scale-105 transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold">
            {car.model}
          </h3>

          <p className="text-gray-500">
            {car.fuel}
          </p>
        </div>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
          ₹
          {Number(car.price).toLocaleString()}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-6">
        <div className="bg-slate-100 p-3 rounded-xl">
          <p className="text-sm text-gray-500">
            Mileage
          </p>
          <p className="font-bold">
            {car.mileage}
          </p>
        </div>

        <div className="bg-slate-100 p-3 rounded-xl">
          <p className="text-sm text-gray-500">
            Safety
          </p>
          <p className="font-bold">
            {car.safety}/5
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-2">
          Features
        </h4>

        <div className="flex flex-wrap gap-2">
          {Array.isArray(car.features)
            ? car.features.map((feature) => (
                <span
                  key={feature}
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))
            : (
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                {car.features}
              </span>
            )}
        </div>
      </div>
    </div>
  );
}

export default RecommendationCard;