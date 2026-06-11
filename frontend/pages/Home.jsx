import { useState } from "react";
import axios from "axios";
import PreferenceForm from "../src/components/PreferenceForm";
import Result from "./Result";

const Home = () => {
  const [cars, setCars] = useState([]);

  const getRecommendations = async ({
    budget,
    fuelType,
    priority,
  }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/recommend",
        {
          budget,
          fuelType,
          priority,
        }
      );

      setCars(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-10 shadow-xl">
          <p className="uppercase tracking-widest text-sm">
            AI Car Advisor
          </p>

          <h1 className="text-5xl font-bold mt-3">
            Find Your Perfect Car
          </h1>

          <p className="mt-4 text-lg text-blue-100 max-w-2xl">
            Tell us your budget, fuel preference,
            and buying priority. We'll recommend
            the best cars for your needs.
          </p>
        </div>

        <PreferenceForm onSubmit={getRecommendations} />

        <Result cars={cars} />
      </div>
    </div>
  );
};

export default Home;