function ComparisonTable({ cars }) {
  if (!cars || cars.length === 0) {
    return null;
  }

  return (
    <section className="mt-10">
      <div className="bg-white rounded-3xl shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-slate-800">
            Comparison Table
          </h2>
          <p className="text-slate-500 mt-1">
            Compare the recommended cars side by side
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <th className="p-4 text-left rounded-l-xl">
                  Car
                </th>
                <th className="p-4 text-left">
                  Price
                </th>
                <th className="p-4 text-left">
                  Mileage
                </th>
                <th className="p-4 text-left">
                  Safety
                </th>
                <th className="p-4 text-left rounded-r-xl">
                  Features
                </th>
              </tr>
            </thead>

            <tbody>
              {cars.map((car, index) => (
                <tr
                  key={car.id}
                  className={`border-b hover:bg-slate-50 transition ${
                    index % 2 === 0
                      ? "bg-white"
                      : "bg-slate-50"
                  }`}
                >
                  <td className="p-4 font-semibold text-slate-800">
                    {car.model}
                  </td>

                  <td className="p-4 text-green-600 font-semibold">
                    ₹{Number(car.price).toLocaleString()}
                  </td>

                  <td className="p-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {car.mileage}
                    </span>
                  </td>

                  <td className="p-4">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                      {car.safety}/5
                    </span>
                  </td>

                  <td className="p-4 text-slate-600">
                    {Array.isArray(car.features)
                      ? car.features.join(", ")
                      : car.features}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ComparisonTable;