import { createTheme, ThemeOptions } from '@mui/material';

export const themeOptions: ThemeOptions = {
  // typography: {
  //   fontFamily: [
  //     'CozetteVector',
  //   ].join(','),
  // },
  palette: { mode: 'dark' },
};

export const theme = createTheme(themeOptions);
