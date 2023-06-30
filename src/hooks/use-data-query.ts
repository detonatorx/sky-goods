import { useState } from "react";
import { data as mock } from '../mocks/data';

export const useDataQuery = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);  // состояние загрузки (спиннер)

  const getList = async () => {
    setIsLoading(true);

    try {
      // Simulate an asynchronous API call
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setData(mock); // Update the data state with the result

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return { data, getList, isLoading }
}
