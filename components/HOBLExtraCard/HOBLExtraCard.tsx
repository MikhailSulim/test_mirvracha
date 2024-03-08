import './HOBLExtraCard.scss';

import React from 'react';

const HOBLExtraCard = ({ text }: { text: string }) => {
  return <div className="extra-card" dangerouslySetInnerHTML={{ __html: text }}></div>;
};

export default HOBLExtraCard;
