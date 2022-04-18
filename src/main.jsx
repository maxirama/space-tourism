import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/bellefair';
import '@fontsource/barlow-condensed';

const theme = extendTheme({
  colors: {
    primary: '#0B0D17',
    secondary: '#D0D6F9',
    terciary: '#FFFFFF'
  },
  fonts: {
    heading: 'Barlow Condensed, sans-serif'
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
