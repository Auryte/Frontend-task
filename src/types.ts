export type IconNames = {
  '1': string,
  '2': string,
  '3': string,
  '4': string
}

export type IconName = keyof IconNames;

type Options = {
  value: string;
  id: string;
  email?: string;
};

export type AccordionData = {
  icon: IconName;
  title: string;
  options: Options[];
};
