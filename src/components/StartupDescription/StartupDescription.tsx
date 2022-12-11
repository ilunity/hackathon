import React from 'react';
import { StartupDescriptionProps } from './StartupDescription.types';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

export const StartupDescription: React.FC<StartupDescriptionProps> = ({
  description,
  employerNumbers,
  investments,
}) => {
  return (
    <>
      <Typography
        variant={ 'h4' }
        component={ 'h3' }
        pl={ 2 }
        mb={ 1 }
      >
        Описание стратапа
      </Typography>
      <Typography
        p={ 2 }
        mb={ 4 }
        variant={ 'h6' }
      >
        { description }
      </Typography>
      <Table
        sx={ {
          mt: 'auto',
        } }
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant={ 'h6' } paragraph sx={ { m: 0 } }>
                Необходимое количество сотрудников
              </Typography>
            </TableCell>
            <TableCell align='right'>
              <Typography variant={ 'h6' } paragraph sx={ { m: 0 } }>
                Вероятные вложения в проект
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant={ 'body1' } paragraph sx={ { m: 0 } }>
                { employerNumbers }
              </Typography>
            </TableCell>
            <TableCell align='right'>
              <Typography variant={ 'body1' } paragraph sx={ { m: 0 } }>
                { investments }
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
