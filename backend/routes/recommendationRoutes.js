import express from "express";
import fs from "fs";
const router = express.Router();
const cars = JSON.parse(fs.readFileSync("./data/cars.json", "utf-8"));

const parseSafetyScore = (safety) => {
  const value = Number(String(safety).match(/\d+/)?.[0] ?? 0);
  return value;
};

const parseMileageScore = (mileage) => {
  const match = String(mileage).match(/\d+/g);
  return match ? Math.max(...match.map(Number)) : 0;
};

const parseFeatureScore = (features) => (Array.isArray(features) ? features.length : 0);

router.post("/recommend", (req, res) => {
  const body = req.body ?? {};
  const { budget, fuelType, priority } = body;

  if (!budget || !fuelType || !priority) {
    return res.status(400).json({
      error: "budget, fuelType, and priority are required",
    });
  }

  const requestedFuel = String(fuelType).toLowerCase();

  let filtered = cars.filter((car) => {
    const carFuel = String(car.fuel || "").toLowerCase();
    const fuelMatches =
      carFuel === requestedFuel ||
      carFuel.includes(requestedFuel) ||
      requestedFuel.includes(carFuel);

    return Number(car.price) <= Number(budget) && fuelMatches;
  });

  filtered = filtered.map((car) => {
    let score = 0;

    if (priority === "safety") {
      score = parseSafetyScore(car.safety) * 10;
    }
    if (priority === "mileage") {
      score = parseMileageScore(car.mileage);
    }
    if (priority === "features") {
      score = parseFeatureScore(car.features) * 10;
    }

    return { ...car, score };
  });

  filtered.sort((a, b) => b.score - a.score);
  res.json(filtered.slice(0, 3));
});

export default router;