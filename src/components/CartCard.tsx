import React from 'react'
import { ReactComponent as DeleteIcon } from './../assets/icons/delete.svg'
import { ReactComponent as PlusIcon } from './../assets/icons/plus.svg'
import { ReactComponent as MinusIcon } from './../assets/icons/minus.svg'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storedItems from './../data/headphones.json'

type CartCardProps = {
    id: number
    quantity: number
}

export default function CartCard({id, quantity}: CartCardProps) {
    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()
    const item = storedItems.find((item) => item.id === id)
    if(item === null) return null

    return (
    <div className='cart-card'>
        <div className='cart-card__top'>
            <div className='cart-card__info'>
                <img src={item?.img} alt={item?.title} className='cart-card__img'/>
                <div className='cart-card__data'>
                    <h3 className='cart-card__title'>{item?.title}</h3>
                    <span className='cart-card__price'>{item?.price} ₽</span>
                </div>
            </div>
            <button 
                className='cart-card__btn btn-reset'
                onClick={() => removeFromCart(id)}
            >
                <DeleteIcon/>
            </button>
        </div>

        <div className='cart-card__down'>
            <div className='cart-card__counter counter-cart'>
                <button 
                    className='counter-cart__btn btn-reset'
                    onClick={() => decreaseCartQuantity(id)}
                >
                    <MinusIcon className='counter-cart__icon'/>
                </button>
                <span className='counter-cart__total'>{quantity}</span>
                <button 
                    className='counter-cart__btn btn-reset'
                    onClick={() => increaseCartQuantity(id)}    
                >
                    <PlusIcon className='counter-cart__icon'/>
                </button>
            </div>
            <span className='cart-card__total-price'>{item!.price * quantity} ₽</span>
        </div>
    </div>
    )
}
