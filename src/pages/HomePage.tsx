import React, { useState } from 'react';
import Products from '../components/products/Products';
import Dropdown from '../components/ui/Dropdown';

type Props = {}

const options = [
  { value: 'new', label: 'Порядок: сперва новые' },
  { value: 'old', label: 'Порядок: сперва старые' },
]

const HomePage = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (selectedOption) => {
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
