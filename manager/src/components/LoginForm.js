import React, { Componenet } from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Componenet {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@gmail.com"
                    />
                </CardSection>
                <CardSection></CardSection>
                <CardSection></CardSection>
            </Card>
        );
    }
}

export default LoginForm;
