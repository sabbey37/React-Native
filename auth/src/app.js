import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/loginform';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAnTfbr_gV6r3IMFvl9qHrGU-J9b_OpFIc",
            authDomain: "auth-cf0ba.firebaseapp.com",
            databaseURL: "https://auth-cf0ba.firebaseio.com",
            projectId: "auth-cf0ba",
            storageBucket: "auth-cf0ba.appspot.com",
            messagingSenderId: "139029549482"
        })
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