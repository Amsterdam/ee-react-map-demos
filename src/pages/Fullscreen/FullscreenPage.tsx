import {
  AspectRatio,
  Overlap,
  Screen,
  SkipLink,
} from '@amsterdam/design-system-react';
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import ZoomControl from '../ZoomControl';

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
  const [map, setMap] = useState('test');

  return (
    <>
      <SkipLink href="#main">Direct naar inhoud</SkipLink>
      <Screen maxWidth="wide">
        {header}

        <Overlap>
          <AspectRatio ratio="wide">
            <MapContext.Provider value={{ map, setMap }}>
              {/* <BaseLayer /> */}
              <ZoomControl />
            </MapContext.Provider>
          </AspectRatio>
        </Overlap>

        {footer}
      </Screen>
    </>
  );
};
