import React from 'react';
import {Link} from 'react-router';
import { Message } from 'stardust';
import '../styles/dashboard-page.css';

// Since this component is simple and static, there's no parent container for it.
const DashboardPage = () => {
  return (
    <div>
      <h2 className="alt-header">Dashboard</h2>
      <Message>
        <Message.Header>Unit Test Prototype</Message.Header>
        <Message.List>
          <Message.Item><Link to="testMocha">Mocha</Link> </Message.Item>
          <Message.Item><Link to="testTape">Tape</Link> </Message.Item>
        </Message.List>
      </Message>
      <p>
        <Link to="/badlink">Click this bad link</Link> to see the 404 page.
      </p>
    </div>
  );
};

export default DashboardPage;
