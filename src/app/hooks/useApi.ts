'use client'
import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

interface UseApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

export const useApi = <T,>(url: string): UseApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    if(!url) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<T>(url);
        setData(response.data);
      } catch (err) {
        setError(err as AxiosError);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
