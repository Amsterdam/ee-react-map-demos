import { Grid, Header as AmsHeader } from '@amsterdam/design-system-react';

const Header = () => {
  return (
    <Grid>
      <Grid.Cell span="all">
        <AmsHeader
          menu={<button className="ams-header__menu-button">Menu</button>}
        />
      </Grid.Cell>
    </Grid>
  );
};

export default Header;
