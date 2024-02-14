// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { SharedUi } from '@semver/shared/ui';
import { DemoFeatureLib } from '@semver/demo/feature-lib';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="Great Demo" />
      <DemoFeatureLib />
      <SharedUi />
    </div>
  );
}

export default App;
