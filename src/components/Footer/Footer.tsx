import React from 'react';
// chakra
import { Text, Flex, HStack } from '@chakra-ui/react';
// icons
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const redesSociais = [
    {
      nome: 'GitHub',
      link: 'https://github.com/ericut/',
      icone: <FaGithub />,
    },
    {
      nome: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ericfrankli/',
      icone: <FaLinkedin />,
    },
    {
      nome: 'Instagram',
      link: 'https://www.instagram.com/ericfrankli/',
      icone: <FaInstagram />,
    },
  ];

  return (
    <Flex as="footer" alignItems="center" flexDirection="column" p="40px 20px">
      <Flex>
        <HStack pb="20px">
          {redesSociais.map((item) => {
            return (
              <a key={item.nome} className="socialIcons" href={item.link} target="_blank" rel="noreferrer">
                <Text fontSize="24px" transition="0.3s opacity" _hover={{ opacity: '0.5' }}>
                  {item.icone}
                </Text>
              </a>
            );
          })}
        </HStack>
      </Flex>
      <Flex fontSize="9px" letterSpacing="1.2px" textTransform="uppercase" color="gray.400">
        Feito em ReactJS & ChakraUi
        <Text color="red" p="0 5px">
          ❤
        </Text>
        <Text pr="3px">por</Text>
        <a className="socialIcons" href="https://github.com/ericut/" target="_blank" rel="noreferrer">
          Eric Frank Li
        </a>
      </Flex>
    </Flex>
  );
}
