import { useState, useEffect } from 'react';
import { getFuelPrices } from '../services/FuelService';
import { FuelItem } from '../Models/FuelItem';

export function useFuelViewModel() {
  const [fuelList, setFuelList] = useState<FuelItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getFuelPrices();
        setFuelList(result);
      } catch (error) {
        console.error('Yakıt verisi alınamadı:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { fuelList, loading };
}
