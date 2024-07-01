import { AspectRatio, Screen, SkipLink } from '@amsterdam/design-system-react';
import Header from './Header';
import Footer from './Footer';
import MapProvider from './MapProvider';
import ZoomControls from './ZoomControls';

const ZoomControlsFullScreen = () => {
  return (
    <>
      <SkipLink href="#main">Direct naar inhoud</SkipLink>
      <Screen maxWidth="wide">
        <Header />
        <AspectRatio ratio="wide">
          <MapProvider>
            <ZoomControls />
          </MapProvider>
        </AspectRatio>
        <Footer />
      </Screen>
    </>
  );
};

export default ZoomControlsFullScreen;
