import React, { PropTypes } from 'react';
import { Header, Container } from 'stardust';
import SidebarComponent from './SidebarComponent';


const App = (props) => {
  return (
    <div>
    <SidebarComponent />
    <Container text>
    <Header as="h1">Now Dashboard</Header>
      {props.children}
    </Container>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
