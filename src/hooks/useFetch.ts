import { useState } from "react";
import axios from "axios";

interface Params {
  page: number;
  limit: number;
}

export const useFetch = (url: string) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (params: Params | null = null) => {
    setIsLoading(true);
    await axios
      .get(`${url}`, { params })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { response, isLoading, error, fetchData };
};
