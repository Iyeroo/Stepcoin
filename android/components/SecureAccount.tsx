import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, TextInput } from "react-native";
const SecureAccount = ({onSave}) => {
    const handleSave = () => {
        onSave?.();
    }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <View style={styles.backButton}>
          <Image source={require('../assets/icons/arrow.png')} style={styles.inputIcon} />
        </View>
        <View style={styles.content}>
                <Text style={styles.title}>Secure Your Account</Text>
                <Text style={styles.description}>
                  Choose a new password for your StepCoin account.Make sure it is secure and easy to remember.
                </Text>
              </View>
         <View style={styles.passwordContainer}>
            <Text style={styles.label}>New Password</Text>
          <View style={styles.inputRow}>
            <Image source={require('../assets/icons/lock.png')} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
            />
            <Image source={require('../assets/icons/hidden.png')} style={styles.inputIcon} />
          </View>
           <Text style={styles.label}>Confirm New Password</Text>
          <View style={styles.inputRow}>

            <Image source={require('../assets/icons/lock.png')} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
            />
            <Image source={require('../assets/icons/hidden.png')} style={styles.inputIcon} />
          </View>
         </View>
        
      </View>
        <TouchableOpacity style={styles.button} onPress={()=>handleSave()}>
            <Text style={styles.buttonText}>Save New Password</Text>
          </TouchableOpacity>
    </View>
  );
};
export default SecureAccount;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between", // OTP top, keypad bottom
  
    paddingTop: 40,
    // paddingVertical: 50,

  },
  inputContainer: {
  
    marginHorizontal: 20,
    
  },
inputIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
 content: {
    marginTop: 20,

  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#5b5858ff',
  },
  passwordContainer: {
    marginTop: 20,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
   
    borderColor: "#ccc",
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
    fontWeight: 500,
  },
  button:{
    backgroundColor: '#6C63FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 25,
    marginBottom: 20,
    marginHorizontal: 20,
    // position: 'absolute',
    // bottom: 0,
  },
  buttonText:{
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
  }

    })
