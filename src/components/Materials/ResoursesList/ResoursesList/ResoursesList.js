import React from 'react';
import ResourcesListItem from '../ResoursesListItem/ResoursesListItem';
import resourses from '../../assets/resourses';
import styles from './ResoursesList.module.scss';

const ResourcesList = () => {
  const listItems = resourses.map((item, i) => (
    <ResourcesListItem key={i} {...item} />
  ));

  return <ol className={styles.list}>{listItems}</ol>;
};

export default ResourcesList;
