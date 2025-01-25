import { Suspense } from 'react';
import { VehicleModelList } from '../../../components/VehicleModelList';
import { generateStaticParams } from '../../../utils/generateStaticParams';

export async function getStaticPathsForResults() {
  return await generateStaticParams();
}

export default async function ResultPage({ params }) {
  const { makeId, year } = await params;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Vehicle Models for {makeId} - {year}
        </h1>

        <Suspense fallback={<p className="text-gray-500">Loading models...</p>}>
          <VehicleModelList makeId={makeId} year={year} />
        </Suspense>
      </div>
    </div>
  );
}
