import React from 'react';
import './PromoPage.css';

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
          <button className="promo__button promo__button--signup">
            Зарегистрироваться
          </button>
          <button className="promo__button promo__button--login">
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};