import React from 'react';
import './PromoPage.css';
import { Link } from 'react-router-dom';

export const PromoPage: React.FC = () => {
  return (
    <div className="promo">
      <div className="promo__left">
        <div className="promo__logo">
          <h1 className="promo__logo-text">Xylosphere</h1>
        </div>
      </div>
      
      <div className="promo__right">
        <h1 className="promo__title">Происходит сейчас</h1>
        <h2 className="promo__subtitle">Присоединяйтесь к Xylosphere сегодня.</h2>
        
        <div className="promo__buttons">
          <Link to="/register" className="promo__button promo__button--signup">
            Зарегистрироваться
          </Link>
          <Link to="/login" className="promo__button promo__button--login">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
};