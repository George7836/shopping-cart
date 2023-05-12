import CartCard from '../components/CartCard'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storedItems from './../data/headphones.json'

export default function CartPage() {
  const { cartItems } = useShoppingCart()

  return (
    <main className='main'>
      <div className='cart'>
        <h2 className='cart__title'>Корзина</h2>
        <div className='cart__body'>
          <div className='cart__items'>
            {cartItems.length > 0
              ? cartItems.map((item) => (
                  <CartCard
                    key={item.id}
                    id={item.id}
                    quantity={item.quantity}
                  />
                ))
              : <div className='cart__empty'>Корзина пуста! Срочно что-нибудь купите!</div>
            }
          </div>
          <div className='cart__total total'>
              <div className='total__top'>
                <span className='total__title'>ИТОГО</span>
                <span className='total__price'>
                  ₽ {cartItems.reduce((total, cartItem) => {
                        const item = storedItems.find((item) => item.id === cartItem.id)
                        return total + (item?.price || 0) * cartItem.quantity
                      }, 0)
                    }
                </span>
              </div>
              <button className='total__btn btn-reset'>Перейти к оформлению</button>
          </div>
        </div>
      </div>
    </main>
  )
}
