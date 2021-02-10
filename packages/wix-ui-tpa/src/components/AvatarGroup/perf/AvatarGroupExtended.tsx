import * as React from 'react';
import { AvatarGroup } from '../';
import { st, classes } from './AvatarGroupExtended.st.css';

const items = [
  { name: 'John', src: 'https://randomuser.me/api/portraits/men/69.jpg' },
];

export const AvatarGroupPerfer = () => {
  return <AvatarGroup items={items} className={st(classes.root)} />;
};
