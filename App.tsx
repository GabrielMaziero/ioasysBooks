import React from 'react';
import {ThemeProvider} from 'styled-components';
import {AuthProvider} from './src/contexts/context';
import theme from './src/global/style/theme';
import {Routes} from './src/routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
