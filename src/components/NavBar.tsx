import React from 'react'
import { ReactComponent as LikeIcon } from '../assets/icons/like.svg';
import { ReactComponent as CartIcon } from '../assets/icons/cart.svg';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
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
                <div className='header__indicator'>1</div>
            </div>
        </div>
    </header>
  )
}
