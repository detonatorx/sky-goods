import React, { useState } from 'react';
import Products from '../components/products/Products';
import { Option } from '../types';
import Dropdown from '../components/ui/dropdown/Dropdown';

const options = [
  { value: 'new', label: 'Порядок: сперва новые' },
  { value: 'old', label: 'Порядок: сперва старые' },
]

const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  const handleSelectChange = (selectedOption: Option) => {
    setSelectedOption(selectedOption);
  };

  return (
    <>
      <Dropdown onChange={handleSelectChange} options={options} />
      <Products selectedOption={selectedOption} />
    </>
  )
}

export default HomePage
