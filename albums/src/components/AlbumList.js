import React, {Component} from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component {
    state = {albums:[]};

    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => response.json())
        .then((resp) => {
            this.setState({albums: resp});
        })
    }

    render() {
        console.log(this.state);
        return (
            <View>
                <Text>Album List!!!!</Text>
            </View>
        );
    }
}

export default AlbumList;