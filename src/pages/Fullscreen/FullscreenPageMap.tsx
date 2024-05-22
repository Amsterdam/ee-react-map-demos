import { AspectRatio } from '@amsterdam/design-system-react';
import Map from '../../components/Map/Map';
import ZoomControl from '../../components/ZoomControl/ZoomControl';

export type FullScreenPageMapProps = {
  scrollWheelZoom?: boolean;
};

const FullscreenPageMap = ({ scrollWheelZoom }: FullScreenPageMapProps) => {
  return (
    <AspectRatio ratio="wide">
      <Map mapOptions={{ scrollWheelZoom: scrollWheelZoom }}>
        <ZoomControl />
      </Map>
    </AspectRatio>
  );
};

export default FullscreenPageMap;
