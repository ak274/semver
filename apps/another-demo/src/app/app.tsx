// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { SharedUi } from '@semver/shared/ui';

export function App() {
  return (
    <div>
      <NxWelcome title="another-demo-1" />
      <SharedUi />
    </div>
  );
}

export default App;
