import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
// chakra
import { Text, HStack, Flex, Box, Tooltip, Grid, Button, useColorModeValue } from '@chakra-ui/react';
// icons
import { BiCalendar } from 'react-icons/bi';
import { FaUserCircle, FaMoneyBill } from 'react-icons/fa';
// interfaces
import { IPedidoDataOrdersProps, IPedidoDataOrderDetailProps } from '../../interfaces/pedidos.interface';

interface IDadosPedido {
  key?: string | undefined;
  dadosPedido?: IPedidoDataOrdersProps;
  detalhePedido?: IPedidoDataOrderDetailProps;
}

// formatter
const traduzirMeses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export default function CardPedido({ dadosPedido, detalhePedido }: IDadosPedido) {
  // color mode chakra
  const CardBGColor = useColorModeValue('gray.100', 'gray.700');
  const DateBGColor = useColorModeValue('gray.200', 'gray.600');

  const [itemPedido, setItemPedido] = useState<IPedidoDataOrdersProps | IPedidoDataOrderDetailProps | undefined>(
    undefined
  );

  useEffect(() => {
    if (dadosPedido) {
      setItemPedido(dadosPedido);
    } else if (detalhePedido) {
      setItemPedido(detalhePedido);
    }
  }, [dadosPedido, detalhePedido]);

  //
  function valorDoPedido(valor: number) {
    return itemPedido
      ? (valor / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })
      : '';
  }
  const dataDoPedido = useMemo(() => {
    const data = new Date(itemPedido?.date ? itemPedido.date : '');
    return (
      <HStack
        borderRadius={{ lg: '6px 18px 6px 6px', sm: '2px' }}
        bg={DateBGColor}
        p={['3px', '3px 8px', '4px 10px']}
        textAlign="center"
        alignItems="center"
      >
        <Text fontSize={{ md: '15px', sm: '12px' }} color="gray.400">
          <BiCalendar />
        </Text>
        <Text fontSize={{ md: '16px', sm: '12px' }} fontWeight="bold">
          {data.getDate()} {traduzirMeses[data.getMonth()]}
        </Text>
        <Text fontSize={{ md: '14px', sm: '12px' }}>{data.getFullYear()}</Text>
      </HStack>
    );
  }, [itemPedido, DateBGColor]);

  // componente para mostrar os detalhes extra do pedido
  const MaisDetalhesPedido = () => {
    return <>detalhe</>;
  };

  return (
    <>
      {itemPedido ? (
        <Grid templateRows="40px 1fr" mb="20px" p="10px 20px 14px" bg={CardBGColor} borderRadius="6px 18px 6px 6px">
          <Flex justifyContent="space-between" alignItems="center">
            <Flex mb="5px" alignItems="baseline" flexDirection={{ md: 'initial', sm: 'column' }}>
              <Text fontSize="20px" fontWeight="bold" pr="20px">
                {itemPedido.store}
              </Text>
              <Text fontSize={{ md: '14px', sm: '10px' }} mt={{ md: '', sm: '-5px' }} opacity="0.7">
                Cod: {itemPedido.reference}
              </Text>
            </Flex>
            <Box>{dataDoPedido}</Box>
          </Flex>
          <Flex justifyContent="space-between">
            <Box>
              <Flex alignItems="center">
                <Text color="green.400" w="16px" mr="10px">
                  <FaUserCircle />
                </Text>{' '}
                <Text fontWeight="bold">{itemPedido.customer.name}</Text>
              </Flex>
              <Flex alignItems="center">
                <Text color="green.400" w="16px" mr="10px">
                  <FaMoneyBill />
                </Text>{' '}
                <Text fontWeight="bold">
                  <Tooltip
                    hasArrow
                    label={`Pedido: ${valorDoPedido(itemPedido.amount)} | Frete: ${valorDoPedido(
                      itemPedido.deliveryFee
                    )}`}
                    placement="right"
                  >
                    {valorDoPedido(itemPedido.amount + itemPedido.deliveryFee)}
                  </Tooltip>
                </Text>
              </Flex>
            </Box>
            {/* aqui poderia ser realizado uma rota com location, levando params
                no caso podería ser levado o objeto inteiro para renderizar na próxima tela
                porém será feito uma tratativa para buscar o ID em outra response.data */}
            {!detalhePedido ? (
              <Link to={`/detalhes/${itemPedido._id}`}>
                <Button colorScheme="blue" mt="10px">
                  Detalhes
                </Button>
              </Link>
            ) : (
              <></>
            )}
          </Flex>
          {detalhePedido ? <MaisDetalhesPedido /> : <></>}
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
}
