import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Animated } from 'react-native';

const Lifestyle = ({onContinue}) => {
  const [selected, setSelected] = useState(null);
  const handleContinue = () => 
  {
  onContinue?.();
    // Handle continue action, e.g., navigate to the next screen
  };

  return (
    <View style={styles.container}>
      {/* Top Navigation + Progress */}
      <View style={styles.topBar}>
        <Image source={require('../assets/icons/arrow.png')} style={styles.arrowIcon} />
        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <Animated.View style={[styles.progressFill, { width: '34%' }]} />
          </View>
          <Text style={styles.stepText}>2/6</Text>
        </View>
      </View>

      {/* Heading */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Do you live <Text style={styles.highlight}>Sedentary</Text> Lifestyle?
        </Text>
        <Text style={styles.subtitle}>Let's start by understanding you.</Text>
      </View>

      {/* Illustration */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Lifestyle.png')}
          style={{ width: 250, height: 250, resizeMode: 'contain' }}
        />
      </View>

      {/* Circular Yes / No Buttons */}
      <View style={styles.circleRow}>
        <TouchableOpacity
          onPress={() => setSelected('no')}
          activeOpacity={0.8}
          style={[
            styles.circleButton,
            selected === 'no' && styles.selectedCircle,
          ]}
        >
          <Text style={[styles.circleText, selected === 'no' && styles.selectedText]}>No</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelected('yes')}
          activeOpacity={0.8}
          style={[
            styles.circleButton,
            selected === 'yes' && styles.selectedCircle,
          ]}
        >
          <Text style={[styles.circleText, selected === 'yes' && styles.selectedText]}>Yes</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity activeOpacity={0.8} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} style={styles.primaryButton}>
          <Text style={styles.primaryText} onPress={handleContinue}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 24,
    height: 24,
    tintColor: '#000',
  },
  progressContainer: {
    flex: 1,
    alignItems: 'center',
  },
  progressBackground: {
    height: 6,
    width: 150,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    marginBottom: 4,
  },
  progressFill: {
    height: 6,
    backgroundColor: '#7C4DFF',
    borderRadius: 3,
  },
  stepText: {
    fontSize: 12,
    color: '#555',
  },
  textContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
  highlight: {
    color: '#7C4DFF',
  },
  subtitle: {
    color: '#666',
    marginTop: 6,
    fontSize: 14,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 40,
  },

  /** 🟣 Circular Buttons **/
  circleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 40,
    gap: 40,
  },
  circleButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EFE9FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    fontSize: 18,
    color: '#7C7C7C',
    fontWeight: '600',
  },
  selectedCircle: {
    backgroundColor: '#7C4DFF',
  },
  selectedText: {
    color: '#FFF',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginTop: 'auto',
  },
  skipButton: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  skipText: {
    color: '#7C7C7C',
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

export default Lifestyle;
