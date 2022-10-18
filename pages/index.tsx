import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
    </>
  );
};

export default Home;
