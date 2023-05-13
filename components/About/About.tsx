import React from 'react';
import { Flex, Box, Image, Text, Divider, Link } from '@chakra-ui/react';

const About = () => {
  return (
    <Flex
      id="about"
      flexDirection={{
        base: 'column',
        sm: 'column',
        md: 'column',
        lg: 'row',
        xl: 'row',
        '2xl': 'row',
      }}
      mt={{ base: '8rem', sm: '8rem', md: '8rem', lg: '12rem', xl: '16rem', '2xl': '20rem' }}
      mb={{ base: '5rem', sm: '5rem', md: '5rem', lg: '12rem', xl: '12rem', '2xl': '12rem' }}
      gap={{ base: 20, sm: 20, md: 20, lg: 50, xl: '8rem', '2xl': '12rem' }}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Flex
        display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none', '2xl': 'none' }}
        flexDirection={'column'}
        alignItems="center"
        margin={'0 auto'}
        w={'85%'}
      >
        <Text
          fontSize="1.5rem"
          textAlign="center"
          fontWeight="bold"
          color="#8c9095"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          About Me
        </Text>
        <Divider mt={'1rem'} />
      </Flex>

      <Box data-aos="fade-right" data-aos-delay="200">
        <Image
          className="img-overlay-control"
          w={{ base: '15rem', sm: '15rem', md: '15rem', lg: '30rem', xl: '30rem', '2xl': '30rem' }}
          src="portrait.jpg"
          alt="Emmanuel Oloke Official Portrait"
          borderRadius={10}
        />
      </Box>
      <Box
        fontSize={'1.2rem'}
        w={{ base: '85%', sm: '85%', md: '85%', lg: '30rem', xl: '33rem', '2xl': '47rem' }}
      >
        <Flex
          display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
          flexDirection="column"
        >
          <Text
            fontSize="2.5rem"
            textAlign="center"
            fontWeight="bold"
            color={'#8c9095'}
            data-aos="fade-left"
            data-aos-delay="100"
          >
            About Me
          </Text>
          <Divider mt={'1rem'} mb={'2rem'} data-aos="fade-left" data-aos-delay="200" />
        </Flex>
        <Text
          mb={'2rem'}
          fontSize={{ base: 'md', sm: 'md', md: 'md', lg: 'lg', xl: 'lg', '2xl': 'lg' }}
          data-aos="fade-left"
          data-aos-delay="300"
        >
          Hello! My name is Emmanuel. I enjoy building well-structured and aesthetically pleasing
          software. I first picked interest in web development as a teenager and that influenced my
          decision to study Computer Science as my first degree.
        </Text>
        <Text
          mb={'2rem'}
          fontSize={{ base: 'md', sm: 'md', md: 'md', lg: 'lg', xl: 'lg', '2xl': 'lg' }}
          data-aos="fade-left"
          data-aos-delay="400"
        >
          Fast forward to now, a lot has happened. I have been priviledged to work as a web
          developer for a{' '}
          <Link color="#8c9095" href="https://shiffishutterz.com" target="_blank">
            photography studio
          </Link>
          , building the website from the ground up. I have also spent some time away from tech
          working in the Oil and Gas industry as a Field Engineer.
        </Text>
        <Text
          mb={'2rem'}
          fontSize={{ base: 'md', sm: 'md', md: 'md', lg: 'lg', xl: 'lg', '2xl': 'lg' }}
          data-aos="fade-left"
          data-aos-delay="500"
        >
          Now I am transitioning back into the tech industry leveraging on old and new experiences
          to build modern software solutions and chart a renewed career path.
        </Text>
        <Text
          fontSize={{
            base: '1.3rem',
            sm: '1.3rem',
            md: '1.3rem',
            lg: '2rem',
            xl: '2rem',
            '2xl': '2rem',
          }}
          color="#8c9095"
          mb={'1rem'}
          data-aos="fade-left"
          data-aos-delay="600"
        >
          Here are few technologies I use:
        </Text>
        <Flex
          gap={'15px'}
          alignItems="center"
          flexWrap={'wrap'}
          data-aos="fade-left"
          data-aos-delay="700"
        >
          <Box className="tools">
            <Image
              src="/html-logo.png"
              alt="html 5 logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="sm">
              HTML 5
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/css-logo.webp"
              alt="css3 logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
              CSS 3
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/js-logo.png"
              alt="javascript logo"
              borderRadius={'10px'}
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
              JavaScript
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/typescript-logo.png"
              alt="typescript logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
              TypeScript
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/node-logo.webp"
              alt="node logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
              NodeJS
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/nextjs.png"
              alt="next logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
              NextJS
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/react.webp"
              alt="react logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
              ReactJS
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/vue.png"
              alt="vue logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
              VueJS
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/mongo.webp"
              alt="mongodb logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
              MongoDB
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default About;
