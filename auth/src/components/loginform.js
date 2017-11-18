import React, {Component} from 'react';
import firebase from 'firebase';
import {Button, Card, CardSection, Input} from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    };

    onButtonPress() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({error: "Authentication Failed."});
                    })
            });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email" 
                        value={ this.state.email }
                        onChangeText = { email => this.setState({email}) }/>
                </CardSection>
                <Text>
                    {this.state.error}
                </Text>
                <CardSection>
                    <Input 
                        secureTextEntry
                        placeholder="password"
                        label={ "Password" }
                        value={ this.state.password }
                        onChangeText = {password => this.setState({ password })}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={ this.onButtonPress }>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;