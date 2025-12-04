import React from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, TouchableOpacity } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

type ReportScreenProps = {
  onBack?: () => void;
  onSkip?: () => void;
  onContinue?: () => void;
};

const ReportScreen: React.FC<ReportScreenProps> = ({ onBack, onSkip, onContinue }) => {
  function handleSkip() {
    if (onSkip) {
      onSkip();
      return;
    }
    console.log('ReportScreen skipped');
  }

  function handleContinue() {
    if (onContinue) {
      onContinue();
      return;
    }
    console.log('ReportScreen continue');
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6C63FF" />

      <View style={styles.heroContainer}>
        {/* Empty hero container for consistency with other onboarding screens */}
      </View>

      <View style={styles.sheet}>
        <Text style={styles.title}>Gain Step Insights with Detailed Reports</Text>
        <Text style={styles.description}>
          Stay informed about your step count, distance traveled, and calories burned with TrackFit's comprehensive reports.
        </Text>
        
        {/* Page Control */}
        <View style={styles.pageControl}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>

        {/* Actions */}
        <View style={styles.actionsRow}>
          <TouchableOpacity onPress={handleSkip} activeOpacity={0.8} style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleContinue} activeOpacity={0.9} style={styles.primaryButton}>
            <Text style={styles.primaryText}>Let's Get Started</Text>
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

export default ReportScreen;
