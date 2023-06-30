import React, { useEffect } from 'react'
import './Products.scss'
import Card from '../card/Card';
import { useDataQuery } from '../../hooks/use-data-query';
import spinner from '../../assets/spinner.gif';
import { ProductsProps } from '../../types';

const Products = ({ selectedOption }: ProductsProps) => {
  const { data, getList, isLoading } = useDataQuery();

  useEffect(() => {
    getList(selectedOption);
  }, [selectedOption])

  return (
    <>
      {
        isLoading ? (
          <div className="spinner" >
            <img src={spinner} alt="spinner" />
          </div >
        ) : (
          <div className="products-container">
            {data && data.map((product) => (
              <Card item={product} key={product.id} />
            ))}
          </div>
        )
      }
    </>
  );
}

export default Products

