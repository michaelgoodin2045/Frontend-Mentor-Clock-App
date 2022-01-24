import React from 'react';
import arrow from '../assets/desktop/icon-arrow-up.svg';

const Button = () => {
  return (
    <div className="button">
      <button className="more-btn">
        <div className="btn-text btn-value-more">More</div>
        <div className="btn-text btn-value-less">less</div>
        <div className="arrow">
          <img src={arrow} alt="arrow" />
        </div>
      </button>
    </div>
  );
};

export default Button;
