import { Grid, Header } from '@amsterdam/design-system-react';

export const FullscreenPageHeader = () => {
  return (
    <Grid>
      <Grid.Cell span="all">
        <Header
          menu={<button className="ams-header__menu-button">Menu</button>}
        />
      </Grid.Cell>
    </Grid>
  );
};
