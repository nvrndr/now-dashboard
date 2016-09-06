import React from 'react';
import {Link} from 'react-router';
import { Header, Button, Checkbox, Form, Icon, Input } from 'stardust';

class TestMochaPage extends React.Component {

    constructor(props) {
        super(props);
    }

    submitForm(event) {
        event.preventDefault();
        console.log("submit clicked");
    }

    render() {
        return (
            <div>
                <Header as="h1">Mocha</Header>
                <Form onSubmit={this.props.submitForm}>
                    <Form.Field>
                        <label>First Name</label>
                        <Input placeholder="First Name" />
                    </Form.Field>
                    <Form.Field>
                    <label>Last Name</label>
                        <Input placeholder="Last Name" />
                        </Form.Field>
                    <Form.Field>
                        <Checkbox label="I agree to the Terms and Conditions" />
                    </Form.Field>
                    <Button type="submit">Submit</Button>
                    <Link to="dashboard"> 
                        <a className="primary login-button">
                            <Icon name="chevron circle left" /> Back
                        </a>
                    </Link>
                </Form>
            </div>
            );
    }
}

TestMochaPage.propTypes = {
    submitForm: React.PropTypes.func
};

export default TestMochaPage;