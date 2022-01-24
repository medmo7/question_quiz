import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from './src/util/constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeView from './src/views/HomeView';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
    <SafeAreaView style={styles.statusBar}/>
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <HomeView/>
    </SafeAreaView>
    </SafeAreaProvider>
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
