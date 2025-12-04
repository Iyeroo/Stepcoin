import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

type OnboardingMapProps = {
  onDone?: () => void;
};

const OnboardingMap: React.FC<OnboardingMapProps> = ({ onDone }) => {
  function handleSkip() {
    if (onDone) {
      onDone();
      return;
    }
    console.log('OnboardingMap skipped');
  }

  function handleContinue() {
    if (onDone) {
      onDone();
      return;
    }
    console.log('OnboardingMap continue');
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6C63FF" />

      <View style={styles.heroContainer}>
        <ImageBackground
          source={require('../assets/image.jpg')}
          style={styles.heroImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.sheet}>
        <Text style={styles.title}>Discover Your Route with Live maps</Text>
        <Text style={styles.description}>
          Experience the thrill of tracking your steps in real-time with TrackFit's live maps. TrackFit keeps
          you connected to your journey.
        </Text>
        
        {/* Page Control */}
        <View style={styles.pageControl}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>

        {/* Actions */}
        <View style={styles.actionsRow}>
          <TouchableOpacity onPress={handleSkip} activeOpacity={0.8} style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleContinue} activeOpacity={0.9} style={styles.primaryButton}>
            <Text style={styles.primaryText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#6C63FF',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  heroContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingTop: 48,
  },
  heroImage: {
    width: screenWidth * 0.82,
    height: screenHeight * 0.6,
    borderRadius: 36,
    overflow: 'hidden',
  },
  sheet: {
    width: '100%',
    backgroundColor: '#0F0F12',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 100,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    color: '#C9CAD1',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  pageControl: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#34343A',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#7C4DFF',
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 50,
  },
  skipButton: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#34343A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  skipText: {
    color: '#C9CAD1',
    fontSize: 16,
    fontWeight: '600',
  },
  primaryButton: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#7C4DFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  primaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default OnboardingMap;


