import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>pingFlaming</h1>
        <Button>Zatwierdź zmiany</Button>
        <Button secondary>Anuluj</Button>
      </>
    </ThemeProvider>
  </div>
);
export default Root;
