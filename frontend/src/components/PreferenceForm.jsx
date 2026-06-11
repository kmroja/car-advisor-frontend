import { useState } from "react";

const budgetOptions = [
  { label: "Up to ₹15 Lakhs", value: "1500000" },
  { label: "Up to ₹20 Lakhs", value: "2000000" },
  { label: "Up to ₹40 Lakhs", value: "4000000" },
];

const fuelTypes = ["Petrol", "Diesel", "Electric"];

const priorityOptions = [
  { label: "Mileage", value: "mileage" },
  { label: "Safety", value: "safety" },
  { label: "Features", value: "features" },
];

function PreferenceForm({ onSubmit }) {
  const [budget, setBudget] = useState("1500000");
  const [fuelType, setFuelType] = useState("Petrol");
  const [priority, setPriority] = useState("safety");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      budget,
      fuelType,
      priority,
    });
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Car Preferences
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-4 gap-4"
      >
        <select
          value={budget}
          onChange={(e) =>
            setBudget(e.target.value)
          }
          className="border rounded-xl p-3"
        >
          {budgetOptions.map((item) => (
            <option
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </select>

        <select
          value={fuelType}
          onChange={(e) =>
            setFuelType(e.target.value)
          }
          className="border rounded-xl p-3"
        >
          {fuelTypes.map((type) => (
            <option key={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
          className="border rounded-xl p-3"
        >
          {priorityOptions.map((item) => (
            <option
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </select>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold"
          type="submit"
        >
          Get Recommendations
        </button>
      </form>
    </div>
  );
}

export default PreferenceForm;