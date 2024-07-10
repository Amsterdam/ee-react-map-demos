import type { FunctionComponent } from 'react';
import { Button, Paragraph } from '@amsterdam/design-system-react';
import styles from '../styles.module.css';
import { useMapInstance } from './MapContext';

const Alert: FunctionComponent = () => {
  const { displayAlert, setDisplayAlert, selectedMarker, setSelectedMarker } =
    useMapInstance();

  if (displayAlert) {
    return (
      <section
        className={`${styles['alert-wrapper']} ams-alert ams-alert--info`}
      >
        <div className="ams-alert__content">
          <Paragraph size="small">
            You clicked on a marker with the ID{' '}
            <strong>{selectedMarker}</strong>
          </Paragraph>
          <br />
          <Button
            variant="primary"
            type="button"
            onClick={() => {
              setDisplayAlert(false);
              setSelectedMarker(null);
            }}
          >
            Reset
          </Button>
        </div>
      </section>
    );
  }

  return null;
};

export default Alert;
