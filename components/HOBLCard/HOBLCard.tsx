import './HOBLCard.scss';

import React from 'react';
interface CardProps {
  id: number;
  title: string;
  text: string;
}

const HOBLCard: React.FC<CardProps> = ({ id, title, text }) => {
  return (
    <div className="card">
      <div className="card__image">
        <svg>
          <use xlinkHref="/sprite.svg#spray" />
        </svg>
        <div className="card__no">{id}</div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default HOBLCard;
