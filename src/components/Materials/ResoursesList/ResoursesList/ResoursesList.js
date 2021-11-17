import React from 'react';
import ResourcesListItem from '../ResoursesListItem/ResoursesListItem';
import resourses from '../../assets/resourses';
// import styles from './ResoursesList.modules.scss';

const ResourcesList = () => {
  const listItems = resourses.map((item, index) => (
    <ResourcesListItem key={index} {...item} />
  ));

  return <ol>{listItems}</ol>;
};

export default ResourcesList;
