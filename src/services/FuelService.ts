export async function getFuelPrices(city: string, district: string) {
  const response = await fetch(
    `https://api.collectapi.com/gasPrice/turkeyGasoline?district=${district}&city=${city}`,
    {
      method: 'GET',
      headers: {
        'authorization': 'apikey 2juarebgDqNdUbsJig52Yl:4MPQ2R1wJ2Pvwd3hCdEOHG',
        'content-type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Veri çekilemedi');
  }

  const data = await response.json();
  return data.result;
}
