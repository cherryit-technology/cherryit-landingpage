import * as React from 'react';
import theme from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

interface IProvider {
  children: React.ReactNode;
}

const Provider: React.FC<IProvider> = ({
  children
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default Provider