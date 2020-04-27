import React from 'react';
import Button from 'components/atoms/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <>
    <GlobalStyle />
    <h1>pingFlaming</h1>
    <Button>Zatwierdź zmiany</Button>
    <Button secondary>Anuluj</Button>
  </>
);
export default Root;
