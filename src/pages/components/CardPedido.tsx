import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
// chakra
import { Text, HStack, Flex, Box, Tooltip, Grid, GridItem, Button, useColorModeValue } from '@chakra-ui/react';
// icons
import { BiCalendar, BiFoodMenu } from 'react-icons/bi';
import { FaCreditCard, FaUserCircle, FaMoneyBill, FaStore, FaMapMarkerAlt } from 'react-icons/fa';
// interfaces
import { IPedidoDataOrdersProps } from '../../interfaces/pedidos.interface';

interface IDadosPedido {
  key?: string | undefined;
  dadosPedido?: IPedidoDataOrdersProps;
  detalhePedido?: IPedidoDataOrdersProps;
}

// formatter
const traduzirMeses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export default function CardPedido({ dadosPedido, detalhePedido }: IDadosPedido) {
  // color mode chakra
  const CardBGColor = useColorModeValue('gray.100', 'gray.700');
  const SubCardBGColor = useColorModeValue('gray.200', 'gray.800');
  const DateBGColor = useColorModeValue('gray.200', 'gray.600');

  const [itemPedido, setItemPedido] = useState<IPedidoDataOrdersProps | undefined>(undefined);

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
  const maisDetalhesPedido = () => {
    let somaPedido = itemPedido?.items?.reduce((prevVal, element) => {
      return +prevVal + +element.amount;
    }, 0);

    return itemPedido ? (
      <Grid my="20px" templateRows={{ md: 'repeat(2, 1fr)', sm: '1fr' }} templateColumns="repeat(3, 1fr)" gap={3}>
        <GridItem colSpan={{ sm: 3 }}>
          <Box bg={SubCardBGColor} borderRadius="4px" p="10px">
            <Flex alignItems="center" color="gray.500">
              <Text w="15px" mr="5px">
                <BiFoodMenu />
              </Text>
              <Text fontWeight="bold">Itens do Pedido</Text>
            </Flex>
            <Flex ml="20px" pr={{ md: '20px', sm: '10px' }} flexDirection="column">
              {itemPedido.items?.map((subItem) => {
                return (
                  <Flex justifyContent="space-between" borderBottom="1px dotted" borderBottomColor="gray.600">
                    <Text w="50%">{subItem.name}</Text>
                    <Text w={{ md: '20%', sm: '10%' }} textAlign="right">
                      {subItem.quantity}
                    </Text>
                    <Text w={{ md: '30%', sm: '40%' }} textAlign="right">
                      {valorDoPedido(+subItem.amount)}
                    </Text>
                  </Flex>
                );
              })}
              <Flex
                justifyContent="flex-end"
                borderTop="1px solid"
                borderTopColor="gray.600"
                py="5px"
                fontWeight="bold"
              >
                {valorDoPedido(Number(somaPedido))}
              </Flex>
            </Flex>
          </Box>
        </GridItem>
        <GridItem colSpan={{ md: 1, sm: 3 }}>
          <Box p="10px">
            <Flex alignItems="center" color="gray.500">
              <Text w="15px" mr="5px">
                <FaMapMarkerAlt />
              </Text>
              <Text fontWeight="bold">Endereço de entrega</Text>
            </Flex>
            <Flex ml="20px" pr={{ md: '20px', sm: '10px' }} flexDirection="column">
              <Text>{`${itemPedido.address?.street}, ${itemPedido.address?.number} (${itemPedido.address?.complement})`}</Text>
              <Text>{`${itemPedido.address?.neighborhood} - ${itemPedido.address?.city} / ${itemPedido.address?.state}`}</Text>
            </Flex>
          </Box>
        </GridItem>
        <GridItem colSpan={{ md: 1, sm: 3 }}>
          <Box p="10px">
            <Flex alignItems="center" color="gray.500">
              <Text w="15px" mr="5px">
                <FaCreditCard />
              </Text>
              <Text fontWeight="bold">Pagamento</Text>
            </Flex>
            <Flex ml="20px" pr={{ md: '20px', sm: '10px' }} flexDirection="column">
              {itemPedido.payments?.map((subItem) => {
                return (
                  <Flex justifyContent="space-between" borderBottom="1px dotted" borderBottomColor="gray.600">
                    <Text w="60%">{subItem.method}</Text>
                    <Text w={{ md: '30%', sm: '40%' }} textAlign="right">
                      {valorDoPedido(+subItem.amount)}
                    </Text>
                  </Flex>
                );
              })}
            </Flex>
          </Box>
        </GridItem>
        <GridItem colSpan={{ md: 1, sm: 3 }}>
          <Box p="10px">
            <Flex alignItems="center" color="gray.500">
              <Text w="15px" mr="5px">
                <FaMoneyBill />
              </Text>
              <Text fontWeight="bold">Valores</Text>
            </Flex>
            <Flex ml="20px" pr={{ md: '20px', sm: '10px' }} flexDirection="column">
              <Flex justifyContent="space-between" borderBottom="1px dotted" borderBottomColor="gray.600" p="5px">
                <Text>Frete</Text>
                <Text textAlign="right">{valorDoPedido(+itemPedido.deliveryFee)}</Text>
              </Flex>
              <Flex justifyContent="space-between" border="2px dotted" borderColor="green.500" p="5px">
                <Text>Valor Total</Text>
                <Text textAlign="right" fontSize="18px" fontWeight="bold">
                  {valorDoPedido(+itemPedido.amount + +itemPedido.deliveryFee)}
                </Text>
              </Flex>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    ) : (
      <></>
    );
  };

  return (
    <>
      {itemPedido ? (
        <Grid
          templateRows="40px 1fr"
          mb="20px"
          p={{ md: '10px 20px 14px', sm: '20px 10px' }}
          bg={CardBGColor}
          borderRadius="6px 18px 6px 6px"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Flex mb="5px" alignItems="baseline" flexDirection={{ md: 'initial', sm: 'column' }}>
              <Text color="green.400" w="16px" mr="10px" display={{ md: 'flex', sm: 'none' }}>
                <FaStore />
              </Text>
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
                    <Text>{valorDoPedido(itemPedido.amount + itemPedido.deliveryFee)}</Text>
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
          {detalhePedido ? maisDetalhesPedido() : <></>}
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
}
