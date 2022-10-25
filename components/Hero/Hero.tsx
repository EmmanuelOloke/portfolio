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
      alignItems={'center'}
      justifyContent={'center'}
      mt={{ base: '13rem', sm: '15rem', md: '10rem', lg: '12rem', xl: '15rem', '2xl': '20rem' }}
      gap={{ base: 20, sm: 20, md: 20, lg: 60, xl: 60, '2xl': '33rem' }}
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
          color="#8c9095"
        >
          I build beautiful software
        </Text>
        <Text
          mt={5}
          w={{ base: '20rem', sm: '25rem', md: '35rem', lg: '35rem', xl: '35rem', '2xl': '35rem' }}
        >
          I am a software engineer with proficiency in building highly aesthetic and functional
          software products, while paying keen attention to industry standards such as
          accessibility, SEO, performance, and responsiveness.
        </Text>
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
          borderRadius={5}
        >
          Resume
        </Button>
        {/* </Box> */}
      </Box>

      <Box
        className="gradient-border"
        w={{ base: '20rem', sm: '20rem', md: '20rem' }}
        display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
      >
        <Image src="memoji.png" alt="Emmanuel Oloke's Memoji" />
      </Box>
    </Flex>
  );
};

export default Hero;
