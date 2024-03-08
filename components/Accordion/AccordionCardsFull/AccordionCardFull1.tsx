import './../Accordion.scss';

import React from 'react';

const AccordionCardFull1 = () => {
  return (
    <div className="accordion__expand ">
      <div>
        <p>
          В десятилетнем исследовании <b>«Генетическая эпидемиология ХОБЛ» (COPDGene)</b> среди
          пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание женщин (66%), а
          в возрасте 60-64 лет количество женщин и мужчин.
        </p>
        <p>
          Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что
          дыхательные пути курящих женщин имеют более <b>высокий процент площади стенок,</b> но
          меньшую площадь просвета, внутренний диаметр и толщину дыхательных путей по сравнению с
          курящими мужчинами.
        </p>
      </div>
      <img
        src="/Diagram.png"
        alt="диаграмма эпидемиологического распределения ХОБЛ среди мужчин и женщин "
      />
    </div>
  );
};

export default AccordionCardFull1;
