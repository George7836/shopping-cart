import React from 'react'
import { ReactComponent as DeleteIcon } from './../assets/icons/delete.svg'
import { ReactComponent as PlusIcon } from './../assets/icons/plus.svg'
import { ReactComponent as MinusIcon } from './../assets/icons/minus.svg'

type CartCardProps = {
    img: string
    title: string
    count: number
    price: number
}

export default function CartCard() {
  return (
    <div className='cart-card'>
        <div className='cart-card__top'>
            <div className='cart-card__info'>
                <img src='./images/Apple-BYZ-S852I.png' alt='' className='cart-card__img'/>
                <div className='cart-card__data'>
                    <h3 className='cart-card__title'>Apple BYZ S852I</h3>
                    <span className='cart-card__price'>2927 ₽</span>
                </div>
            </div>
            <button className='cart-card__btn btn-reset'><DeleteIcon/></button>
        </div>

        <div className='cart-card__down'>
            <div className='cart-card__counter counter-cart'>
                <button className='counter-cart__btn btn-reset'>
                    <MinusIcon className='counter-cart__icon'/>
                </button>
                <span className='counter-cart__total'>1</span>
                <button className='counter-cart__btn btn-reset'>
                    <PlusIcon className='counter-cart__icon'/>
                </button>
            </div>
            <span className='cart-card__total-price'>2927 ₽</span>
        </div>
    </div>
  )
}
