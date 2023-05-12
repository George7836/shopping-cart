import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as LangIcon } from './../assets/icons/lang.svg';
import { ReactComponent as VKIcon } from './../assets/icons/vk.svg';
import { ReactComponent as TelegramIcon } from './../assets/icons/telegram.svg';
import { ReactComponent as WhatsappIcon } from './../assets/icons/whatsapp.svg';

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__logo logo'>
            <NavLink to='/'>QPICK</NavLink>
        </div>
        <div className='footer__links'>
            <div className='footer__links-left'>
                <div className='footer__item'><a href='#'>Избранное</a></div>
                <div className='footer__item'><NavLink to='/cart'>Корзина</NavLink></div>
                <div className='footer__item'><a href='#'>Контакты</a></div>
            </div>
            <div className='footer__links-right'>
                <div className='footer__item'><a href='#'>Условия сервиса</a></div>
                <div className='footer__lang-block'>
                    <LangIcon/>
                    <div className='footer__lang footer__lang--selected'>Рус</div>
                    <div className='footer__lang'>Eng</div>
                </div>
            </div>
        </div>
        <div className='footer__socials socials'>
            <a href='#' className='socials__link'><VKIcon/></a>
            <a href='#' className='socials__link'><TelegramIcon/></a>
            <a href='#' className='socials__link'><WhatsappIcon/></a>
        </div>
    </footer>
  )
}
