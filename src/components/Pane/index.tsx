import { Heading, IconButton } from '@amsterdam/design-system-react';
import { HTMLAttributes, PropsWithChildren } from 'react';

import styles from './styles.module.css';

export type PaneProps = {
  label: string;
  closable?: boolean;
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

const Pane = ({ children, label, closable }: PaneProps) => {
  return (
    <aside className={styles.container}>
      <header>
        <Heading level={2} size="level-4">
          {label}
        </Heading>
        {closable && <IconButton label="Close" size="level-4" />}
      </header>
      {children}
    </aside>
  );
};

export default Pane;
