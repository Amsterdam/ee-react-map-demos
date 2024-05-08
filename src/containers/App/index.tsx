import type { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import styles from './styles.module.css';

const App: FunctionComponent = () => (
  <>
    <Header />
    <div className={styles.container}>
      <Outlet />
    </div>
  </>
);

export default App;
