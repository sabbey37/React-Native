import React, {Component} from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

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
            return <AlbumDetail key={album.title} album={album} />
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