import React from 'react';
import LiteratureListItem from '../LiteratureListItem/LiteratureListItem';
import literatures from '../../assets/literatures';
// import styles from './LiteratureList.module.scss';
import { shortid } from 'shortid';

const LiteratureList = () => {
    const listItems = literatures.map(item => <LiteratureListItem key={shortid()}  {...item} />)

    return (
        <ol>
            {listItems}
        </ol>
    )
}

export default LiteratureList;