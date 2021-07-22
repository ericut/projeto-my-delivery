import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// chakra
import { Box, Text, VStack, Grid } from '@chakra-ui/react';

const DetalhePedido = () => {
  let { id }: any = useParams();

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Text>{id}</Text>
          <Link to="/">voltar</Link>
        </VStack>
      </Grid>
    </Box>
  );
};

export default DetalhePedido;
