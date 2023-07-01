import { useState } from "react";
import { data as mock } from '../mocks/data';
import { DataItem, Option } from '../types';

export const useDataQuery = () => {
  const [data, setData] = useState<DataItem[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); // состояние загрузки (спиннер)

  const getList = async (selectedOption: Option) => {
    setIsLoading(true);
    console.log('selectedOption', selectedOption);
    try {
      // Simulate an asynchronous API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newData = [...mock];

      newData?.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return selectedOption.value === 'old'
          ? dateA - dateB : dateB - dateA;
      });

      setData(newData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return { data, getList, isLoading };
};
