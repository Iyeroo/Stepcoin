import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
const PasswordSuccessful = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/man-holding-phone.png')} style={styles.successIcon} />
        <View style={styles.content}>
        <Text style={styles.title}>You're all Set!</Text>
      <Text style={styles.description}>Your Password has been Changed Successfully</Text>
        </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Go to HomePage</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PasswordSuccessful;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
 content: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
  button:{
    backgroundColor: '#6C63FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 25,
    marginBottom: 20,
    marginHorizontal: 20,
    width: "100%",
    position: 'absolute',
    bottom: 20,
  },
  buttonText:{
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
  }
})