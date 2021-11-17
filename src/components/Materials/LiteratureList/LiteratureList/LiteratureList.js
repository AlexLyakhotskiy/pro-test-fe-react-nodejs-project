import React from 'react';
import LiteratureListItem from '../LiteratureListItem/LiteratureListItem';
import literatures from '../../assets/literatures';
import styles from './LiteratureList.module.scss';

const LiteratureList = () => {
  const listItems = literatures.map((item, i) => (
    <LiteratureListItem key={i} {...item} />
  ));

  return <ol className={styles.list}>{listItems}</ol>;
};

export default LiteratureList;
