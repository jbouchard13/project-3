import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

export class ProfileInfo extends Component {
    render() {
        return (
            <div>
                <Form className="form">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>First Name</Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Last Name</Form.Label>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Location</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>About Me</Form.Label>
                    </Form.Group>

                </Form>
            </div>
        )
    }
}

export default ProfileInfo;