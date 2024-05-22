import {
  AspectRatio,
  Overlap,
  Screen,
  SkipLink,
} from '@amsterdam/design-system-react';
import { ReactElement } from 'react';
import Map from '../../components/Map/Map';
import ZoomControl from '../../components/ZoomControl/ZoomControl';

export type FullscreenPageProps = {
  header?: ReactElement;
  footer?: ReactElement;
};

export const FullscreenPage = ({ header, footer }: FullscreenPageProps) => {
  return (
    <>
      <SkipLink href="#main">Direct naar inhoud</SkipLink>
      <Screen maxWidth="wide">
        {header}

        <Overlap>
          <AspectRatio ratio="wide">
            <Map mapOptions={{ scrollWheelZoom: false }}>
              <ZoomControl />
            </Map>
          </AspectRatio>
        </Overlap>

        {footer}
      </Screen>
    </>
  );
};
