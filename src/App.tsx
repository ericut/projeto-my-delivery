import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// chakra
import { ChakraProvider, Box } from '@chakra-ui/react';
// my theme
import MyCustomTheme from './theme/MyCustomTheme';
// components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// pages
import ListagemPedidos from './pages/ListagemPedidos';
import DetalhePedido from './pages/DetalhePedido';
// context provider
import { ListagemPedidosProvider } from './context/ListaPedidos.context';

export const App = () => (
  <ChakraProvider resetCSS={true} theme={MyCustomTheme}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ListagemPedidosProvider>
        <Header />
        <Box as="main" p="30px 20px" minH="50vh">
          <Switch>
            {/* ROTAS DA APLICAÇÃO */}
            {/* ROTA PADRÃO */}
            <Route exact path="/" component={ListagemPedidos} />
            {/* ROTA DETALHE ONDE PASSA O PARÂMETRO 'ID', UTILIZADO PARA DAR FETCH NA API */}
            <Route exact path="/detalhes/:id" component={DetalhePedido} />
          </Switch>
        </Box>
        <Footer />
      </ListagemPedidosProvider>
    </BrowserRouter>
  </ChakraProvider>
);
