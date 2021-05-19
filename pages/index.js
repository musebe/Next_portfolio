import Head from 'next/head';
import { Fragment } from 'react';
import Hero from '../components/home-page/hero';

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
      <Hero />
    </Fragment>
  );
}

export default HomePage;
