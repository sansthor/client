import React from 'react';
import { FormGroup } from '@material-ui/core';
import { Button } from 'reactstrap';

function RegisSeller() {
    return (
        <div>
            <Form>
                <h1>Talent Registration</h1>
                <FormGroup>
                    <Input
                        type="text"
                        name="skills"
                        id="skills"
                        placeholder="Ex: HTML, CSS, JS"
                    />
                    <Label for="skills">Skills *</Label>
                </FormGroup>
                <FormGroup>
                    <Input
                        type="text"
                        name="link"
                        id="link"
                        placeholder="Link Portofolio"
                    />
                    <Label for="link">Link Portofolio *</Label>
                </FormGroup>
                <FormGroup>
                    <Input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Phone Number"
                    />
                    <Label for="phone">Phone Number *</Label>
                </FormGroup>
                <Button>Register</Button>
            </Form>
        </div>
    );
}

export default RegisSeller;
