function ComparisonTable({ cars }) {
  if (!cars.length) return null;

  return (
    <div className="bg-white rounded-3xl shadow-lg mt-10 p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-6">
        Comparison Table
      </h2>

      <table className="w-full">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-3 text-left">
              Car
            </th>
            <th className="p-3 text-left">
              Price
            </th>
            <th className="p-3 text-left">
              Mileage
            </th>
            <th className="p-3 text-left">
              Safety
            </th>
            <th className="p-3 text-left">
              Features
            </th>
          </tr>
        </thead>

        <tbody>
          {cars.map((car) => (
            <tr
              key={car.id}
              className="border-b"
            >
              <td className="p-3">
                {car.model}
              </td>

              <td className="p-3">
                ₹
                {Number(
                  car.price
                ).toLocaleString()}
              </td>

              <td className="p-3">
                {car.mileage}
              </td>

              <td className="p-3">
                {car.safety}
              </td>

              <td className="p-3">
                {Array.isArray(
                  car.features
                )
                  ? car.features.join(
                      ", "
                    )
                  : car.features}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable;