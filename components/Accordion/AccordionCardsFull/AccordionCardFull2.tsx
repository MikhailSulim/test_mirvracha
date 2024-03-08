import './../Accordion.scss';

import React from 'react';

const AccordionCardFull2 = () => {
  return (
    <div className="accordion__expand">
      <div>
        <p>
          <b>
            Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое
            или тяжелое обострение случится в течение 3 лет у 77% пациентов<sup>1</sup>.
          </b>
        </p>
        <p>
          В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов.
          <sup>2</sup>
          <br />
          Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте
          миокарда и некоторых злокачественных опухолях.
        </p>
      </div>

      <h3>Пятилетняя выживаемость пациентов</h3>
      <div className="container">
        <div className="accordion-card">
          <svg>
            <use xlinkHref="/sprite.svg#heart" />
          </svg>
          <h4>45,5%</h4>
          <p>
            пациентов с <b>сердечной недостаточностью</b>
            <sup>1</sup>
          </p>
          <span>Популяционное когортное исследование (N=385)</span>
        </div>

        <div className="accordion-card">
          <svg>
            <use xlinkHref="/sprite.svg#infarct" />
          </svg>
          <h4>45,5%</h4>
          <p>
            пациентов с <b>инфарктом миокарда</b>
            <sup>1</sup>
          </p>
          <span>Апостериорный анализ когортного исследования (N=2887)</span>
        </div>

        <div className="accordion-card">
          <svg>
            <use xlinkHref="/sprite.svg#bladder" />
          </svg>
          <h4>50,5%</h4>
          <p>
            пациентов с <b>раком мочевого пузыря</b>
          </p>
          <span>Исследование Национальной статистической службы (N=42642)</span>
        </div>
      </div>
    </div>
  );
};

export default AccordionCardFull2;
