export async function fetchMakes() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vehicles/GetMakesForVehicleType/car?format=json`
    );
    const data = await response.json();
    return data.Results || [];
  } catch (err) {
    console.error('Error fetching makes:', err);
    throw new Error('Failed to load vehicle makes. Please try again.');
  }
}

export function generateYears() {
  const currentYear = new Date().getFullYear();
  return Array.from(
    { length: currentYear - 2015 + 1 },
    (_, index) => 2015 + index
  );
}

export async function fetchVehicleModels(makeId, year) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    const data = await response.json();
    return data.Results || [];
  } catch (err) {
    throw new Error('Failed to load models');
  }
}
