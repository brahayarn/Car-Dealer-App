export async function generateStaticParams() {
  const makesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/vehicles/GetMakesForVehicleType/car?format=json`
  );
  const makesData = await makesResponse.json();
  const makes = makesData.Results || [];

  const years = Array.from(
    { length: new Date().getFullYear() - 2015 + 1 },
    (_, index) => 2015 + index
  );

  const paths = makes.flatMap((make) =>
    years.map((year) => ({
      params: { makeId: make.MakeId.toString(), year: year.toString() },
    }))
  );

  return { paths, fallback: 'blocking' };
}
