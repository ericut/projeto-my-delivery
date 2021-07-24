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
  Button,
  HStack,
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
  // filtros
  const [buscarLoja, setBuscarLoja] = useState<string>('');
  const [buscarValor, setBuscarValor] = useState<string>('');
  // paginador
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  const [itensPorPagina, setItensPorPagina] = useState<number>(3);
  const ultimaPagina = paginaAtual * itensPorPagina;
  const primeiraPagina = ultimaPagina - itensPorPagina;
  //
  // set da listagem de dados mocados
  // caso estivesse puxando de uma api seria utilizado método de FETCH DATA API para popular o estado setListaPedido()
  //
  // neste projeto não iremos tratar desta meneira mas como exemplo podemos utilizar o Query Params (caso a API solicite POST)
  // fetch('https://url',{method: 'POST', body: query:`{objectStrigs}`}).then(response => {setListaPedido(response.data)})
  //
  const [listaPedidos, setListaPedidos] = useState<IPedidoDataOrdersProps[]>(pedidosData.orders);

  const listagemPedidos = useMemo(() => {
    // slicer da página atual
    const itensAtuais = listaPedidos.slice(primeiraPagina, ultimaPagina);
    // render dos itens por página
    return itensAtuais.map((item) => {
      return <CardPedido key={item._id} dadosPedido={item} />;
    });
  }, [listaPedidos, primeiraPagina, ultimaPagina]);

  const filtrosPedidos = () => {
    function handleFiltrarTela() {
      if (buscarLoja !== '' || buscarValor !== '') {
        let dadosFiltrados = pedidosData.orders.filter((filteredItem) => {
          let valorTotal = filteredItem.amount + filteredItem.deliveryFee;
          let lojaFiltrada = buscarLoja && filteredItem.store.indexOf(buscarLoja.toUpperCase()) !== -1;
          let valorFiltrado = buscarValor && valorTotal <= +buscarValor * 100;
          return lojaFiltrada || valorFiltrado;
        });
        setListaPedidos(dadosFiltrados);
      }
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

  const ordenacaoPedidos = () => {
    return (
      <Flex justifyContent="space-between" mb="20px">
        <Box>Ordernadores</Box>
        <Box>Mudar visão</Box>
      </Flex>
    );
  };

  const paginacaoPedidos = () => {
    // paginação simples
    let paginasListadas = [];
    for (let i = 1; i <= Math.ceil(listaPedidos.length / itensPorPagina); i++) {
      paginasListadas.push(i);
    }
    // função para mudar página
    function mudarPaginacao(pagina: number) {
      setPaginaAtual(pagina);
    }
    return (
      <Flex justifyContent="space-between">
        <Flex alignItems="center">
          <Select value={itensPorPagina} mr="5px" onChange={(e) => setItensPorPagina(+e.target.value)}>
            <option value="2">2 itens</option>
            <option value="3">3 itens</option>
            <option value="4">4 itens</option>
            <option value="6">6 itens</option>
          </Select>
          <Text textTransform="uppercase" fontSize="10px" color="gray.400">
            /Página
          </Text>
        </Flex>
        <HStack>
          {paginasListadas.map((pagina) => {
            return (
              <Button key={pagina} p="5px" onClick={() => mudarPaginacao(pagina)}>
                {pagina}
              </Button>
            );
          })}
        </HStack>
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
        <Box>{filtrosPedidos()}</Box>
        <Box>{listagemPedidos}</Box>
        <Box>{paginacaoPedidos()}</Box>
      </Grid>
    </Flex>
  );
};

export default ListagemPedidos;
