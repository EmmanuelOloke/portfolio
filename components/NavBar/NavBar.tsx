import React from 'react';

import { Icon, Flex, Box, Link, IconButton, useColorMode } from '@chakra-ui/react';
import { FaCode, FaSun, FaMoon } from 'react-icons/fa';

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent="center" boxShadow="md">
      <Flex
        justifyContent="space-between"
        py={5}
        alignItems="center"
        width="90vw"
        w={{ base: '87vw', sm: '80vw', md: '80vw', lg: '88vw', xl: '87vw', '2xl': '65vw' }}
      >
        <Box>
          <Icon as={FaCode} fontSize="3xl" />
        </Box>

        <Flex gap={14} fontSize="md" textTransform="uppercase" alignItems="center">
          <Link>About</Link>
          <Link>Projects</Link>
          <Link>Contacts</Link>
          <IconButton
            aria-label="icon"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
