import React from 'react';
import { Link } from 'react-router-dom';
// chakra
import { Text, VStack, Grid } from '@chakra-ui/react';

const ListagemPedidos = () => {
  return (
    <Grid>
      <VStack spacing={8}>
        <Text>Pronto para iniciar ok</Text>
        <Link to="/detalhes/1394">ir para</Link>
      </VStack>
    </Grid>
  );
};

export default ListagemPedidos;
