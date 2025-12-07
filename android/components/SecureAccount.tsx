import React from "react";
import { View, Text, TouchableOpacity, StyleSheet,Image,TextInput } from "react-native";
 export default function ForgotPassword({onSendOtp}) {
    const handleContinue = () => {
        onSendOtp?.();
      };
    return(
        <View style={styles.container}>
  <Image source={require('../assets/icons/arrow.png')} style={styles.inputIcon} />
      
          
  <View style={styles.content}>
        <Text style={styles.title}>Forgot Your Password?</Text>
       <Text style={styles.description}>
                Enter the email associated with your Trackfit account below.We Will send you a one-time passcode (OTP) to reset your password
            </Text>
      </View>
<Text style={styles.subtitle}>Your Registered Email</Text>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/icons/email.png')} style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#C9CAD1"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => handleContinue()}>
                <Text style={styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
       padding:20,
          backgroundColor: 'white',
    },
     inputIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  content: {
    marginTop: 20,
    marginBottom: 24,

  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 24,
        paddingHorizontal: 16,
        height: 56,
        backgroundColor: '#F5F5F5',
        borderRadius: 25,
    },

    input: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },

    title:{
        fontSize:24,
        fontWeight:'bold',
       
        marginBottom:24,
    },
    button: {
        width: '100%',
        height: 56,
        backgroundColor: '#7B2CFF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
})
