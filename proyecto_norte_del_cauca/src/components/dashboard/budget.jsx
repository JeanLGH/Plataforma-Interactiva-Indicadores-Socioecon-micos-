import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import {useTheme } from '@mui/material/styles';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export function Budget({ diff, trend, sx, value }) {
  const TrendIcon = trend === 'up' ? TrendingUpIcon : TrendingDownIcon;
  const trendColor = trend === 'up' ? 'var(--mui-palette-success-main)' : 'var(--mui-palette-error-main)';
  const theme = useTheme();

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" sx={{ fontFamily: 'Khula, sans-serif', fontWeight: 'bold' }}>
                Presupuesto
              </Typography>
              <Typography variant="h4" sx={{ fontFamily: 'Khula, sans-serif', fontWeight: 'bold' }}>{value}</Typography>
            </Stack>
            <div style={{
              backgroundColor: theme.palette.secondary.main,
              height: '56px',
              width: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
            }}>
              <MonetizationOnIcon style={{ color: 'white' }} fontSize="large" />
            </div>
          </Stack>
          {diff ? (
            <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
              <Stack sx={{ alignItems: 'center' }} direction="row" spacing={0.5}>
                <TrendIcon style={{ color: trendColor }} fontSize="medium" />
                <Typography color={trendColor} variant="body2" sx={{ fontFamily: 'Khula, sans-serif' }}>
                  {diff}%
                </Typography>
              </Stack>
              <Typography color="text.secondary" variant="caption" sx={{ fontFamily: 'Khula, sans-serif' }}>
                Desde el mes anterior
              </Typography>
            </Stack>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  );
}
