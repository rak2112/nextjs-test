import { ReactNode } from 'react';
import styles from './restrictedLayout.module.css';

interface RestrictedWidthLayoutProps {
  children: ReactNode;
}

export const RestrictedWidthLayout = ({ children }: RestrictedWidthLayoutProps) => {
  return (
    <div className={styles.restrictedWidth}>
      {children}
    </div>
  );
}