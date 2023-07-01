import React from 'react'
import './Card.scss'
import { BasketState, CardProps, DataItem, FavouriteState } from '../../types'
import heart from '../../assets/heart.png'
import heartChecked from '../../assets/heart_checked.png'
import cart from '../../assets/cart.png'
import cartChecked from '../../assets/cart_checked.png'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourite, removeFromFavourite } from '../../store/favouriteReducer';
import { addToBasket, removeFromBasket } from '../../store/basketReducer';

const Card = ({ item }: CardProps) => {
  const { fav_ids } = useSelector((state: { favourite: FavouriteState }) => state.favourite);
  const { array } = useSelector((state: { basket: BasketState }) => state.basket);
  const dispatch = useDispatch();

  const isFav = fav_ids.includes(item.id);
  const isCart = array.find(arr => arr.id === item.id) ? true : false;

  const handleCart = (item: DataItem, isCart: boolean) => {
    !isCart
      ? dispatch(addToBasket(item))
      : dispatch(removeFromBasket(item.id));
  };

  const handleFav = (id: number, isFav: boolean) => {
    !isFav
      ? dispatch(addToFavourite(id))
      : dispatch(removeFromFavourite(id));
  };

  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={item.img} alt={item.name} />

        <div className="product-card__buttons">
          <div onClick={() => handleCart(item, isCart)}>
            <img className="cart" src={!isCart ? cart : cartChecked} alt="cart" />
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
