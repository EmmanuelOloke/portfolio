import React from 'react';
import { Text, Box, Flex, Divider, Image, Button, Link } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import { projectData } from '../../public/data/projectData';

const Projects = () => {
  return (
    <Box
      id="projects"
      flexDirection="column"
      w={{ base: '80%', sm: '80%', md: '80%', lg: '80%', xl: '80%', '2xl': '1440px' }}
      margin={'0 auto'}
      scrollMarginTop="6rem"
    >
      <Flex flexDirection={'row'} alignItems="center" mb={'5rem'} gap="2rem">
        <Divider
          display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
          data-aos="fade-right"
          data-aos-delay="400"
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
          data-aos="fade-down"
          data-aos-delay="400"
        >
          Some Recent Projects
        </Text>
        <Divider
          display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
          data-aos="fade-left"
          data-aos-delay="400"
        />
      </Flex>

      <Box>
        {projectData.map((project) => (
          <Flex
            key={project.id}
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
            _even={{ flexDirection: 'row-reverse' }}
            mb={{ base: '5rem', sm: '5rem', md: '10rem', lg: '10rem', xl: '10rem', '2xl': '10rem' }}
          >
            <Image
              src={project.previewImgSrc}
              alt={project.previewImgAlt}
              width={'40rem'}
              borderRadius="8px"
              data-aos="fade-down-left"
              data-aos-delay="500"
            />
            <Box>
              <Text
                fontSize="1.5rem"
                fontWeight="bold"
                color={project.titleTextColor}
                mb={'1rem'}
                data-aos="fade-down-right"
                data-aos-delay="500"
              >
                {project.title}
              </Text>
              <Text data-aos="fade-down-right" data-aos-delay="500">
                {project.description}
              </Text>
              <Text data-aos="fade-down-right" data-aos-delay="500" mt={'1rem'}>
                {project.builtWith}
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
                data-aos="fade-down-right"
                data-aos-delay="500"
              >
                <Button
                  className="project-btn"
                  leftIcon={<FaGithub />}
                  as="a"
                  href={project.githubRepoLink}
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
                  href={project.liveLink}
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
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
