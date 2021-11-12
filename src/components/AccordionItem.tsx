import { useEffect, useRef, useState } from 'react';
import { AccordionData, IconName } from '../types';
import radio from '../assets/Radio.svg';
import './AccordionItem.css';
import Icon from './Icon';

export type AccordionItemProps = { 
  data: Omit<AccordionData, 'icon'>,
  isOpen:boolean,
  btnOnClick: () => void,
  icon: IconName,
 };

const AccordionItem: React.FC<AccordionItemProps> =({data, isOpen, btnOnClick, icon})=>{

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement;

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <li className='AccordionItem'>
      <div className="AccordionItemTitle">
        <button className="AccordionItemBtn" onClick={btnOnClick}>

          <Icon name={icon} />
          <p> {data.title}</p>
        </button>
        <hr className={isOpen ? 'HrGrow' : ''} />
      </div>
      <div className="AccordionItemContainer" style={{ height }}>
        <div ref={contentRef} className="AccordionItemContent">

          {
            data.options.map(({ value, id, email }) => {
              return (
                <div key={id} className="AccordionItemLine">
                  <img src={radio} className="Radio" alt="Radio" />
                  <p>
                    {value}
                    {
                      email !== undefined
                        ? <> <a className='AccordionEmail' href={`mailto:${email}`}>{email}</a></>
                        : null
                    }
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
    </li>
  );
}

export default AccordionItem;