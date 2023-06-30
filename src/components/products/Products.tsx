import React, { useEffect } from 'react'
import './Products.scss'
import Card from '../card/Card';
import { useDataQuery } from '../../hooks/use-data-query';
import spinner from '../../assets/spinner.gif';

type Props = {}

const Products = ({ selectedOption }) => {
  const { data, getList, isLoading } = useDataQuery();

  useEffect(() => {
    getList(selectedOption);
  }, [selectedOption])

  return (
    <>
    {console.log('data', data)}
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

