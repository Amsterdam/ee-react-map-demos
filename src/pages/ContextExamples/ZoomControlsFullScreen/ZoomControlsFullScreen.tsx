import Header from './Header';
import MapProvider from './MapProvider';
import ZoomControls from './ZoomControls';
import styles from './styles.module.css';

const ZoomControlsFullScreen = () => {
  return (
    <div className={styles.fullscreen}>
      <Header />
      <div className={styles.container}>
        <MapProvider>
          <ZoomControls />
        </MapProvider>
      </div>
    </div>
  );
};

export default ZoomControlsFullScreen;
