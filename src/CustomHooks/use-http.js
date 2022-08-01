import React, { useCallback, useState } from "react";
// import { sendRequest } from "./JS/functions";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dishes, setDishes] = useState([]);

  const sendRequest = useCallback(async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const items = await response.json();
      setDishes(items);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setDishes([]);

      setError(`Unable to display the dishes. Please try later :(`);
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
