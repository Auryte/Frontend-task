import { useState } from 'react';
import { AccordionData } from '../types';
import AccordionItem from './AccordionItem';

import './Accordion.css';

export type AccordionProps = { items: AccordionData[] };

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const btnOnClick = (index: number) => {
    setCurrentIndex((currentValue) => (currentValue !== index ? index : -1));
  };

  return (
    <ul className="Accordion">
      {items.map(({icon, ...item}, index) => (
          <AccordionItem
            key={index}
            data={item}
            isOpen={index === currentIndex}
            btnOnClick={() => btnOnClick(index)}
            icon={icon}
          />
      ))}
    </ul>
  );
}

export default Accordion;