import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { To } from 'react-router-dom';
import { Heading } from '@amsterdam/design-system-react';
import styles from './styles.module.css';

const RRAmsLink = ({
  to,
  children,
}: {
  to: To;
  children: ReactNode;
}): JSX.Element => (
  <Link className="ams-link ams-link--standalone" to={to}>
    {children}
  </Link>
);

const NavigationMenu = (): JSX.Element => (
  <nav className={styles.container} data-testid="navigation-menu">
    <div>
      <Heading level={4}>React + Leaflet</Heading>
      <RRAmsLink to="/">Amsterdam Base Layer</RRAmsLink>
    </div>
    <div>
      <Heading level={4}>React + React-Leaflet</Heading>
    </div>
  </nav>
);

export default NavigationMenu;
