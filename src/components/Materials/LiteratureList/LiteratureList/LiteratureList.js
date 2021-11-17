import React from 'react';
import LiteratureListItem from '../LiteratureListItem/LiteratureListItem';
import literatures from '../../assets/literatures';
// import styles from './LiteratureList.module.scss';

const LiteratureList = () => {
  const listItems = literatures.map((item, index) => (
    <LiteratureListItem key={index} {...item} />
  ));

  return <ol>{listItems}</ol>;
};

export default LiteratureList;
