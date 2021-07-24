import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// chakra
import { Box, Text, useColorModeValue, Flex, Heading, Grid, Button } from '@chakra-ui/react';
// icons
import { BiFoodMenu } from 'react-icons/bi';
// data
import { pedidoDetalhesData } from '../data/pedidoDetalhes.data';
// interfaces
import { IPedidoDataOrdersProps } from '../interfaces/pedidos.interface';
// components
import CardPedido from './components/CardPedido';

const DetalhePedido = () => {
  // chakra
  const HeadingColor = useColorModeValue('blue.800', 'blue.200');
  // params
  let { id }: any = useParams();
  //
  const [detalhesPedido, setDetalhesPedido] = useState<IPedidoDataOrdersProps | undefined>(undefined);

  //
  // set do detalhes pedido de dados mocados
  // caso estivesse puxando de uma api seria utilizado método de FETCH DATA API para popular o estado setDetalhesPedidos()
  //
  // neste projeto não iremos tratar desta meneira mas como exemplo podemos utilizar QUERY STRING passando o ID
  // fetch('https://url/:id',{method: 'GET'}).then(response => {setListaPedido(response.data)})
  //
  useEffect(() => {
    setDetalhesPedido(
      pedidoDetalhesData?.orders
        ? pedidoDetalhesData?.orders.find((item: IPedidoDataOrdersProps) => {
            return item._id === id;
          })
        : undefined
    );
  }, [id]);

  return detalhesPedido ? (
    <Flex justifyContent="center">
      <Grid templateRows="50px 1fr" w={{ lg: '1100px', md: '90%', sm: '100%' }}>
        <Flex alignItems="center" justifyContent="space-between" mb="20px">
          <Flex alignItems="center" color={HeadingColor}>
            <Text w="30px" pr="10px">
              <BiFoodMenu />
            </Text>
            <Heading size="lg" fontSize={{ md: '30px', sm: '22px' }}>
              Detalhes do Pedido
            </Heading>
          </Flex>
          <Link to={`/`}>
            <Button colorScheme="gray">Voltar</Button>
          </Link>
        </Flex>
        <Box>
          <CardPedido detalhePedido={detalhesPedido} />
        </Box>
      </Grid>
    </Flex>
  ) : (
    <></>
  );
};

export default DetalhePedido;
