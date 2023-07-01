import React from 'react'
import './Dropdown.scss'
import Select, { DropdownIndicatorProps, components } from 'react-select'
import arrow from '../../../assets/arrow-down.png'
import { DropdownProps } from '../../../types';

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: '30px',
  }),

};

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={arrow} alt="Dropdown Indicator" />
    </components.DropdownIndicator>
  );
};

const Dropdown = ({ onChange, options }: DropdownProps) => {
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
