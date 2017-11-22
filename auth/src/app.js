import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/loginform';

class App extends Component {
    state = {
        loggedIn: false
    };
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAnTfbr_gV6r3IMFvl9qHrGU-J9b_OpFIc",
            authDomain: "auth-cf0ba.firebaseapp.com",
            databaseURL: "https://auth-cf0ba.firebaseio.com",
            projectId: "auth-cf0ba",
            storageBucket: "auth-cf0ba.appspot.com",
            messagingSenderId: "139029549482"
        })

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        )
    }
}

export default App;