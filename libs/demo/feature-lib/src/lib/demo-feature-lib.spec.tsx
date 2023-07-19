import { render } from '@testing-library/react';

import DemoFeatureLib from './demo-feature-lib';

describe('DemoFeatureLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DemoFeatureLib />);
    expect(baseElement).toBeTruthy();
  });
});
