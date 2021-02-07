import React from 'react';
import { snap, story, visualize } from 'storybook-snapper';
import PageSection from '../PageSection';
import { RTLWrapper } from '../../../stories/utils/RTLWrapper';
import { Button } from 'wix-style-react';
import PageHeader from '../../PageHeader';

const PageSectionContainer = ({ rtl = false, children }) => (
  <div style={{ width: '700px', border: '1px solid' }}>
    <RTLWrapper rtl={rtl}>{children}</RTLWrapper>
  </div>
);

const commonProps = {
  title: 'title',
};

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'title',
        props: {},
      },
      {
        it: 'subtitle',
        props: { subtitle: 'subtitle' },
      },
      {
        it: 'actionsBar',
        props: { actionsBar: <Button>Action</Button> },
      },
      {
        it: 'showDivider',
        props: { showDivider: true },
      },
      {
        it: 'ellipsis',
        props: {
          title:
            'PageSection title - very very long very very long very very long very very long very very long',
          subtitle:
            'PageSection subtitle - very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long',
        },
      },
      {
        it: 'all props',
        props: {
          actionsBar: <Button>Action</Button>,
          showDivider: true,
          title:
            'PageSection title - very very long very very long very very long very very long very very long',
          subtitle:
            'PageSection subtitle - very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long',
        },
      },
    ],
  },
];

export const runTests = () => {
  visualize(PageSection.displayName, () => {
    tests.forEach(({ describe, its }) => {
      story(describe, () => {
        its.map(({ it, props }) =>
          snap(it, () => (
            <PageSectionContainer>
              <PageSection {...commonProps} {...props} />
            </PageSectionContainer>
          )),
        );
      });
    });
  });
};
