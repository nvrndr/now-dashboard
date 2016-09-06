import React from 'react';
import {Link} from 'react-router';
import { Header, Button, Checkbox, Form, Icon } from 'stardust';

const TestMochaPage = () => {
  return (
    <div>
        <Header as="h1">Mocha</Header>
          <Form>
            <Form.Field>
              <label>First Name</label>
              <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
            <Link to="dashboard"> 
            <Button className="primary login-button">
                 <Icon name="chevron circle left" /> Back
            </Button>
            </Link>
          </Form>
    </div>
  );
};

export default TestMochaPage;
