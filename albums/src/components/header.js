import React from 'react';
// View is like wrapper or DIV
import { Text, View } from 'react-native';

const Header = () => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums!</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8'
    },
    textStyle: {
        fontSize: 20
    }
};

// Make component available to other parts of application
// Only root component uses 'AppRegistry'

export default Header;