import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyB-sjS4GdGGUhDSgOYyERZ-P4igrJwS2CA",
            authDomain: "manager-67d3e.firebaseapp.com",
            databaseURL: "https://manager-67d3e.firebaseio.com",
            projectId: "manager-67d3e",
            storageBucket: "",
            messagingSenderId: "18225082598"
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;