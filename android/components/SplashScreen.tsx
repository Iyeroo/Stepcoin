import React from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions, ActivityIndicator, Image } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

/**
 * Full-screen TrackFit splash screen with purple background
 * Features: white footprints, TrackFit branding, and loading spinner
 */
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#6C63FF"
        hidden={false}
        translucent={true}
      />

      {/* Footprint icons */}
      <View style={styles.footprintContainer}>
        <Image source={require('../assets/foot.png')} style={styles.footprint} />
        
      </View>

      {/* TrackFit branding */}
      <Text style={styles.title}>TrackFit</Text>

      {/* Loading spinner */}
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#6C63FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footprintContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  footprint: {
    marginHorizontal: 8,
    width: 100,
    height: 100,
  },
  footprintRight: {
    transform: [{ translateY: -10 }],
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: '600',
    fontFamily: 'System',
    marginBottom: 60,
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 100,
  },
});

export default SplashScreen;
