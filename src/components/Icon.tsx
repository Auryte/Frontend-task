import { IconName, IconNames } from '../types';
import numberIcon1 from '../assets/Number icon1.png';
import numberIcon2 from '../assets/Number icon2.png';
import numberIcon3 from '../assets/Number icon3.png';
import numberIcon4 from '../assets/Number icon4.png';

const iconsEnum: IconNames = {
  '1': numberIcon1,
  '2': numberIcon2,
  '3': numberIcon3,
  '4': numberIcon4,
};

type IconProps = { name: IconName };

const Icon: React.FC<IconProps> = ({ name }) => {
  return <img className="AccordionItemImg" src={iconsEnum[name]} alt="" />
}

export default Icon;