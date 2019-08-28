import ReactDOM from 'react-dom';
import React from 'react';
import { App } from 'app/App';

export const bootstrapAutoGalleryApplication = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
};
