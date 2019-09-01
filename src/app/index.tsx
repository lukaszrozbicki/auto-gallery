import ReactDOM from 'react-dom';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { App } from 'app/App';
import { GlobalStyles } from 'app/styles/GlobalStyles';

export const bootstrapAutoGalleryApplication = () => {
  ReactDOM.render(
    (
      <ThemeProvider theme={{}}>
        <>
          <GlobalStyles />
          <App />
        </>
      </ThemeProvider>
    ),
    document.getElementById('root'),
  );
};
