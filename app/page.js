'use client';
import { useEffect, useState } from 'react';
import { fetchMakes, generateYears } from './data/fetch';
import MakeSelector from './components/MakeSelector';
import YearSelector from './components/YearSelector';
import NextButton from './components/NextButton';

export default function HomePage() {
  const [makes, setMakes] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMakes()
      .then(setMakes)
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    setYears(generateYears());
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-black">
          Select Vehicle Make and Year
        </h1>

        {error && <p className="text-red-500">{error}</p>}

        <div className="space-y-4">
          <MakeSelector
            makes={makes}
            selectedMake={selectedMake}
            setSelectedMake={setSelectedMake}
          />

          <YearSelector
            years={years}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />

          <NextButton selectedMake={selectedMake} selectedYear={selectedYear} />
        </div>
      </div>
    </div>
  );
}
