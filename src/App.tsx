import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { CssInit } from './components/page/css/css-init';
import { Home } from './components/page/home';
import { RoutingPath } from './route/routing-path';
import { SetCss } from './css/set.css';

const colors = {
  theme: {

  },
  starkWhiteLite: '#FDF3E0',
  starkWhite: '#ECDEC5',
  sandDune: '#8B7366',
}

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={SetCss} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path={RoutingPath.cssInit} element={<CssInit />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
