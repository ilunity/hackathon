import React, { useEffect, useState } from 'react';
import { GenerateProjectProps } from './GenerateProject.types';
import { StartupThemeForm } from '../StartupThemeForm';
import { StartupDescription } from '../StartupDescription';
import { Container, Paper } from '@mui/material';
import { StartupDescriptionProps } from '../StartupDescription/StartupDescription.types';
import { ideasService } from '../../services';

export const GenerateProject: React.FC<GenerateProjectProps> = () => {
  const [data, setData] = useState<StartupDescriptionProps | undefined>();

  useEffect(() => {
    const loadIdea = async () => {
      const response = await ideasService.generate();

      if (!response.ok) {
        return console.log('Status of response not in 200..299');
      }

      const ideaData = await response.json();
      setData(ideaData);
    };

    loadIdea();
  }, []);

  return (
    <Container
      component={ 'main' }
      sx={ {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 6,
      } }
    >
      <Paper
        sx={ {
          minHeight: '600px',
          width: '800px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          p: 4,
        } }
      >
        <StartupThemeForm updateData={ setData } />
        { data &&
          <StartupDescription
            description={ data.description }
            employerNumbers={ data.employerNumbers }
            investments={ data.investments }
          /> }
      </Paper>
    </Container>
  );
};
