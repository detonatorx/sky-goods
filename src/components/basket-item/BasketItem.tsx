import React from 'react'
import { BasketProps, FavouriteState } from '../../types'
import './BasketItem.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourite, removeFromFavourite } from '../../store/favouriteReducer';
import heartChecked from '../../assets/heart_checked.png'
import { removeFromBasket } from '../../store/basketReducer';

const BasketItem = ({ item }: BasketProps) => {
  const { fav_ids } = useSelector((state: { favourite: FavouriteState }) => state.favourite);
  const dispatch = useDispatch();

  const isFav = fav_ids.includes(item.id);

  const handleFavourite = (id: number) => {
    !isFav
      ? dispatch(addToFavourite(id))
      : dispatch(removeFromFavourite(id));
  }

  const handleRemove = (id: number) => {
    dispatch(removeFromBasket(id));
  }


  return (
    <div className="basket-card">
      <div className="basket-card__left">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="basket-card__right">
        <div className='basket-card__title'>{item.name}</div>
        <div className='basket-card__description'>{item.description}</div>
        <div className='basket-card__price'>{new Intl.NumberFormat('ru-RU').format(item.price) + ' руб.'}</div>
        <div className="basket-card__buttons">
          <div className={`basket-card__favourite ${isFav && 'coral'}`} onClick={() => handleFavourite(item.id)}>
            {isFav && <img className="heart" src={heartChecked} alt="heart" />}
            {!isFav ? <div>Избранные</div> : <div className='coral'>В избранном</div>}
          </div>
          <div className="basket-card__remove" onClick={() => handleRemove(item.id)}>
            Удалить
          </div>
        </div>
      </div>
    </div>)
}

export default BasketItem
