import type { ClusterOptions } from './types';
import styles from './styles.module.css';

export const CLUSTER_STYLES = {
  default: styles.markerCluster,
  small: styles.markerClusterSmall,
  medium: styles.markerClusterMedium,
  large: styles.markerClusterLarge,
};

export const CLUSTER_OPTIONS: ClusterOptions = {
  clusterShape: 'circle',
  spiderfyOnMaxZoom: true,
};

export const lineStyles = {
  color: '#222',
  opacity: 0.5,
  weight: 1.5,
};
