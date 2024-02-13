import styles from './demo-feature-lib.module.css';

/* eslint-disable-next-line */
export interface DemoFeatureLibProps {}

export function DemoFeatureLib(props: DemoFeatureLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Demo Feature Lib(First feature)!</h1>
    </div>
  );
}

export default DemoFeatureLib;
