import React from 'react';

import { Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex justifyContent={'center'} mb={'2rem'}>
      <Text color="#8c9095">
        Desinged and Developed with 💙 by{' '}
        <Link color="#FFF" href="https://linkedin.com/in/emmanuel-oloke" target="_blank">
          Emmanuel Oloke
        </Link>
        .
      </Text>
    </Flex>
  );
};

export default Footer;
