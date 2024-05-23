import { useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import type { FeatureCollection, LineString } from 'geojson';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import getCrsRd from '@/utils/getCrsRd';
import styles from './styles.module.css';
import data from './data.json';
import reverseLatLng from '@/utils/reverseLatLng';

const polygonInactiveStyles = {
  fillOpacity: 0.2,
  color: '#0000ff',
};

const polygonActiveStyles = {
  ...polygonInactiveStyles,
  fillOpacity: 0.5,
  color: '#ff0000',
};

// TODO align code comments with Marker
const PolygonLayer: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const createdMapInstance = useRef(false);

  const polygonRefs = useRef<L.Polygon[]>([]);

  // Set the Leaflet map and Amsterdam base layer
  useEffect(() => {
    if (containerRef.current === null || createdMapInstance.current !== false) {
      return;
    }

    const map = new L.Map(containerRef.current, {
      center: L.latLng([52.370216, 4.895168]),
      zoom: 12,
      layers: [
        L.tileLayer('https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png', {
          attribution: '',
          subdomains: ['t1', 't2', 't3', 't4'],
          tms: true,
        }),
      ],
      zoomControl: false,
      maxZoom: 16,
      minZoom: 3,
      crs: getCrsRd(),
      maxBounds: [
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ],
    });

    map.attributionControl.setPrefix(false);

    createdMapInstance.current = true;
    setMapInstance(map);

    return () => {
      if (mapInstance) mapInstance.remove();
    };
  }, []);

  // Create the polygon layer and add it to the map
  useEffect(() => {
    let selectedPolygon: number | undefined = undefined;

    if (mapInstance) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data.map((record: any, index: number) => {
        // Reverse the lat lng arrays otherwise Leaflet will plot incorrectly
        const geoJson = reverseLatLng(record.geometry);

        // Create the polygon layer
        polygonRefs.current[index] = L.polygon(
          (geoJson.toGeoJSON() as FeatureCollection<LineString>).features[0]
            .geometry.coordinates as LatLngTuple[]
        )
          .addTo(mapInstance)
          .on('mouseover', () => {
            polygonRefs.current[index].setStyle(polygonActiveStyles);
          })
          .on('mouseout', () => {
            if (selectedPolygon !== index) {
              polygonRefs.current[index].setStyle(polygonInactiveStyles);
            }
          })
          .on('click', () => {
            L.popup()
              .setLatLng([
                geoJson.getBounds().getCenter().lng,
                geoJson.getBounds().getCenter().lat,
              ])
              .setContent(`${index}: ${record.name}<br />`)
              .openOn(mapInstance as L.Map)
              .on('remove', () => {
                selectedPolygon = undefined;
                polygonRefs.current[index].setStyle(polygonInactiveStyles);
              });

            selectedPolygon = index;
            polygonRefs.current[index].setStyle(polygonActiveStyles);
          });
      });
    }

    return () => {
      if (polygonRefs.current && mapInstance) {
        polygonRefs.current.forEach(polygon =>
          mapInstance.removeLayer(polygon)
        );
      }
    };
  }, [data, mapInstance]);

  return <div className={styles.container} ref={containerRef} />;
};

export default PolygonLayer;
