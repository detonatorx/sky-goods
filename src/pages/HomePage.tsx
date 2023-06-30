import React, { useState } from 'react';
import Products from '../components/products/Products';
import Dropdown from '../components/ui/Dropdown';

type Props = {}

const HomePage = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <>
      <Dropdown onChange={handleSelectChange}/>
      <Products />
    </>
  )
}

export default HomePage
