import { Grid, Header as AmsHeader } from '@amsterdam/design-system-react';

const Header = () => {
  return (
    <Grid>
      <Grid.Cell span="all">
        <AmsHeader />
      </Grid.Cell>
    </Grid>
  );
};

export default Header;
