import React from 'react'
import CartCard from '../components/CartCard'


export default function CartPage() {
  return (
    <main className='main'>
      <div className='cart'>
        <h2 className='cart__title'>Корзина</h2>
        <div className='cart__body'>
          <CartCard/>
          <div className='cart__total total'>
              <div className='total__top'>
                <span className='total__title'>ИТОГО</span>
                <span className='total__price'>₽ 2 927</span>
              </div>
              <button className='total__btn btn-reset'>Перейти к оформлению</button>
          </div>
        </div>
      </div>
    </main>
  )
}
