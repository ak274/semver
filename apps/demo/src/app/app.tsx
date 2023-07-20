// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { SharedUi } from '@semver/shared/ui';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="Great Demo" />
      <SharedUi />
    </div>
  );
}

export default App;
