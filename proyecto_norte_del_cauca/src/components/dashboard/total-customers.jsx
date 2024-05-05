import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import PeopleIcon from '@mui/icons-material/People';
import { useTheme } from '@mui/material/styles';

export function TotalCustomers({ diff, trend, sx, value }) {
  const theme = useTheme();
  const TrendIcon = trend === 'up' ? TrendingUpIcon : TrendingDownIcon;
  const trendColor = trend === 'up' ? 'var(--mui-palette-success-main)' : 'var(--mui-palette-error-main)';

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" sx={{ fontFamily: 'Khula, sans-serif', fontWeight: 'bold' }}>
                Total Clientes
              </Typography> 
              <Typography variant="h4" sx={{ fontFamily: 'Khula, sans-serif', fontWeight: 'bold' }}>{value}</Typography>
            </Stack>
            <div style={{
              backgroundColor:  theme.palette.grey[400], 
              height: '56px',
              width: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%', 
            }}>
              <PeopleIcon style={{ color: 'white' }} fontSize="large" /> 
            </div>
          </Stack>
          {diff ? (
            <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
              <Stack sx={{ alignItems: 'center' }} direction="row" spacing={0.5}>
                <TrendIcon style={{ color: trendColor }} fontSize="medium" />
                <Typography color={trendColor} variant="body2" sx={{ fontFamily: 'Khula, sans-serif', fontWeight: 'bold' }}>
                  {diff}%
                </Typography>
              </Stack>
              <Typography color="text.secondary" variant="caption" sx={{ fontFamily: 'Khula, sans-serif', fontWeight: 'bold' }}>
                Desde el mes pasado
              </Typography>
            </Stack>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  );
}
