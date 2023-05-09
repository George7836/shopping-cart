import React from 'react'
import { ReactComponent as StarIcon } from './../assets/icons/star.svg'

type CardProps = {
  title: string,
  img: string,
  price: number,
  prevPrice?: number,
  rate: number
}

export default function Card({title, img, price, prevPrice, rate}: CardProps) {
  return (
    <div className='card'>
      <div className='card__img-wrapper'>
        <img src={img} alt={title} className='card__img'/>
      </div>
      <div className='card__info-top'>
        <h3 className='card__title'>{title}</h3>
        <div className='card__prices-block'>
          <span className='card__price'>{price} ₽</span>
          {prevPrice 
            ? <span className='card__prev-price'>{prevPrice} ₽</span>
            : ''
          }
        </div>
      </div>
      <div className='card__info-down'>
        <div className='card__rate'>
          <StarIcon/>
          <span>{rate}</span> 
        </div>
        <button className='card__btn btn-reset'>Купить</button>
      </div>
    </div>
  )
}
