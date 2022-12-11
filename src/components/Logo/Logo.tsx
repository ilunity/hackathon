import React from 'react';
import logo from '../../assets/logo.svg';
import { Box } from '@mui/material';

export const Logo: React.FC = () => {
  return (
    <Box
      sx={ {
        position: 'fixed',
        top: '30px',
        left: '30px',
      } }
    >
      <img
        src={ logo }
        alt='Логотип'
        style={ {
          height: '70px',
          width: '70px',
        } }
      />
    </Box>
  );
};
