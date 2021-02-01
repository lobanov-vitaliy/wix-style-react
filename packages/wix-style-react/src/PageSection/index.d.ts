import * as React from 'react';

export interface PageSectionProps {
  dataHook?: string;
  className?: string;
  buttonText?: string;
}

export default class PageSection extends React.PureComponent<PageSectionProps>{}
