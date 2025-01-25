import React from 'react';
import Link from 'next/link';

export default function NextButton({ selectedMake, selectedYear }) {
  return (
    <Link
      href={
        selectedMake && selectedYear
          ? `/result/${selectedMake}/${selectedYear}`
          : '#'
      }
    >
      <button
        disabled={!selectedMake || !selectedYear}
        className={`p-2 mt-4 w-full bg-blue-500 text-white rounded ${!selectedMake || !selectedYear ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Next
      </button>
    </Link>
  );
}
