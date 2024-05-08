import { useEffect, useState } from 'react';
import type { FunctionComponent } from 'react';
import { useLocation } from 'react-router';
import {
  Grid,
  Header as AmsHeader,
  Screen,
} from '@amsterdam/design-system-react';
import NavigationMenu from '../NavigationMenu';

const Header: FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <Screen maxWidth="wide">
        <Grid>
          <Grid.Cell span="all">
            <AmsHeader
              menu={
                <button
                  className="ams-header__menu-button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Menu
                </button>
              }
              title="React template"
            />
          </Grid.Cell>
        </Grid>
      </Screen>
      {isMenuOpen && <NavigationMenu />}
    </>
  );
};

export default Header;
