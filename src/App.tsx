import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// chakra
import { ChakraProvider, Flex } from '@chakra-ui/react';
// my theme
import MyCustomTheme from './theme/MyCustomTheme';
// components
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
// pages
import ListagemPedidos from './pages/ListagemPedidos';
import DetalhePedido from './pages/DetalhePedido';

export const App = () => (
  <ChakraProvider resetCSS={true} theme={MyCustomTheme}>
    <BrowserRouter>
      <Flex position="absolute" right="10px" top="10px">
        <ColorModeSwitcher />
      </Flex>
      <Switch>
        <Route exact path="/" component={ListagemPedidos} />
        <Route exact path="/detalhes/:id" component={DetalhePedido} />
      </Switch>
    </BrowserRouter>
  </ChakraProvider>
);
