import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from './src/util/constants';

import HomeView from './src/views/HomeView';

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.statusBar}/>
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <HomeView/>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar:{
    flex:0,
    backgroundColor: COLORS.background
  }
});
