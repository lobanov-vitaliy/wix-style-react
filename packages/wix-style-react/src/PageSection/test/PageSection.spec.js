import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import PageSection from '../PageSection';
import { pageSectionPrivateDriverFactory } from './PageSection.private.uni.driver';

describe(PageSection.displayName, () => {
  const render = createRendererWithUniDriver(pageSectionPrivateDriverFactory);

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<PageSection />);

    expect(await driver.exists()).toBe(true);
  });

  it('should increment', async () => {
    const { driver } = render(<PageSection />);

    await driver.clickButtonTimes(2);

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<PageSection buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
