import React from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../../utils/theme-options';
import backgroundImage from '../../assets/stars-bg.gif';
import { GenerateProject } from '../GenerateProject';
import { Logo } from '../Logo';


export const App: React.FC = () => {
  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <Logo />
      <Box
        sx={ {
          height: '100%',
          width: '100%',
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'center',
          backgroundImage: `url(${ backgroundImage })`,
        } }
      >
        <GenerateProject />
      </Box>
    </ThemeProvider>
  );
};
