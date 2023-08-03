import { useState } from "react";
import axios, { AxiosError } from "axios";

interface Params {
  page: number;
  limit: number;
}

export const useFetch = (url: string) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = (params?: Params) => {
    setIsLoading(true);
    axios
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
