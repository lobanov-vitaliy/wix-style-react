import * as React from 'react';
import PageSection from '..';
import { PageSectionTestkit } from '../../../testkit';
import { PageSectionTestkit as PageSectionEnzymeTestkit } from '../../../testkit/enzyme';
import { PageSectionTestkit as PageSectionPuppeteerTestkit } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function pageSectionWithMandatoryProps() {
  return <PageSection />;
}

function pageSectionWithAllProps() {
  return (
    <PageSection
      dataHook="dataHook"
      className="className"
      buttonText="buttonText"
    />
  );
}

async function testkits() {
  const testkit = PageSectionTestkit({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = PageSectionEnzymeTestkit({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await PageSectionPuppeteerTestkit({
    dataHook: 'hook',
    page,
  });
}
