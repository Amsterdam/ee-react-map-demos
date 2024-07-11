import { useMemo, type FunctionComponent } from 'react';
import { Button, UnorderedList } from '@amsterdam/design-system-react';
import styles from '../styles.module.css';
import { useMapInstance } from './MapContext';
import data from './data.json';

const Alert: FunctionComponent = () => {
  const { selectedMarkers, setSelectedMarkers } = useMapInstance();

  const selectedStr = useMemo(
    () =>
      selectedMarkers.map(selectedMarker => {
        const origin = data.find(
          record => record.properties.id === selectedMarker
        );
        let str = selectedMarker;
        if (origin) {
          str = `${str} - ${origin.properties.street}`;
        }

        return (
          <UnorderedList.Item key={`alert-${selectedMarker}`}>
            {str}
          </UnorderedList.Item>
        );
      }),
    [selectedMarkers]
  );

  if (selectedStr.length) {
    return (
      <section
        className={`${styles['alert-wrapper']} ams-alert ams-alert--info`}
      >
        <div className="ams-alert__content">
          <h2 className="ams-heading ams-heading--4">Selected markers</h2>
          <ul
            className="ams-unordered-list ams-unordered-list--small"
            style={{ marginInlineStart: 0, marginTop: '12px' }}
          >
            {selectedStr}
          </ul>
          <br />
          <Button
            variant="primary"
            type="button"
            onClick={() => setSelectedMarkers([])}
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
