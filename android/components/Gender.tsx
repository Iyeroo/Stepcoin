import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Animated } from 'react-native';

const Gender = ({onContinue}) => {
  const [selectedGender, setSelectedGender] = useState('');
  const progress = new Animated.Value(0.17); // 1/6 step (as per your image)
const handleContinue = () => {  
    onContinue?.();
    };
  

  return (
    <View style={styles.container}>
      {/* Top Navigation + Progress */}
      <View style={styles.topBar}>
        <Image source={require('../assets/icons/arrow.png')} style={styles.arrowIcon} />
        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <Animated.View style={[styles.progressFill, { width: '17%' }]} />
          </View>
          <Text style={styles.stepText}>1/6</Text>
        </View>
      </View>

      {/* Heading */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Select Your <Text style={styles.highlight}>Gender</Text>
        </Text>
        <Text style={styles.subtitle}>Let's start by understanding you.</Text>
      </View>

      {/* Gender Options */}
      <View style={styles.genderRow}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.genderCard,
            selectedGender === 'male' && styles.selectedCard,
          ]}
          onPress={() => setSelectedGender('male')}>
          <Image
            source={require('../assets/Male.png')}
            style={styles.genderImage}
          />
          <Text style={styles.genderText}>Man</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.genderCard,
            selectedGender === 'female' && styles.selectedCard,
          ]}
          onPress={() => setSelectedGender('female')}>
          <Image
            source={require('../assets/Female.png')}
            style={styles.genderImage}
          />
          <Text style={styles.genderText}>Woman</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity activeOpacity={0.8} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleContinue} activeOpacity={0.9} style={styles.primaryButton}>
          <Text style={styles.primaryText}>Continue</Text>
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
  },
  highlight: {
    color: '#7C4DFF',
  },
  subtitle: {
    color: '#666',
    marginTop: 6,
    fontSize: 14,
  },
  genderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    maxHeight:420,
  },
  genderCard: {
    alignItems: 'center',
    borderRadius: 16,
    paddingVertical: 10,
    width: 160,
    height: "100%",
  },
  selectedCard: {
    backgroundColor: '#EFE9FF',
    borderWidth: 2,
    borderColor: '#7C4DFF',
  },
  genderImage: {
    width: "100%",
    height: "100%",

  },
  genderText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 30,
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  marginBottom: 30,
    marginTop: 'auto',
  },
  skipButton: {
    flex: 1,
    height:     48,
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

export default Gender;
