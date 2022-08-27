import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Crousal from './Src/Crousal';
import FlashList from './Src/FlashList';
import HorizontalList from './Src/HorizontalList';
import VerticalList from './Src/VerticalList';
import ProgressBar from './Src/progressBar';
import FlotingImage from './Src/flotingImage';
import tokyoghoul from './Src/flotingImage/image/naruto.png'
export default function App() {
  return (
  //  <Crousal/>
  //  <HorizontalList/>
  // <VerticalList/>
  <View style={{justifyContent: "center",flex:1}}>
    <View style={{marginHorizontal:'10%'}}>
  <ProgressBar totalTime={30} progressTime={29} height={10}/>
  </View>
  <FlotingImage image={tokyoghoul}/>
  </View>
  // <FlashList/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
