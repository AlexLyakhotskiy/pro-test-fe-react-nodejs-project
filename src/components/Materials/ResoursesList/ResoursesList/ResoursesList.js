import React from 'react';
import ResourcesListItem from '../ResoursesListItem/ResoursesListItem';
import resourses from '../../assets/resourses';
// import styles from './ResoursesList.modules.scss';
import { shortid } from 'shortid';

const ResourcesList = () => {
    const listItems = resourses.map(item => <ResourcesListItem key={shortid()} {...item} />)
    
    return (
        <ol>
            {listItems}
        </ol>
    )
}

export default ResourcesList;