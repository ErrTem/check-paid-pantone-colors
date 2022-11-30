import React from 'react';
import s from './Info.module.css';
import { colors } from '../../assets/colors';

const Info = () => {
  let items = Object.entries(colors).map(([name, color]) => {
    return (
      <div style={{ backgroundColor: `${color}` }} className={s.item} key={name}>
        <div className={s.name}>{name}</div>
      </div>
    );
  });

  return <div className={s.main}>{items}</div>;
};

export default Info;
