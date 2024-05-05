import React from 'react';
import { styled } from '@mui/material/styles';
import ApexChart from 'react-apexcharts';

const StyledChart = styled(ApexChart)``;

const Chart = function({ ...props }) {
  return <StyledChart {...props} />;
};

export { Chart };
