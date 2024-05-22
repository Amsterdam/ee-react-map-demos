import { Screen, SkipLink } from '@amsterdam/design-system-react';
import { ReactElement } from 'react';

export type FullscreenPageProps = {
  header?: ReactElement;
  map?: ReactElement;
  footer?: ReactElement;
};

export const FullscreenPage = ({
  header,
  map,
  footer,
}: FullscreenPageProps) => {
  return (
    <>
      <SkipLink href="#main">Direct naar inhoud</SkipLink>
      <Screen maxWidth="wide">
        {header}
        {map}
        {footer}
      </Screen>
    </>
  );
};
