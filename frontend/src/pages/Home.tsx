import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = ({}) => {
  return (
    <main className={styles.app}>
      <h1>Hello World!</h1>
      <Link to="/counter">Go to /counter</Link>
    </main>
  );
};

export default Home;