import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default Home;
