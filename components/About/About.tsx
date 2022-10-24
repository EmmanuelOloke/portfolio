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
        <Text fontSize="2.5rem" textAlign="center" fontWeight="bold" color="#8c9095">
          About Me
        </Text>
        <Divider mt={'1rem'} mb={'1rem'} />
        <Text mb={'2rem'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aliquid eos quaerat
          cupiditate ex quisquam eius ratione vitae quia earum voluptatem dolor hic eum beatae
          repudiandae saepe adipisci totam fugiat!
        </Text>
        <Text mb={'2rem'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem impedit enim
          sunt velit, provident consequuntur. Eum numquam fugit tenetur magni minima, explicabo
          laboriosam officia, eos magnam nulla iste ratione.
        </Text>
        <Text mb={'2rem'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas dolorem laboriosam
          expedita adipisci facere magnam sunt. Et molestiae omnis pariatur asperiores eaque. Rem
          enim tempore corrupti veniam accusamus ipsum.
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
          color="#8c9095"
          mb={'1rem'}
        >
          Here are few technologies I use:
        </Text>
        <Flex gap={'15px'} alignItems="center" flexWrap={'wrap'}>
          <Box className="tools">
            <Image src="/html-logo.png" alt="html 5 logo" w={'3rem'} />
            <Text opacity="0.7" fontWeight="bold" fontSize="sm">
              HTML 5
            </Text>
          </Box>
          <Box className="tools">
            <Image src="/css-logo.webp" alt="css3 logo" w={'3rem'} />
            <Text opacity="0.7" fontWeight="bold" fontSize="md">
              CSS 3
            </Text>
          </Box>
          <Box className="tools">
            <Image src="/js-logo.png" alt="javascript logo" borderRadius={'10px'} w={'3rem'} />
            <Text opacity="0.7" fontWeight="bold" fontSize="md">
              JavaScript
            </Text>
          </Box>
          <Box className="tools">
            <Image src="/typescript-logo.png" alt="typescript logo" w={'3rem'} />
            <Text opacity="0.7" fontWeight="bold" fontSize="md">
              TypeScript
            </Text>
          </Box>
          <Box className="tools">
            <Image src="/node-logo.webp" alt="node logo" w={'3rem'} />
            <Text opacity="0.7" fontWeight="bold" fontSize="md">
              NodeJS
            </Text>
          </Box>
          <Box className="tools">
            <Image src="/nextjs.png" alt="next logo" w={'3rem'} />
            <Text opacity="0.7" fontWeight="bold" fontSize="md">
              NextJS
            </Text>
          </Box>
          <Box className="tools">
            <Image src="/react.webp" alt="react logo" w={'3rem'} />
            <Text opacity="0.7" fontWeight="bold" fontSize="md">
              ReactJS
            </Text>
          </Box>
          <Box className="tools">
            <Image src="/mongo.webp" alt="mongodb logo" w={'3rem'} />
            <Text opacity="0.7" fontWeight="bold" fontSize="md">
              MongoDB
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default About;
