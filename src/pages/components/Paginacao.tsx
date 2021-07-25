import React from 'react';
// chakra
import { Text, Flex, Box, Select, Button, HStack } from '@chakra-ui/react';

interface IPaginacaoProps {
  paginaAtual: number;
  itensPorPagina: number;
  totalItens: number;
  mudarPaginaAtual: (value: number) => void;
  mudarQtdItensPorPagina: (value: number) => void;
}

const Paginacao = ({
  paginaAtual,
  itensPorPagina,
  totalItens,
  mudarPaginaAtual,
  mudarQtdItensPorPagina,
}: IPaginacaoProps) => {
  // paginação simples
  let paginasListadas = [];
  for (let i = 1; i <= Math.ceil(totalItens / itensPorPagina); i++) {
    paginasListadas.push(i);
  }
  // função para mudar página
  function mudarPaginacao(pagina: number) {
    mudarPaginaAtual(pagina);
  }
  // função mudar quantidade itens por página
  function mudarItensPorPagina(qtd: number) {
    mudarQtdItensPorPagina(qtd);
    mudarPaginaAtual(1);
  }

  return (
    <>
      <Box>
        <Flex justifyContent={{ md: 'flex-end', sm: 'center' }} mb="20px">
          <Text textTransform="uppercase" fontSize="10px" color="gray.400">
            Total de Itens {totalItens} • Total de Páginas {paginasListadas.length}
          </Text>
        </Flex>
      </Box>
      <Box>
        <Flex justifyContent="space-between" alignItems="center" flexDirection={{ md: 'initial', sm: 'column' }}>
          <Flex alignItems="center" mb="10px" w={{ md: '20%', sm: '90%' }}>
            <Select value={itensPorPagina} mr="5px" onChange={(e) => mudarItensPorPagina(+e.target.value)}>
              <option value="2">2 itens</option>
              <option value="3">3 itens</option>
              <option value="4">4 itens</option>
              <option value="6">6 itens</option>
            </Select>
            <Text textTransform="uppercase" fontSize="10px" color="gray.400">
              /Página
            </Text>
          </Flex>
          <HStack mb="10px">
            {paginasListadas.map((pagina) => {
              return (
                <Button
                  key={pagina}
                  p="5px"
                  colorScheme={pagina === paginaAtual ? 'blue' : 'gray'}
                  isDisabled={pagina === paginaAtual}
                  onClick={() => mudarPaginacao(pagina)}
                >
                  {pagina}
                </Button>
              );
            })}
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Paginacao;
