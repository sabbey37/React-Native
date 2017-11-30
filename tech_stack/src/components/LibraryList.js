import React, { Component } from 'react';
import {ListView} from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2 
        });
    }

    render() {
        return;
    }
}

const mapStateToProps = state => {
    return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);