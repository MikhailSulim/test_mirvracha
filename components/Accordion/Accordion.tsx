'use client';

import Image from 'next/image';
import './Accordion.scss';
import React, { useState } from 'react';
interface AccordionProps {
  myth: string;
  text: string;
  iconId: string;
  children?: React.ReactNode;
  second?:boolean
}

const Accordion: React.FC<AccordionProps> = ({ myth, iconId, text, children, second=false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      {isOpen ? (
        children
      ) : (
        <>
          <div className="accordion__image">
            <svg>
              <use xlinkHref={`/sprite.svg#${iconId}`} />
            </svg>
          </div>

          <div className="accordion__name">
            <svg
              width="295"
              height="115"
              viewBox="0 0 295 115"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M254.139 115H0V0.5H254.139L295 50.3145L254.139 115Z"
                fill="url(#paint0_linear_0_6026)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_6026"
                  x1="295"
                  y1="50.2293"
                  x2="2.95041e-07"
                  y2="50.2293"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D8EFFF" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="297"
              height="116"
              viewBox="0 0 297 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 114.5H254.139L295 50.5L254.139 1"
                stroke="url(#paint0_linear_0_6028)"
                strokeWidth="3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_6028"
                  x1="295"
                  y1="1.00001"
                  x2="-10.2769"
                  y2="66.874"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#01457A" />
                  <stop offset="0.432292" stopColor="#43A7C7" />
                  <stop offset="0.744792" stopColor="#BCD77E" />
                  <stop offset="1" stopColor="#BCD77E" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div dangerouslySetInnerHTML={{ __html: myth }}/>
          </div>

          <p className="accordion__text">
            {text}
          </p>
        </>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`accordion__button ${isOpen ? 'accordion__button_open' : ''}  ${second ? 'accordion__button_green' : ''}`}>
        <svg>
          <use xlinkHref="/sprite.svg#click" />
        </svg>
      </button>
    </div>
  );
};

export default Accordion;
