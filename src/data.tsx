import { AccordionData } from './types';

export const accordionItems: AccordionData[] = [
  {
    icon: '1',
    title: 'Build test task',
    options: [
      { value: 'Create repository', id: '1'},
      { value: 'Implement designs', id: '2'},
      { value: 'Implement functionality', id: '3'},
    ]
  },
  {
    icon: '2',
    title: 'Submit your test task',
    options: [
      { value: 'Open email client', id: '1'},
      { value: 'Sent link with information', id: '2', email: 'careers@cornercasetech.com'},
    ]
  },
  {
    icon: '3',
    title: 'Participate in tech interview',
    options: [
      { value: 'Talk with HR', id: '1'},
      { value: 'Talk with Tech team', id: '2'},
    ]
  },
  {
    icon: '4',
    title: 'Receive answer',
    options: [
      { value: 'Receive answers', id: '1'},
      { value: 'Start your IT career', id: '2'},
    ]
  }
];