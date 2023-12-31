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

export interface BaskeDatatItem extends DataItem {
  quantity: number;
}

export type DropdownProps = {
  onChange: (selectedOption: Option) => void;
  options: Option[];
};

export type ProductsProps = {
  selectedOption: Option;
};

export type CardProps = {
  item: DataItem;
}

export type BasketProps = {
  item: BaskeDatatItem;
}

export type OrderProps = {
  total: number;
}

export interface BasketState {
  array: BaskeDatatItem[];
}

export interface FavouriteState {
  fav_ids: number[];
}

export interface InputState {
  item: BaskeDatatItem;
}
