import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';
import * as examples from './examples';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import PageSection from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: PageSection,
  componentPath: '..',

  componentProps: {},

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${PageSection.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This line here should briefly describe component in just a sentence or two. It should be short and easy to read.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text:
              '`<PageSection/>` can render title, subtitle and actions bar.',
            source: examples.simpleUsage,
          }),

          example({
            title: 'Ellipsis',
            text:
              'Hidden text appears on hover in a tooltip when title or subtitle are too long.',
            source: examples.ellipsis,
          }),

          example({
            title: 'Divider',
            text:
              'In order to render a divider, set `showDivider` prop to true',
            source: examples.divider,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
