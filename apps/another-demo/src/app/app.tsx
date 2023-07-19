// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { DemoFeatureLib } from '@semver/demo/feature-lib';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="another-demo" />
      <DemoFeatureLib />
    </div>
  );
}

export default App;
