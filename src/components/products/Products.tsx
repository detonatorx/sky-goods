import React from 'react'
import './Products.scss'
import Card from '../card/Card';
import { data } from '../../mocks/data';

type Props = {}

const Products = (props: Props) => {
  return (
    <div className="products-container">
      {
        data.map((product) => (
          <Card item={product} key={product.id}/>
        ))
      }
    </div>
  );
}

export default Products

