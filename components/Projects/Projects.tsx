import React from 'react';
import { Text, Box, Flex, Divider, Image, Button, Link } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <Box
      id="projects"
      flexDirection="column"
      w={{ base: '80%', sm: '80%', md: '80%', lg: '80%', xl: '80%', '2xl': '1440px' }}
      margin={'0 auto'}
    >
      <Flex flexDirection={'row'} alignItems="center" mb={'5rem'} gap="2rem">
        <Divider
          display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
        />
        <Text
          fontSize={{
            base: '1.5rem',
            sm: '1.5rem',
            md: '1.5rem',
            lg: '2rem',
            xl: '2rem',
            '2xl': '1.99rem',
          }}
          fontWeight="bold"
          width={{ lg: '63rem', xl: '63rem', '2xl': '63rem' }}
          margin={'0 auto'}
          color="#8c9095"
        >
          Some Recent Projects
        </Text>
        <Divider
          display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
        />
      </Flex>

      <Box mb={{ base: '5rem', sm: '5rem', md: '10rem', lg: '10rem', xl: '10rem', '2xl': '10rem' }}>
        <Flex
          flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
          alignItems="center"
          gap="5rem"
        >
          <Box>
            <Text fontSize="1.5rem" fontWeight="bold" color="#8c9095" mb={'1rem'}>
              Countries
            </Text>
            <Text>
              A web app for visualizing information about different countries of the world. View
              details about a country, filter by region and also check out countries that share
              borders. Leveraged on the information and functionalities provided by the{' '}
              <Link href="https://restcountries.com/" target="_blank" color="#8c9095">
                REST Countries API.
              </Link>
            </Text>
            <Text mt={'1rem'}>Built with NextJS, TypeScript and ChakraUI. Hosted with Vercel</Text>
            <Flex
              mt={'2rem'}
              gap="2rem"
              flexDirection={{
                base: 'column',
                sm: 'column',
                md: 'row',
                lg: 'row',
                xl: 'row',
                '2xl': 'row',
              }}
            >
              <Button
                className="project-btn"
                leftIcon={<FaGithub />}
                as="a"
                href="https://github.com/EmmanuelOloke/countries"
                target="_blank"
                outline="solid"
                background="none"
                py={'1.5rem'}
                px={'1.2rem'}
                borderRadius={5}
              >
                View GitHub Repo
              </Button>
              <Button
                className="project-btn"
                leftIcon={<FaExternalLinkAlt />}
                as="a"
                href="https://countries-le4q9to4a-emmanueloloke.vercel.app/"
                target="_blank"
                outline="solid"
                background="none"
                py={'1.5rem'}
                px={'1.2rem'}
              >
                View Live Site
              </Button>
            </Flex>
          </Box>
          <Image
            src="/countries-preview.png"
            alt="Countries Project Preview"
            width={'40rem'}
            borderRadius="8px"
          />
        </Flex>
      </Box>

      <Box mb={{ base: '5rem', sm: '5rem', md: '10rem', lg: '10rem', xl: '10rem', '2xl': '10rem' }}>
        <Flex
          flexDirection={{
            base: 'column-reverse',
            sm: 'column-reverse',
            md: 'column-reverse',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
          alignItems="center"
          gap="5rem"
        >
          <Image
            src="/devfinder-preview.png"
            alt="DevFinder Project Preview"
            width={'40rem'}
            borderRadius="8px"
          />

          <Box>
            <Text fontSize="1.5rem" fontWeight="bold" color="#8c9095" mb={'1rem'}>
              DevFinder
            </Text>
            <Text>
              DevFinder is a web application that utilizes the{' '}
              <Link href="https://api.github.com/users" color="#8c9095" target="_blank">
                GitHub Users API
              </Link>{' '}
              to connect and fetch data. Search for a particular GitHub user and it returns
              information about the user in a well presented User Interface.
            </Text>
            <Text mt={'1rem'}>
              Built with ReactJS, JavaScript and ChakraUI. Hosted with GitHub Pages
            </Text>
            <Flex
              mt={'2rem'}
              gap="2rem"
              flexDirection={{
                base: 'column',
                sm: 'column',
                md: 'row',
                lg: 'row',
                xl: 'row',
                '2xl': 'row',
              }}
            >
              <Button
                className="project-btn"
                leftIcon={<FaGithub />}
                as="a"
                href="https://github.com/EmmanuelOloke/github-user-search-app"
                target="_blank"
                outline="solid"
                background="none"
                py={'1.5rem'}
                px={'1.2rem'}
              >
                View GitHub Repo
              </Button>
              <Button
                className="project-btn"
                leftIcon={<FaExternalLinkAlt />}
                as="a"
                href="https://emmanueloloke.github.io/github-user-search-app/"
                target="_blank"
                outline="solid"
                background="none"
                py={'1.5rem'}
                px={'1.2rem'}
              >
                View Live Site
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box mb={{ base: '5rem', sm: '5rem', md: '10rem', lg: '10rem', xl: '10rem', '2xl': '10rem' }}>
        <Flex
          flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
          alignItems="center"
          gap="5rem"
        >
          <Box>
            <Text fontSize="1.5rem" fontWeight="bold" color="#8c9095" mb={'1rem'}>
              E-Commerce [Product Page Design]
            </Text>
            <Text>
              A design implementation for an e-commerce product page. Explore the product carousel
              slides and also the add to cart functionality.
            </Text>
            <Text mt={'1rem'}>
              Built with HTML, CSS, JavaScript, and ReactJS. Hosted with GitHub Pages
            </Text>
            <Flex
              mt={'2rem'}
              gap="2rem"
              flexDirection={{
                base: 'column',
                sm: 'column',
                md: 'row',
                lg: 'row',
                xl: 'row',
                '2xl': 'row',
              }}
            >
              <Button
                className="project-btn"
                leftIcon={<FaGithub />}
                as="a"
                href="https://github.com/EmmanuelOloke/e-commerce-product-page"
                target="_blank"
                outline="solid"
                background="none"
                py={'1.5rem'}
                px={'1.2rem'}
              >
                View GitHub Repo
              </Button>
              <Button
                className="project-btn"
                leftIcon={<FaExternalLinkAlt />}
                as="a"
                href="https://emmanueloloke.github.io/e-commerce-product-page/"
                target="_blank"
                outline="solid"
                background="none"
                py={'1.5rem'}
                px={'1.2rem'}
              >
                View Live Site
              </Button>
            </Flex>
          </Box>
          <Image
            src="/e-commerce-preview.png"
            alt="Countries Project Preview"
            width={'40rem'}
            borderRadius="8px"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Projects;
