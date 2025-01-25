'use client';
import { useEffect, useState } from 'react';
import { fetchVehicleModels } from '../data/fetch';

export function VehicleModelList({ makeId, year }) {
  const [models, setModels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadModels() {
      try {
        const fetchedModels = await fetchVehicleModels(makeId, year);
        setModels(fetchedModels);
      } catch (err) {
        setError('Failed to load models');
      }
    }

    if (makeId && year) {
      loadModels();
    }
  }, [makeId, year]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (models.length === 0) {
    return <p className="text-gray-500">No models available.</p>;
  }

  return (
    <ul className="space-y-4">
      {models.map((model, index) => (
        <li
          key={`${model.Model_ID}-${model.Model_Name}-${index}`}
          className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
        >
          <p className="text-lg text-gray-800">{model.Model_Name}</p>
        </li>
      ))}
    </ul>
  );
}
