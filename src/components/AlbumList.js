import React, { Component } from 'react';
// don't want to destructure, because when we write JSX, it is turned to React
// you have a trick to list the specific lib you want to pull from React
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  state = { albums: [] };

  componentWillMount() {
    // console.log('compoenent will mount in AlbumList');
    // debugger; // this will create a breakpoint and will let you go to sources, and by using the console, can investigate data and variables
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
    // passing object of albums; now albums will not be an empty []
  }
  // with extends, stating we want to borrow base functionality from Component -- from React

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album}/>
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
      {this.renderAlbums()}
      </ScrollView>
    );
  }
} // no ; classes don't need it

export default AlbumList;
