import React from 'react'
import './Card.scss'
import { CardProps, FavouriteState } from '../../types'
import heart from '../../assets/heart.png'
import heartChecked from '../../assets/heart_checked.png'
import cart from '../../assets/cart.png'
import cartChecked from '../../assets/cart_checked.png'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../../store/favouriteReducer';

const Card = ({ item }: CardProps) => {
  const { fav_ids } = useSelector((state: { favourite: FavouriteState }) => state.favourite);

  // });
  // const { basket } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const handleAddCart = (id: number) => {
    dispatch(add(id));
  };

  const handleFav = (id: number, isFav: boolean) => {
    !isFav ? dispatch(add(id)) : dispatch(remove(id));
  };

  const isFav = fav_ids.includes(item.id);

  { console.log('fav_ids', fav_ids) }

  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={item.img} alt={item.name} />

        <div className="product-card__buttons">
          <div onClick={() => handleAddCart(item.id)}>
            <img className="cart" src={cart} alt="cart" />
          </div>
          <div onClick={() => handleFav(item.id, isFav)}>
            <img className="heart" src={!isFav ? heart : heartChecked} alt="heart" />
          </div>
        </div>
      </div>
      <div className='product-card__title'>{item.name}</div>
      <div className='product-card__description'>{item.description}</div>
      <div className='product-card__price'>{new Intl.NumberFormat('ru-RU').format(item.price) + ' руб.'}</div>
    </div>
  )
}

export default Card
