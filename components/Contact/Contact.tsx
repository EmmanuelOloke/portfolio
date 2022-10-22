import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <Box
      w={'80%'}
      margin={'0 auto'}
      display="flex"
      flexDirection="column"
      alignItems="center"
      pb={20}
    >
      <Text fontSize="2rem" fontWeight="bold" mb={5}>
        Get in Touch
      </Text>
      <Text fontSize="1.2rem" textAlign="center" mb={5}>
        You can reach out to me through any of these medium, be it to ask some questions, discuss
        opportunities for work and collaborations or just to catch up and chat. I will definitely
        get back to you.
      </Text>
      <Flex fontSize="2.2rem" gap="2rem">
        <Link href="https://github.com/EmmanuelOloke" target="_blank" className="logo">
          <FaGithub cursor="pointer" />
        </Link>

        <Link href="https://linkedin.com/in/emmanuel-oloke" target="_blank" className="logo">
          <FaLinkedin />
        </Link>

        <Link href="mailto:dapopeemmanuel@gmail.com" target="_blank" className="logo">
          <FaEnvelope />
        </Link>

        <Link href="https://twitter.com/I_am_Pope" target="_blank" className="logo">
          <FaTwitter />
        </Link>

        <Link href="https://instagram.com/popeemmanuel" target="_blank" className="logo">
          <FaInstagram />
        </Link>
      </Flex>
    </Box>
  );
};

export default Contact;
