import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import theme from './theme';
import '@fontsource/bellefair';
import '@fontsource/barlow-condensed';

const _theme = extendTheme(theme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={_theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
