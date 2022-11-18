import { Interpolation } from '@chakra-ui/react';

export const SetCss: Interpolation<{}> = {
  html: { fontSize: '16px', height: '-webkit-fill-available' },
  body: { minHeight: ['100vh', '-webkit-fill-available'], /* backgroundColor: '#FDF3E0', */ color: '#333' },
  '*, *::before, *::after': { boxSizing: 'border-box', margin: 0, padding: 0, },
  '#root': { minHeight: '100%' },
};