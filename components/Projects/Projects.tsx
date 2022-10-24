import React from 'react';
import { Text, Box, Flex, Divider, Image, Button } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <Box flexDirection="column" w={'80%'} margin={'0 auto'}>
      <Box mb={'10rem'}>
        <Flex flexDirection={'row'} alignItems="center" mb={'5rem'} gap="2rem">
          <Divider />
          <Text fontSize="2rem" fontWeight="bold" width={'63rem'} color="#8c9095">
            Some Recent Projects
          </Text>
          <Divider />
        </Flex>

        <Flex flexDirection={'row'} alignItems="center" gap="5rem">
          <Box>
            <Text fontSize="1.5rem" fontWeight="bold" color="#8c9095">
              Countries
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium magnam
              porro ducimus adipisci impedit vel totam commodi eum magni, nihil iure molestiae,
              dolor maiores quibusdam dignissimos enim aspernatur quis.
            </Text>
            <Flex mt={'2rem'} gap="2rem">
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

      <Box mb={'10rem'}>
        <Flex flexDirection={'row'} alignItems="center" gap="5rem">
          <Image
            src="/devfinder-preview.png"
            alt="DevFinder Project Preview"
            width={'40rem'}
            borderRadius="8px"
          />

          <Box>
            <Text fontSize="1.5rem" fontWeight="bold" color="#8c9095">
              DevFinder
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium magnam
              porro ducimus adipisci impedit vel totam commodi eum magni, nihil iure molestiae,
              dolor maiores quibusdam dignissimos enim aspernatur quis.
            </Text>
            <Flex mt={'2rem'} gap="2rem">
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

      <Box mb={'10rem'}>
        <Flex flexDirection={'row'} alignItems="center" gap="5rem">
          <Box>
            <Text fontSize="1.5rem" fontWeight="bold" color="#8c9095">
              E-Commerce [Product Page Design]
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium magnam
              porro ducimus adipisci impedit vel totam commodi eum magni, nihil iure molestiae,
              dolor maiores quibusdam dignissimos enim aspernatur quis.
            </Text>
            <Flex mt={'2rem'} gap="2rem">
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
