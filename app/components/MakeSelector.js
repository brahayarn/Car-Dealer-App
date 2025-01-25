import React from 'react';

export default function MakeSelector({ makes, selectedMake, setSelectedMake }) {
  return (
    <select
      value={selectedMake}
      onChange={(e) => setSelectedMake(e.target.value)}
      className="p-2 border border-gray-300 rounded w-full text-black"
    >
      <option value="">Select Make</option>
      {makes.map((make) => (
        <option key={make.MakeId} value={make.MakeId}>
          {make.MakeName}
        </option>
      ))}
    </select>
  );
}
