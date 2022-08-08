// eslint-disable-next-line no-unused-vars
import React, { useCallback, useState } from "react";
import { timeout } from "../JS/functions";
import { TIMEOUT_SEC, ERROR_MESSAGE } from "../JS/config";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dishes, setDishes] = useState([]);

  const sendRequest = useCallback(async (url) => {
    try {
      const response = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);

      if (!response.ok) {
        throw new Error(response.status);
      }

      const items = await response.json();
      setDishes(items);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setDishes([]);

      setError(ERROR_MESSAGE);
    }
  }, []);

  return {
    sendRequest,
    isLoading,
    error,
    dishes,
  };
};

export default useHttp;
