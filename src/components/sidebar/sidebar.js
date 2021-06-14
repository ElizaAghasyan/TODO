import React from 'react';
import { SidebarData } from './sidebarData';
import { AiFillCheckCircle } from "react-icons/ai";import './sidebar.css';

const SidebarItems = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarHeader'>
                <AiFillCheckCircle className='icon' />
                <h1 className='title'>My Tasks</h1>
            </div>
            <ul>
                {SidebarData.map(el => {
                  return  (
                    <div className='items' key={el.id}>
                        <div className='itemIcons'>{el.icon}</div>
                        <li className='itemTitle'>
                            <a href='#'>
                                {el.title}
                            </a>
                        </li>
                    </div>
                  )
                })}
            </ul>
        </div>
    );
}

export default SidebarItems;
