import React from 'react';

export default function YearSelector({ years, selectedYear, setSelectedYear }) {
  return (
    <select
      value={selectedYear}
      onChange={(e) => setSelectedYear(e.target.value)}
      className="p-2 border border-gray-300 rounded w-full text-black"
    >
      <option value="">Select Year</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}
