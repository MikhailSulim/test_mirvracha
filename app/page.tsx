'use client';

import HeaderWaves from '@/components/HeaderWaves/HeaderWaves';
import './page.scss';
import Section from '@/components/Section/Section';
import { HOBLCards, HOBLExtraCards, AccordionCards } from './data';
import HOBLCard from '@/components/HOBLCard/HOBLCard';
import HOBLExtraCard from '@/components/HOBLExtraCard/HOBLExtraCard';
import Accordion from '@/components/Accordion/Accordion';
import AccordionCardFull1 from '@/components/Accordion/AccordionCardsFull/AccordionCardFull1';
import AccordionCardFull2 from '@/components/Accordion/AccordionCardsFull/AccordionCardFull2';

export default function Main() {
  return (
    <main className="main">
      <HeaderWaves />
      <div className="content">
        <Section title="ХОБЛ: мифы и реальность">
          <div className="accordion-container">
            <Accordion
              iconId="user"
              myth={AccordionCards[0].myth}
              text={AccordionCards[0].titleText}>
              <AccordionCardFull1 />
            </Accordion>
            <Accordion
              iconId="chart"
              myth={AccordionCards[1].myth}
              text={AccordionCards[1].titleText}
              second>
              <AccordionCardFull2 />
            </Accordion>
          </div>
        </Section>

        <Section title="Терапия ХОБЛ: что в фокусе?">
          <p className="info">
            Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
          </p>
          <h3 className="subtitle">
            Приоритетные направления фармакотерапевтической стратегии при ХОБЛ<sup>1</sup>:
          </h3>
          <div className="cards">
            <div className="cards-container">
              {HOBLCards.map((item) => (
                <HOBLCard key={item.id} id={item.id} title={item.title} text={item.text} />
              ))}
            </div>
            <div className="cards-container cards-container_arrow">
              <div>
                <svg>
                  <use xlinkHref="/sprite.svg#triangle" />
                </svg>
              </div>
              <div>
                <svg>
                  <use xlinkHref="/sprite.svg#triangle" />
                </svg>
              </div>
              
            </div>
            <div className="cards-container">
              {HOBLExtraCards.map((item, idx) => (
                <HOBLExtraCard key={idx} text={item.text} />
              ))}
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
