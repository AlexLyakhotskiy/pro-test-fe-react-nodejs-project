import React from 'react';
import { Link } from "react-router-dom";
// import styles from './ResoursesListItem.modules.scss';

const ResourcesListItem = ({to, text}) => {
    return (
         
         <li>
             <Link to={{ pathname: to}} target="_blank">{text} </Link>
         </li>
    )
}

export default ResourcesListItem;