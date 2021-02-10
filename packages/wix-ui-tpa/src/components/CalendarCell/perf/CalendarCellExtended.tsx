import * as React from 'react';
import { CalendarCell, Times } from '../';
import { st, classes } from './CalendarCellExtended.st.css';

export const CalendarCellPerfer = () => {
  return (
    <CalendarCell
      timeType={Times.pastDate}
      title={'17'}
      className={st(classes.root)}
    />
  );
};
