import React, { useState, useMemo } from 'react';
// chakra
import { Text, Heading, Grid, Flex, Box, useColorModeValue } from '@chakra-ui/react';
// icons
import { IoFastFood } from 'react-icons/io5';
// data
import { pedidosData } from '../data/pedidos.data';
// interfaces
import { IPedidoDataOrdersProps } from '../interfaces/pedidos.interface';
// components
import CardPedido from './components/CardPedido';

const ListagemPedidos = () => {
  const HeadingColor = useColorModeValue('blue.800', 'blue.200');

  //
  // set da listagem de dados mocados
  // caso estivesse puxando de uma api seria utilizado método de FETCH DATA API para popular o estado setListaPedido()
  //
  // neste projeto não iremos tratar desta meneira mas como exemplo podemos utilizar o Query Params (caso a API solicite POST)
  // fetch('https://url',{method: 'POST', body: query:`{objectStrigs}`}).then(response => {setListaPedido(response.data)})
  //
  const [listaPedidos] = useState<IPedidoDataOrdersProps[]>(pedidosData.orders);

  const listagemPedidos = useMemo(() => {
    return listaPedidos.map((item) => {
      return <CardPedido key={item._id} dadosPedido={item} />;
    });
  }, [listaPedidos]);

  return (
    <Flex justifyContent="center">
      <Grid templateRows="50px 1fr" w={{ lg: '1100px', md: '90%', sm: '100%' }}>
        <Flex alignItems="center" color={HeadingColor} mb="20px">
          <Text w="30px" pr="10px">
            <IoFastFood />
          </Text>
          <Heading size="lg" fontSize={{ md: '30px', sm: '22px' }}>
            Pedidos
          </Heading>
        </Flex>
        <Box>{listagemPedidos}</Box>
      </Grid>
    </Flex>
  );
};

export default ListagemPedidos;
