import react from 'react';
import { Box, Text } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box>
      <Text fontSize="3xl">
        Hey there! <span className="wave">👋🏾</span>
      </Text>
    </Box>
  );
};

export default Hero;
