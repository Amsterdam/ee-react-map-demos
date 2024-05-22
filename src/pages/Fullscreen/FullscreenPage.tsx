import {
  AspectRatio,
  Overlap,
  Screen,
  SkipLink,
} from '@amsterdam/design-system-react';
import { ReactElement } from 'react';
// import BaseLayer from '../BaseLayer';
import ZoomControlLayer from '../ZoomControlLayer';

export type FullscreenPageProps = {
  header?: ReactElement;
  footer?: ReactElement;
};

// interface MapContextType {
//   map: string;
//   setMap: Dispatch<SetStateAction<string>>;
// }

// Create the context with the correct type and a default value
// export const MapContext = createContext<MapContextType | null>(null);

export const FullscreenPage = ({ header, footer }: FullscreenPageProps) => {
  // const [map, setMap] = useState('test');

  return (
    <>
      <SkipLink href="#main">Direct naar inhoud</SkipLink>
      <Screen maxWidth="wide">
        {header}

        <Overlap>
          <AspectRatio ratio="wide">
            {/* <MapContext.Provider value={{ map, setMap }}> */}
            {/* <BaseLayer /> */}
            <ZoomControlLayer />
            {/* </MapContext.Provider> */}
          </AspectRatio>
        </Overlap>

        {footer}
      </Screen>
    </>
  );
};
