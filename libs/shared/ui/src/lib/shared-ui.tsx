import styles from './shared-ui.module.css';

/* eslint-disable-next-line */
export interface SharedUiProps {}

export function SharedUi(props: SharedUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedUi(Latest Fix #4)!</h1>
    </div>
  );
}

export default SharedUi;
