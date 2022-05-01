import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import theme from './theme';
import '@fontsource/bellefair';
import '@fontsource/barlow-condensed';
import { BrowserRouter } from 'react-router-dom';

const _theme = extendTheme(theme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider theme={_theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
