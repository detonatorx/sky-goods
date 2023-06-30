export type Option = {
  value: string;
  label: string;
};

export interface DataItem {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  date: string;
}

export type DropdownProps = {
  onChange: (selectedOption: Option) => void;
  options: Option[];
};

export type ProductsProps = {
  selectedOption: Option;
};

export type CardProps= {
  item: DataItem;
}