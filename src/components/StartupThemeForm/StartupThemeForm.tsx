import React from 'react';
import { StartupThemeFormProps } from './StartupThemeForm.types';
import { Box, Button } from '@mui/material';
import { ideasService } from '../../services';

export const StartupThemeForm: React.FC<StartupThemeFormProps> = ({ updateData }) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const data = new FormData(event.currentTarget);
    // const startupTheme = data.get('startup_theme');

    const response = await ideasService.generate();

    if (!response.ok) {
      return console.log('Status of response not in 200..299');
    }

    const ideaData = await response.json();
    updateData(ideaData);
  };

  return (
    <Box
      sx={ {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      } }
    >
      <Box
        component='form'
        onSubmit={ handleSubmit }
        noValidate
        sx={ {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 8,
        } }
      >
        {/*<TextField*/ }
        {/*  margin='normal'*/ }
        {/*  fullWidth*/ }
        {/*  id='startup_theme'*/ }
        {/*  label='Тема стартапа'*/ }
        {/*  name='startup_theme'*/ }
        {/*  autoFocus*/ }
        {/*/>*/ }
        <Button
          type={ 'submit' }
          fullWidth
          variant={ 'contained' }
          size={ 'large' }
        >
          Сгенерировать
        </Button>
      </Box>
    </Box>
  );
};
