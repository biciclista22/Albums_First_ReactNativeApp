// import a library to help create a component
import React from 'react';
// import ReactNative from 'react-native';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a compoenent
const App = () => {
  return (
    // looks like HTML in JS
    // not writing HTML; writing a dialect of JS - JSX
    // same semantics of HTML (opening and closing tags), the name of the tags is used within a set of brackets <>
    // content is placed between the opening and closing tag
    // NESTING - place one tag inside another
    // when place text inside a tag, call it nesting content within a tag
    <View style={{ flex:1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

// render it to the device
AppRegistry.registerComponent('albums', () => App); // only have one component right now, APP, so will return that one
// in any RN app we create, we need to register at least one component to the application
// you are about to render an application called albums
// needs to match the product name -- 'albums'; then pass a function that will return the compenent to render
// for every react native app we create, we need to pass in at least one component
