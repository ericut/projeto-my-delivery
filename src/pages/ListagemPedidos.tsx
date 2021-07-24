import React, { useState, useMemo } from 'react';
// chakra
import {
  Text,
  Heading,
  Grid,
  Flex,
  Box,
  useColorModeValue,
  IconButton,
  Input,
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/react';
// icons
import { IoFastFood } from 'react-icons/io5';
import { FaSearch, FaTrash } from 'react-icons/fa';
// data
import { pedidosData } from '../data/pedidos.data';
// interfaces
import { IPedidoDataOrdersProps } from '../interfaces/pedidos.interface';
// components
import CardPedido from './components/CardPedido';

const ListagemPedidos = () => {
  const HeadingColor = useColorModeValue('blue.800', 'blue.200');
  const FiltersBGColor = useColorModeValue('blue.100', 'blue.800');
  //
  const [buscarLoja, setBuscarLoja] = useState<string>('');
  const [buscarValor, setBuscarValor] = useState<string>('');

  //
  // set da listagem de dados mocados
  // caso estivesse puxando de uma api seria utilizado método de FETCH DATA API para popular o estado setListaPedido()
  //
  // neste projeto não iremos tratar desta meneira mas como exemplo podemos utilizar o Query Params (caso a API solicite POST)
  // fetch('https://url',{method: 'POST', body: query:`{objectStrigs}`}).then(response => {setListaPedido(response.data)})
  //
  const [listaPedidos, setListaPedidos] = useState<IPedidoDataOrdersProps[]>(pedidosData.orders);

  const listagemPedidos = useMemo(() => {
    return listaPedidos.map((item) => {
      return <CardPedido key={item._id} dadosPedido={item} />;
    });
  }, [listaPedidos]);

  const filtrosPedido = () => {
    function handleFiltrarTela() {
      let dadosFiltrados = pedidosData.orders.filter((filteredItem) => {
        let valorTotal = filteredItem.amount + filteredItem.deliveryFee;
        let lojaFiltrada = buscarLoja && filteredItem.store.indexOf(buscarLoja.toUpperCase()) !== -1;
        let valorFiltrado = buscarValor && valorTotal <= +buscarValor * 100;
        return lojaFiltrada || valorFiltrado;
      });

      setListaPedidos(dadosFiltrados);
    }
    function handleLimparFiltros() {
      setListaPedidos(pedidosData.orders);
      setBuscarLoja('');
      setBuscarValor('');
    }

    return (
      <Flex
        mb="30px"
        p={{ md: '10px 20px 14px', sm: '20px 10px' }}
        bg={FiltersBGColor}
        borderRadius="6px 18px 6px 6px"
        alignItems="flex-end"
        justifyContent="space-between"
        gridGap={4}
      >
        <FormControl>
          <FormLabel>Filtrar Lojas</FormLabel>
          <Input value={buscarLoja} onChange={(event) => setBuscarLoja(event.target.value)}></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Valores</FormLabel>
          <Select placeholder="Valores até..." value={buscarValor} onChange={(e) => setBuscarValor(e.target.value)}>
            <option value="50">Até R$ 50</option>
            <option value="100">Até R$ 100</option>
            <option value="200">Até R$ 200</option>
          </Select>
        </FormControl>
        <IconButton
          aria-label="Filtrar Pedidos"
          icon={<FaSearch />}
          colorScheme="green"
          mt="10px"
          onClick={() => handleFiltrarTela()}
        >
          Filtrar Pedidos
        </IconButton>
        {buscarLoja || buscarValor ? (
          <IconButton
            aria-label="Limpar Filtros"
            icon={<FaTrash />}
            colorScheme="gray"
            mt="10px"
            onClick={() => handleLimparFiltros()}
          >
            Limpar Filtros
          </IconButton>
        ) : (
          <></>
        )}
      </Flex>
    );
  };

  return (
    <Flex justifyContent="center">
      <Grid templateRows="50px" w={{ lg: '1100px', md: '90%', sm: '100%' }}>
        <Flex alignItems="center" color={HeadingColor} mb="20px">
          <Text w="30px" pr="10px">
            <IoFastFood />
          </Text>
          <Heading size="lg" fontSize={{ md: '30px', sm: '22px' }}>
            Pedidos
          </Heading>
        </Flex>
        <Box>{filtrosPedido()}</Box>
        <Box>{listagemPedidos}</Box>
      </Grid>
    </Flex>
  );
};

export default ListagemPedidos;
