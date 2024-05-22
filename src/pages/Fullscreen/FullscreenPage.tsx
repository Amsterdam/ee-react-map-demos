import {
  AspectRatio,
  Overlap,
  Screen,
  SkipLink,
} from '@amsterdam/design-system-react';
import { Dispatch, ReactElement, SetStateAction, createContext } from 'react';
import ZoomControl from '../ZoomControl/ZoomControl';
import Map from './Map';

export type FullscreenPageProps = {
  header?: ReactElement;
  footer?: ReactElement;
};

interface MapContextType {
  map: string;
  setMap: Dispatch<SetStateAction<string>>;
}

// Create the context with the correct type and a default value
export const MapContext = createContext<MapContextType | null>(null);

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
