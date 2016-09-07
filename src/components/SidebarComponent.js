import React from 'react';
import data from './data';
import { Link } from 'react-router';
import { Header, Segement, List } from 'stardust';

import '../styles/sidebar.css';

const Sidebar = () => (
  <div>
    <Header as="h3">Sidebar</Header>
      {data.getAll().map((category, index) => (
         <List className='inverted relaxed divided' key={index}>
          <Link to={`${category.url}`}>
            <List.Item header={`${category.name}`}/>
          </Link>
        </List>
      ))}
  </div>
);

const SidebarComponent = ({ content, sidebar }) => (
  <div className="Sidebar">
      {sidebar || <Sidebar />}
  </div>
);

export default SidebarComponent;
