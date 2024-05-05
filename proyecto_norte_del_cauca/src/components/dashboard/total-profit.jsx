import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {useTheme } from '@mui/material/styles';
import MenuBookIcon from '@mui/icons-material/MenuBook'; 


export function TotalProfit({ value, sx }) {
  const theme = useTheme();
  return (
    
    <Card sx={sx}>
      <CardContent>
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }} spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" sx={{ fontFamily: 'Khula, sans-serif', fontWeight: 'bold' }}>
              Ganancia Total
            </Typography>
            <Typography variant="h4" sx={{ fontFamily: 'Khula, sans-serif', fontWeight: 'bold' }}>{value}</Typography>
          </Stack>
          <div style={{
            backgroundColor: theme.palette.primary.main, 
            height: '56px',
            width: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%', 
            color: 'white', 
          }}>
            <MenuBookIcon fontSize="large" /> 
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
