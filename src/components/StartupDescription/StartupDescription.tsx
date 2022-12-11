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
        variant={ 'h6' }
        component={ 'h3' }
        pl={ 2 }
      >
        Описание стратапа
      </Typography>
      <Typography
        p={ 2 }
        mb={ 4 }
        variant={ 'body1' }
      >
        { description }
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Необходимое количество сотрудников
            </TableCell>
            <TableCell align='right'>
              Вероятные вложения в проект
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              { employerNumbers }
            </TableCell>
            <TableCell align='right'>
              { investments }
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
