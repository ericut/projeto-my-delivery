import React from 'react';
import { Link } from 'react-router-dom';
// chakra
import { Box, Text, VStack, Grid } from '@chakra-ui/react';

const ListagemPedidos = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Text>Pronto para iniciar ok</Text>
          <Link to="/detalhes/1394">ir para</Link>
        </VStack>
      </Grid>
    </Box>
  );
};

export default ListagemPedidos;
