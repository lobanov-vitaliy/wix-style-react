import React, { useEffect } from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import Carousel from '..';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { carouselUniDriverFactory } from '../Carousel.uni.driver';
import { storySettings } from '../docs/storySettings';
import eventually from 'wix-eventually';

const sampleImages = [
  {
    src:
      'https://cdn.pixabay.com/photo/2017/10/05/22/34/rubber-duck-2821371_1280.jpg',
  },
  {
    src:
      'https://cdn.pixabay.com/photo/2017/06/28/10/53/board-2450236_1280.jpg',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775_1280.jpg',
  },
];

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'Display images',
        props: {
          images: sampleImages,
        },
      },
      {
        it: 'Display custom nodes',
        props: {
          children: [
            <span key={1}>First</span>,
            <span key={2}>Second</span>,
            <span key={3}>Third</span>,
          ],
        },
      },
    ],
  },
  {
    describe: 'Button Skin',
    its: [
      {
        it: 'Display inverted buttons',
        props: {
          images: sampleImages,
          buttonSkin: 'inverted',
        },
      },
    ],
  },
  {
    describe: 'Variable width',
    its: [
      {
        it: 'Display item with variable width ',
        props: {
          variableWidth: true,
          children: [
            <div key={1}>
              <div
                style={{ width: '300px', height: '100px', background: 'red' }}
              />
            </div>,
            <div key={2}>
              <div
                style={{ width: '200px', height: '100px', background: 'green' }}
              />
            </div>,
            <div key={3}>
              <div
                style={{ width: '350px', height: '100px', background: 'blue' }}
              />
            </div>,
          ],
        },
      },
    ],
  },
];

const createDriver = () =>
  uniTestkitFactoryCreator(carouselUniDriverFactory)({
    wrapper: document.body,
    dataHook: storySettings.dataHook,
  });

const checkIsLoading = async done => {
  const driver = createDriver();
  await eventually(async () => {
    expect(await driver.isLoading()).toBe(false);
  });
  done();
};

const CarouselWrapper = ({ componentDidMount, done, ...props }) => {
  useEffect(componentDidMount);

  return <Carousel {...props} />;
};

visualize('Carousel', () => {
  tests.forEach(({ describe, its }) => {
    its.forEach(({ it, props }) => {
      story(describe, () => {
        snap(it, done => (
          <div style={{ maxWidth: '550px' }}>
            <CarouselWrapper
              {...props}
              dataHook={storySettings.dataHook}
              componentDidMount={() => {
                checkIsLoading(done);
              }}
            />
          </div>
        ));
      });
    });
  });
});