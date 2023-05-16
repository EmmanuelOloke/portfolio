import { Project } from '../types/projects';

export const projectData: Project[] = [
  {
    id: 1,
    previewImgSrc: '/project-images/techtime.png',
    previewImgAlt: 'Tech Time Project Preview',
    title: 'Tech Time',
    titleTextColor: '#8c9095',
    description:
      'TechTime is an online digital skill tutoring platform that teaches high income skills through high quality video, audio and live classes. Get access to experienced mentors, one-on-one meetings, affordable prices, and flexible learrning all on one platform',
    builtWith: 'Built with NextJS, TypeScript, ChakraUI, and SplideJS. Hosted with Vercel',
    githubRepoLink: 'https://github.com/EmmanuelOloke/techtime',
    liveLink: 'https://techtime-seven.vercel.app/',
  },
  {
    id: 2,
    previewImgSrc: '/project-images/countries-preview.png',
    previewImgAlt: 'Countries Project Preview',
    title: 'Countries',
    titleTextColor: '#8c9095',
    description:
      'A web app for visualizing information about different countries of the world. View details about a country, filter by region and also check out countries that share borders.',
    builtWith:
      'Built with NextJS, TypeScript, ChakraUI, and REST Countries API. Hosted with Vercel',
    githubRepoLink: 'https://github.com/EmmanuelOloke/countries',
    liveLink: 'https://countries-le4q9to4a-emmanueloloke.vercel.app/',
  },
  {
    id: 3,
    previewImgSrc: '/project-images/devfinder-preview.png',
    previewImgAlt: 'DevFinder Project Preview',
    title: 'DevFinder',
    titleTextColor: '#8c9095',
    description:
      'DevFinder is a web application that utilizes github users API to connect and fetch data. Search for a particular GitHub user and it returns information about the user in a well presented User Interface.',
    builtWith:
      'Built with ReactJS, JavaScript, ChakraUI, and GitHub Users API. Hosted with GitHub Pages',
    githubRepoLink: 'https://github.com/EmmanuelOloke/github-user-search-app',
    liveLink: 'https://emmanueloloke.github.io/github-user-search-app/',
  },
  {
    id: 4,
    previewImgSrc: '/project-images/e-commerce-preview.png',
    previewImgAlt: 'E-Commerce Product Page Preview',
    title: 'E-Commerce Product Page Design',
    titleTextColor: '#8c9095',
    description:
      'A design implementation for an e-commerce product page. Explore the product carousel slides and also the add to cart functionality.',
    builtWith: 'Built with HTML, CSS, JavaScript, and ReactJS. Hosted with GitHub Pages',
    githubRepoLink: 'https://github.com/EmmanuelOloke/e-commerce-product-page',
    liveLink: 'https://emmanueloloke.github.io/e-commerce-product-page/',
  },
];
