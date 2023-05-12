import { ReactComponent as LikeIcon } from '../assets/icons/like.svg';
import { ReactComponent as CartIcon } from '../assets/icons/cart.svg';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

export default function NavBar() {
    const { cartQuantity } = useShoppingCart()

    return (
        <header className='header'>
            <div className='header__logo logo'>
                <NavLink to='/'>QPICK</NavLink>
            </div>
            <div className='header__items'>
                <div className='header__item'>
                    <LikeIcon/>
                    <div className='header__indicator'>1</div>
                </div>
                <div className='header__item'>
                    <NavLink to='/cart'>
                        <CartIcon/>
                    </NavLink>
                    {cartQuantity 
                        ? <div className='header__indicator'>{cartQuantity}</div>
                        : ''
                    }
                </div>
            </div>
        </header>
    )
}
