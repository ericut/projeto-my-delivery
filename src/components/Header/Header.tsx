import React from 'react';
// chakra
import { Heading, Flex, useColorModeValue } from '@chakra-ui/react';
// components
import { ColorModeSwitcher } from '../ColorModeSwitcher/ColorModeSwitcher';

export default function Header() {
  const HeaderBg = useColorModeValue('blue.600', 'blue.800');

  return (
    <Flex
      as="header"
      w="100%"
      h={{ lg: '120px', md: '100px', sm: '80px' }}
      boxShadow="lg"
      px="20px"
      justifyContent="center"
      bg={HeaderBg}
      transition="0.5s all"
    >
      <Flex w={{ lg: '1100px', md: '90%', sm: '100%' }} alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg" fontSize={{ lg: '36px', md: '28px', sm: '24px' }} color="white">
          • MyDelivery •
        </Heading>
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  );
}
