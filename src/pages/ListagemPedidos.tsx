import React, { useState, useMemo, useContext } from 'react';
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
  HStack,
} from '@chakra-ui/react';
// icons
import { IoFastFood } from 'react-icons/io5';
import { FaSearch, FaTrash, FaSortAlphaDown, FaSortAlphaUpAlt } from 'react-icons/fa';
// components
import CardPedido from './components/CardPedido';
import Paginacao from './components/Paginacao';
// interfaces
import { IPedidoDataOrdersProps } from '../interfaces/pedidos.interface';
// context provider
import { ListagemPedidosContext } from '../context/ListaPedidos.context';

const ListagemPedidos = () => {
  // context
  const { dadosListagemPedidos } = useContext(ListagemPedidosContext);
  // chakra
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
  // ordenador
  const [ordenadarPor, setOrdernarPor] = useState<string>('');
  const [gerenciarOrdenacao, setGerenciarOrdenacao] = useState<boolean>(false);

  //
  // set da listagem de dados mocados
  // caso estivesse puxando de uma api seria utilizado método de FETCH DATA API para popular o estado setListaPedido()
  //
  // neste projeto não iremos tratar desta meneira mas como exemplo podemos utilizar o Query Params (caso a API solicite POST)
  // fetch('https://url',{method: 'POST', body: query:`{objectStrigs}`}).then(response => {setListaPedido(response.data)})
  //
  const [listaPedidosPrev] = useState<IPedidoDataOrdersProps[]>(dadosListagemPedidos ? dadosListagemPedidos : []);
  const [listaPedidos, setListaPedidos] = useState<IPedidoDataOrdersProps[]>(
    dadosListagemPedidos ? dadosListagemPedidos : []
  );

  const listagemPedidos = useMemo(() => {
    // ordenador dinâmico
    function ordenarItens(campoPrincipal: any) {
      return function ordenar(itemA: any, itemB: any) {
        let ordernarPor = gerenciarOrdenacao === true ? 'asc' : 'desc';
        if (!itemA.hasOwnProperty(campoPrincipal) || !itemB.hasOwnProperty(campoPrincipal)) {
          return 0;
        }
        const varA =
          typeof itemA[campoPrincipal] === 'string' ? itemA[campoPrincipal].toUpperCase() : itemA[campoPrincipal];
        const varB =
          typeof itemB[campoPrincipal] === 'string' ? itemB[campoPrincipal].toUpperCase() : itemB[campoPrincipal];
        let comparar = 0;
        if (varA > varB) {
          comparar = 1;
        } else if (varA < varB) {
          comparar = -1;
        }
        return ordernarPor === 'desc' ? comparar * -1 : comparar;
      };
    }
    // slicer da página atual
    const itensAtuais = listaPedidos.sort(ordenarItens(ordenadarPor)).slice(primeiraPagina, ultimaPagina);

    // render dos itens por página
    return itensAtuais.map((item: IPedidoDataOrdersProps) => {
      return <CardPedido key={item._id} dadosPedido={item} />;
    });
  }, [listaPedidos, primeiraPagina, ultimaPagina, ordenadarPor, gerenciarOrdenacao]);

  const filtrosPedidos = () => {
    function handleFiltrarTela() {
      if (buscarLoja !== '' || buscarValor !== '') {
        let dadosFiltrados = listaPedidosPrev.filter((filteredItem) => {
          let valorTotal = filteredItem.amount + filteredItem.deliveryFee;
          let lojaFiltrada = buscarLoja && filteredItem.store.indexOf(buscarLoja.toUpperCase()) !== -1;
          let valorFiltrado = buscarValor && valorTotal <= +buscarValor * 100;
          return lojaFiltrada || valorFiltrado;
        });
        setListaPedidos(dadosFiltrados ? dadosFiltrados : []);
      }
    }
    function handleLimparFiltros() {
      setListaPedidos(listaPedidosPrev);
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
            <option value="1000">Até R$ 1000</option>
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
      <Flex justifyContent="space-between" alignItems="center" flexDirection={{ md: 'initial', sm: 'column' }}>
        <HStack alignItems="center" mb="10px" w={{ md: '30%', sm: '100%' }}>
          <Select
            value={ordenadarPor}
            mr="5px"
            onChange={(e) => setOrdernarPor(e.target.value)}
            placeholder="Ordenar itens por..."
          >
            <option value="store">Nome</option>
            <option value="date">Data</option>
            <option value="amount">Valor</option>
          </Select>
          <IconButton
            children={gerenciarOrdenacao ? <FaSortAlphaDown /> : <FaSortAlphaUpAlt />}
            aria-label="Ordenação"
            onClick={() => setGerenciarOrdenacao(!gerenciarOrdenacao)}
            isDisabled={ordenadarPor === ''}
          />
        </HStack>
        <Box></Box>
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
        <Box>{ordenacaoPedidos()}</Box>
        <Box>{listagemPedidos}</Box>
        <Box>
          <Paginacao
            paginaAtual={paginaAtual}
            itensPorPagina={itensPorPagina}
            totalItens={listaPedidos.length}
            mudarPaginaAtual={setPaginaAtual}
            mudarQtdItensPorPagina={setItensPorPagina}
          />
        </Box>
      </Grid>
    </Flex>
  );
};

export default ListagemPedidos;
