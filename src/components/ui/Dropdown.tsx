import React, { useState } from 'react'
import './Dropdown.scss'
import Select, { components } from 'react-select'
import arrow from '../../assets/arrow-down.png'

const options = [
  { value: 'new', label: 'Порядок: сперва новые' },
  { value: 'old', label: 'Порядок: сперва старые' },
]

type Props = {}

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: '30px',
  }),

};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={arrow} />
    </components.DropdownIndicator>
  );
};

const Dropdown = ({ onChange }) => {


  return (
    <div className="dropdown">
      <div className="dropdown__container">
        <Select
          closeMenuOnSelect
          components={{ DropdownIndicator, IndicatorSeparator: () => null }}
          defaultValue={options[0]}
          isMulti={false}
          options={options}
          styles={customStyles}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default Dropdown
