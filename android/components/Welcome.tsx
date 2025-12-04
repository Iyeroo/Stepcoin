import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Dimensions, Image } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

type WelcomeProps = {
  onGoogleLogin?: () => void;
  onAppleLogin?: () => void;
  onFacebookLogin?: () => void;
  onTwitterLogin?: () => void;
  onSignUp?: () => void;
  onSignIn?: () => void;
  onPrivacyPolicy?: () => void;
  onTermsOfService?: () => void;
};

const Welcome: React.FC<WelcomeProps> = ({
  onGoogleLogin,
  onAppleLogin,
  onFacebookLogin,
  onTwitterLogin,
  onSignUp,
  onSignIn,
  onPrivacyPolicy,
  onTermsOfService,
}) => {
    const handleGoogleLogin = () => {
        if (onGoogleLogin) {
            onGoogleLogin();
        } else {
            console.log('Google login pressed');
        }
    };

    const handleAppleLogin = () => {
        if (onAppleLogin) {
            onAppleLogin();
        } else {
            console.log('Apple login pressed');
        }
    };

    const handleFacebookLogin = () => {
        if (onFacebookLogin) {
            onFacebookLogin();
        } else {
            console.log('Facebook login pressed');
        }
    };

    const handleTwitterLogin = () => {
        if (onTwitterLogin) {
            onTwitterLogin();
        } else {
            console.log('Twitter login pressed');
        }
    };

    const handleSignUp = () => {
        if (onSignUp) {
            onSignUp();
        } else {
            console.log('Sign up pressed');
        }
    };

    const handleSignIn = () => {
        if (onSignIn) {
            onSignIn();
        } else {
            console.log('Sign in pressed');
        }
    };

    const handlePrivacyPolicy = () => {
        if (onPrivacyPolicy) {
            onPrivacyPolicy();
        } else {
            console.log('Privacy Policy pressed');
        }
    };

    const handleTermsOfService = () => {
        if (onTermsOfService) {
            onTermsOfService();
        } else {
            console.log('Terms of Service pressed');
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0F0F12" />
            
            {/* App Logo */}
            <View style={styles.logoContainer}>
                <Image source={require('../assets/foot.png')} style={styles.logo} />
            </View>

            {/* Main Content */}
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Let's Get Started!</Text>
                <Text style={styles.description}>Let's dive in into your account</Text>
            </View>

            {/* Social Login Buttons */}
            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
                    <View style={styles.socialIcon}>
                        <Text style={styles.iconText}>G</Text>
                    </View>
                    <Text style={styles.socialButtonText}>Continue with Google</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.socialButton} onPress={handleAppleLogin}>
                    <View style={styles.socialIcon}>
                        <Text style={styles.iconText}>🍎</Text>
                    </View>
                    <Text style={styles.socialButtonText}>Continue with Apple</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>
                    <View style={styles.socialIcon}>
                        <Text style={styles.iconText}>f</Text>
                    </View>
                    <Text style={styles.socialButtonText}>Continue with Facebook</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.socialButton} onPress={handleTwitterLogin}>
                    <View style={styles.socialIcon}>
                        <Text style={styles.iconText}>🐦</Text>
                    </View>
                    <Text style={styles.socialButtonText}>Continue with Twitter</Text>
                </TouchableOpacity>
            </View>

            {/* Auth Buttons */}
            <View style={styles.authButtonsContainer}>
                <TouchableOpacity style={styles.primaryButton} onPress={handleSignUp}>
                    <Text style={styles.primaryButtonText}>Sign up</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.secondaryButton} onPress={handleSignIn}>
                    <Text style={styles.secondaryButtonText}>Sign in</Text>
                </TouchableOpacity>
            </View>

            {/* Footer Links */}
            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={handlePrivacyPolicy}>
                    <Text style={styles.footerText}>Privacy Policy</Text>
                </TouchableOpacity>
                <Text style={styles.footerSeparator}>-</Text>
                <TouchableOpacity onPress={handleTermsOfService}>
                    <Text style={styles.footerText}>Terms of Service</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F0F12',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logoContainer: {
        marginBottom: 40,
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 80,
        
    },
    contentContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 8,
        textAlign: 'center',
    },
    description: {
        color: '#C9CAD1',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 22,
    },
    socialButtonsContainer: {
        width: '100%',
        marginBottom: 30,
    },
    socialButton: {
        width: '100%',
        height: 56,
        backgroundColor: '#1A1A1F',
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#34343A',
    },
    socialIcon: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    iconText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    socialButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    authButtonsContainer: {
        width: '100%',
        marginBottom: 40,

    },
    primaryButton: {
        width: '100%',
        height: 56,
        backgroundColor: '#7C4DFF',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    },
    secondaryButton: {
        width: '100%',
        height: 56,
        backgroundColor: '#1A1A1F',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#34343A',
    },
    secondaryButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
        color: '#C9CAD1',
        fontSize: 14,
    },
    footerSeparator: {
        color: '#C9CAD1',
        fontSize: 14,
        marginHorizontal: 8,
    },
});
export default Welcome;
