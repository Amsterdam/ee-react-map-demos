import { Page } from '@amsterdam/design-system-react';
import Header from './Header';
import MapProvider from './MapProvider';
import ZoomControls from './ZoomControls';
import styles from './styles.module.css';

const DesignSystemPageZoomControls = () => {
  return (
    <Page lang="nl">
      <Header />
      <div className="ams-grid">
        <div className="ams-grid__cell ams-grid__cell--span-all">
          <div className={styles.map}>
            <MapProvider>
              <ZoomControls />
            </MapProvider>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default DesignSystemPageZoomControls;
