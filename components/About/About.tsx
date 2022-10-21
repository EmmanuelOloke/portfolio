import React from 'react';
import { Flex, Box, Image, Text, Divider } from '@chakra-ui/react';

const About = () => {
  return (
    <Flex
      flexDirection={{
        base: 'column-reverse',
        sm: 'column-reverse',
        md: 'column-reverse',
        lg: 'row',
        xl: 'row',
        '2xl': 'row',
      }}
      mt={{ base: '8rem', sm: '8rem', md: '8rem', lg: '12rem', xl: '16rem', '2xl': '20rem' }}
      mb={{ base: '8rem', sm: '8rem', md: '8rem', lg: '12rem', xl: '16rem', '2xl': '20rem' }}
      gap={{ base: 20, sm: 20, md: 20, lg: 50, xl: '8rem', '2xl': '12rem' }}
      justifyContent={{
        base: 'center',
        sm: 'center',
        md: 'center',
        lg: 'center',
        xl: 'center',
        '2xl': 'center',
      }}
      alignItems={{
        base: 'center',
        sm: 'center',
        md: 'center',
        lg: 'center',
        xl: 'center',
        '2xl': 'center',
      }}
    >
      <Box>
        <Image
          className="img-overlay-control"
          w={{ base: '20rem', sm: '20rem', md: '20rem', lg: '30rem', xl: '30rem', '2xl': '30rem' }}
          src="portrait.jpg"
          alt="Emmanuel Oloke Official Portrait"
          borderRadius={10}
        />
      </Box>
      <Box
        fontSize={'1.2rem'}
        w={{ base: '25rem', sm: '25rem', md: '25rem', lg: '30rem', xl: '40rem', '2xl': '40rem' }}
      >
        <Text fontSize="2.5rem" textAlign="center" fontWeight="bold" opacity="0.7">
          About Me
        </Text>
        <Divider mt={'1rem'} mb={'1rem'} />
        <Text mb={'2rem'}>
          Hello! My name is Brittany and I enjoy creating things that live on the internet. My
          interest in web development started back in 2012 when I decided to try editing custom
          Tumblr themes — turns out hacking together a custom reblog button taught me a lot about
          HTML & CSS!
        </Text>
        <Text mb={'2rem'}>
          Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a
          start-up, a huge corporation, and a student-led design studio. My main focus these days is
          building accessible, inclusive products and digital experiences at Upstatement for a
          variety of clients.
        </Text>
        <Text mb={'2rem'}>
          I also recently launched a course that covers everything you need to build a web app with
          the Spotify API using Node & React. Here are a few technologies I’ve been working with
          recently:
        </Text>
        <Text
          fontSize={{
            base: '1.5rem',
            sm: '1.5rem',
            md: '1.5rem',
            lg: '2rem',
            xl: '2rem',
            '2xl': '2rem',
          }}
          opacity="0.7"
          mb={'1rem'}
        >
          Here are few technologies I use:
        </Text>
        <Flex gap={'15px'} alignItems="center" flexWrap={'wrap'}>
          <Box className="tools">
            <Image src="/html-logo.png" alt="html 5 logo" w={'4rem'} />
            <Text opacity="0.7" fontWeight="bold">
              HTML 5
            </Text>
          </Box>
          <Box className="tools">
            <Image src="/css-logo.webp" alt="css3 logo" w={'4rem'} />
            <Text opacity="0.7" fontWeight="bold">
              CSS 3
            </Text>
          </Box>
          <Box className="tools">
            <Image src="/js-logo.png" alt="javascript logo" borderRadius={'10px'} w={'4rem'} />
            <Text opacity="0.7" fontWeight="bold">
              JavaScript
            </Text>
          </Box>
          <Box className="tools">
            <Image src="/typescript-logo.png" alt="typescript logo" w={'4rem'} />
            <Text opacity="0.7" fontWeight="bold">
              TypeScript
            </Text>
          </Box>
          <Box className="tools">
            <Image src="/node-logo.webp" alt="node logo" w={'4rem'} />
            <Text opacity="0.7" fontWeight="bold">
              NodeJS
            </Text>
          </Box>
          <Box className="tools">
            <Image src="/nextjs.png" alt="next logo" w={'4rem'} />
            <Text opacity="0.7" fontWeight="bold">
              NextJS
            </Text>
          </Box>
          <Box className="tools">
            <Image src="/react.webp" alt="react logo" w={'4rem'} />
            <Text opacity="0.7" fontWeight="bold">
              ReactJS
            </Text>
          </Box>
          <Box className="tools">
            <Image src="/mongo.webp" alt="mongodb logo" w={'4rem'} />
            <Text opacity="0.7" fontWeight="bold">
              MongoDB
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default About;
