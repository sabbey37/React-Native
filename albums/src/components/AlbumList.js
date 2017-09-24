import React, {Component} from 'react';
import { Text, View } from 'react-native';

// State === internal record keeping
// Props === passing down info from parent to child

class AlbumList extends Component {
    state = {albums:[]};

    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => response.json())
        .then((resp) => {
            this.setState({albums: resp});
        })
    }

    renderAlbums() {
        return this.state.albums.map((album) => {
            return <Text key={album.title}>{album.title}</Text>
        })
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;