import React from 'react';
// chakra
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
// icons
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="white"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Trocar tema: ${text}`}
      _hover={{
        bg: 'gray.700',
      }}
    />
  );
};
