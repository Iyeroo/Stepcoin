import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { BlurView } from '@react-native-community/blur';



import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  ActivityIndicator,
} from 'react-native';

const SignUp = ({onDone}) => {
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false);


  // Signup function
  const handleSignup = async () => {
    

    setLoading(true);

    // Simulate a network request (replace this with your actual signup API)
    setTimeout(() => {
      setLoading(false);
        // Navigate to the next screen or show success message
          onDone?.();
    
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6C63FF" />
      <Image source={require('../assets/icons/arrow.png')} style={styles.inputIcon} />

      <View style={styles.content}>
        <Text style={styles.title}>Join StepCoin Today</Text>
        <Text style={styles.description}>
          Create your account and start tracking your steps
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputBox}>
            <Image source={require('../assets/icons/email.png')} style={styles.inputIcon} />
            <TextInput style={styles.input} placeholder="Email" />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputBox}>
            <Image source={require('../assets/icons/password.png')} style={styles.inputIcon} />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <Image source={require('../assets/icons/hidden.png')} style={styles.inputIcon} />
          </View>
        </View>

        <View style={styles.termsContainer}>
          <CheckBox
            value={agreeToTerms}
            onValueChange={setAgreeToTerms}
            tintColors={{ true: '#6C63FF', false: '#ccc' }}
          />
          <Text>
            I agree to StepCoin{' '}
            <Text style={{ color: '#6C63FF' }}>Terms & Conditions</Text>
          </Text>
        </View>

        <Text style={styles.signInText}>
          Already have an account?{' '}
          <Text style={{ color: '#6C63FF' }}>Sign in</Text>
        </Text>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../assets/icons/google.png')} style={styles.inputIcon} />
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../assets/icons/apple.png')} style={styles.inputIcon} />
            <Text style={styles.buttonText}>Continue with Apple</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignup}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* 🔄 Loading Modal */}
  <Modal transparent={true} visible={loading} animationType="fade">
  <View style={styles.overlay}>
    {/* 🔹 This blurs only the background */}
    <BlurView
      style={StyleSheet.absoluteFill}
      blurType="light"             // Try 'dark' or 'extraLight' for different styles
      blurAmount={1}
      reducedTransparencyFallbackColor="white"
    />
    
    {/* 🔹 This is your clear popup box */}
    <View style={styles.loaderBox}>
      <ActivityIndicator size="large" color="#6C63FF" />
      <Text style={styles.loadingText}>Sign up...</Text>
    </View>
  </View>
</Modal>

    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
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
    color: '#333',
  },
  form: {
    marginTop: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#000',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5ff',
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  input: {
    flex: 1,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#000',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
    justifyContent: 'center',
  },
  divider: {
    flex: 1,
    height: 2,
    backgroundColor: '#f5f5f5ff',
  },
  orText: {
    color: '#000',
    fontWeight: '500',
    marginHorizontal: 10,
  },
  buttonsContainer: {
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#f5f5f5ff',
    marginTop: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    marginLeft: 8,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  signUpButton: {
    backgroundColor: '#6C63FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 25,
  },

  // 🔄 Loading Modal Styles
  overlay: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
loaderBox: {
  width: 250,
  height: 150,
  backgroundColor: '#fff',
  borderRadius: 12,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 8,
  elevation: 5,
},
loadingText: {
  marginTop: 10,
  color: '#333',
  fontWeight: '500',
},

});
