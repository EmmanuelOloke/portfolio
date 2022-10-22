import react from 'react';
import { Box, Text, Flex, Link, Button, Image } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Flex
      flexDirection={{
        base: 'column',
        sm: 'column',
        md: 'column',
        lg: 'row',
        xl: 'row',
        '2xl': 'row',
      }}
      alignItems={{
        base: 'center',
        sm: 'center',
        md: 'center',
        lg: 'center',
        xl: 'center',
        '2xl': 'center',
      }}
      justifyContent={{
        base: 'center',
        sm: 'center',
        md: 'center',
        lg: 'center',
        xl: 'center',
        '2xl': 'center',
      }}
      mt={{ base: '8rem', sm: '8rem', md: '8rem', lg: '12rem', xl: '15rem', '2xl': '20rem' }}
      gap={{ base: 20, sm: 20, md: 20, lg: 60, xl: 60, '2xl': 60 }}
    >
      <Box>
        <Text fontSize={{ base: '2xl', sm: '2xl', md: '2xl', lg: 'lg', xl: '3xl', '2xl': '3xl' }}>
          Hey there <span className="wave">👋🏾</span> I am
        </Text>
        <Text
          className="text-gradient"
          fontSize={{ base: '4xl', sm: '4xl', md: '4xl', lg: '5xl', xl: '5xl', '2xl': '5xl' }}
          fontWeight="bold"
        >
          Emmanuel Oloke
        </Text>
        <Text
          mt={2}
          fontSize={{ base: '3xl', sm: '3xl', md: '3xl', lg: '5xl', xl: '5xl', '2xl': '5xl' }}
          fontWeight="bold"
          opacity="0.5"
        >
          I build beautiful software
        </Text>
        <Text
          mt={5}
          w={{ base: '20rem', sm: '25rem', md: '35rem', lg: '35rem', xl: '35rem', '2xl': '35rem' }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique molestiae cupiditate
          voluptatum corrupti possimus explicabo culpa, ab sed natus maiores. Vel iure similique
          unde illum officia architecto suscipit! Qui, nisi?
        </Text>
        {/* <Box mt={10}> */}
        <Button
          className="btn"
          as="a"
          href="/resume.pdf"
          target="_blank"
          outline="solid"
          background="none"
          py={'1.7rem'}
          px={'5rem'}
          variant="none"
          mt={10}
        >
          Resume
        </Button>
        {/* </Box> */}
      </Box>

      <Box className="gradient-border" w={{ base: '20rem', sm: '20rem', md: '20rem' }}>
        <Image src="memoji.png" alt="Emmanuel Oloke's Memoji" />
      </Box>
    </Flex>
  );
};

export default Hero;
