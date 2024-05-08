import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const NavigationMenu = (): JSX.Element => (
  <div className={styles.container} data-testid="navigation-menu">
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
  </div>
);

export default NavigationMenu;
