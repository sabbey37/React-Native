import React from 'react';
import { Text } from 'react-native';

const Header = () => {
    const {textStyle} = styles;
    return <Text style={textStyle}>Albums!</Text>
};

const styles = {
    textStyle: {
        fontSize: 20
    }
};

// Make component available to other parts of application
// Only root component uses 'AppRegistry'

export default Header;