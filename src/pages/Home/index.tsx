import type { FunctionComponent } from 'react';
import HomeIcon from '@/assets/icons/housing.svg?react';
import styles from './styles.module.css';

const Home: FunctionComponent = () => (
  <div>
    <p>
      Home <HomeIcon className={styles.icon} />
    </p>
  </div>
);

export default Home;
