import { useEffect, useState } from 'react';
import { getFuelPrices } from '../services/FuelService';
import { FuelItem } from '../models/FuelItem';

export function useFuelViewModel(city: string, district: string) {
  const [fuelList, setFuelList] = useState<FuelItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const result = await getFuelPrices(city, district);
        setFuelList(result);
      } catch (error) {
        console.error('Yakıt verisi alınamadı:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [city, district]);

  return { fuelList, loading };
}
