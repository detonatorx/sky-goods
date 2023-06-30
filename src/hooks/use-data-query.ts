import { useState } from "react";
import { data as mock } from '../mocks/data';

export const useDataQuery = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);  // состояние загрузки (спиннер)

  const getList = async (selectedOption) => {
    setIsLoading(true);
    console.log('selectedOption', selectedOption);
    try {
      // Simulate an asynchronous API call
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // setData(mock); // Update the data state with the result

      const newData = [...mock]

      newData?.sort((a, b) => {
        var dateA = new Date(a.date.split('.').join('-'));
        var dateB = new Date(b.date.split('.').join('-'));
        return selectedOption.value === 'old'
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime();
      })

      setData(newData)
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return { data, getList, isLoading }
}
