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
});
