import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { Header } from 'stardust';

const App = (props) => {
  return (
    <div>
    <Header as='h1'>MySale Now</Header>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
