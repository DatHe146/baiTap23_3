import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function App() {
  const [step, setStep] = useState(0);
  const [mobile, setMobile] = useState('');
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const renderSplash = () => (
    <View style={[styles.page, styles.greenBg]}>
      <View style={styles.logoBox}> 
        <Text style={styles.logoIcon}>🥕</Text>
        <Text style={styles.logoTitle}>nectar</Text>
      </View>
      <Text style={styles.logoSubtitle}>online groceries</Text>
      <TouchableOpacity style={styles.button} onPress={() => setStep(1)}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );

  const renderWelcome = () => (
    <ImageBackground
      source={require('../../assets/images/splash-icon.png')}
      style={styles.page}
      imageStyle={{ opacity: 0.2 }}
    >
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>Welcome to our store</Text>
        <Text style={styles.welcomeSubtitle}>We make your groceries shopping faster and easier</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => setStep(2)}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ImageBackground>
  );

  const renderAuthChoice = () => (
    <View style={[styles.page, { backgroundColor: '#fff' }]}> 
      <Text style={styles.title2}>Get your groceries with nectar</Text>
      <Text style={styles.subtitle2}>Or connect with social media</Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#4285F4' }]} onPress={() => setStep(6)}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#3b5998' }]} onPress={() => setStep(6)}>
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#2fc286' }]} onPress={() => setStep(3)}>
        <Text style={styles.buttonText}>Use Mobile</Text>
      </TouchableOpacity>
    </View>
  );

  const renderEnterMobile = () => (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.page, { backgroundColor: '#fff' }]}
    >
      <Text style={styles.title2}>Enter your mobile number</Text>
      <Text style={styles.label}>Mobile Number</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.countryCode}>+880</Text>
        <TextInput
          style={styles.input}
          value={mobile}
          keyboardType="phone-pad"
          placeholder="1XXXXXXXXX"
          onChangeText={setMobile}
        />
      </View>
      <TouchableOpacity
        style={[styles.button, { opacity: mobile.length < 9 ? 0.45 : 1 }]}
        disabled={mobile.length < 9}
        onPress={() => setStep(4)}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );

  const renderOtp = () => (
    <View style={[styles.page, { backgroundColor: '#fff' }]}> 
      <Text style={styles.title2}>Enter your 4-digit code</Text>
      <Text style={styles.label}>Code</Text>
      <TextInput
        style={styles.inputSingle}
        value={code}
        placeholder="----"
        keyboardType="number-pad"
        maxLength={4}
        onChangeText={setCode}
      />
      <TouchableOpacity onPress={() => setStep(3)}>
        <Text style={styles.resendText}>Resend Code</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { opacity: code.length < 4 ? 0.45 : 1 }]}
        disabled={code.length < 4}
        onPress={() => setStep(5)}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );

  const renderLocation = () => (
    <View style={[styles.page, { backgroundColor: '#fff' }]}> 
      <Text style={styles.title2}>Select Your Location</Text>
      <Text style={styles.label}>Your Zone</Text>
      <View style={styles.box}><Text>Banarsee</Text></View>
      <Text style={styles.label}>Your Area</Text>
      <View style={styles.box}><Text>Types of your area</Text></View>
      <TouchableOpacity style={styles.button} onPress={() => setStep(6)}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );

  const renderLogin = () => (
    <View style={[styles.page, { backgroundColor: '#fff' }]}> 
      <Text style={styles.title2}>Login</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.inputSingle} value={email} onChangeText={setEmail} placeholder="your@example.com" />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.inputSingle}
        value={password}
        onChangeText={setPassword}
        placeholder="********"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={() => alert('Logged in!')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setStep(7)}>
        <Text style={styles.switchText}>Don't have an account? Signup</Text>
      </TouchableOpacity>
    </View>
  );

  const renderSignup = () => (
    <View style={[styles.page, { backgroundColor: '#fff' }]}> 
      <Text style={styles.title2}>Sign Up</Text>
      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.inputSingle} placeholder="Afsar Hossen Shuvo" />
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.inputSingle} value={email} onChangeText={setEmail} placeholder="imshuvo97@gmail.com" />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.inputSingle} secureTextEntry placeholder="••••••••" onChangeText={setPassword} />
      <TouchableOpacity style={styles.button} onPress={() => alert('Signed up!')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setStep(6)}>
        <Text style={styles.switchText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );

  const renderScreen = () => {
    switch (step) {
      case 0:
        return renderSplash();
      case 1:
        return renderWelcome();
      case 2:
        return renderAuthChoice();
      case 3:
        return renderEnterMobile();
      case 4:
        return renderOtp();
      case 5:
        return renderLocation();
      case 6:
        return renderLogin();
      case 7:
        return renderSignup();
      default:
        return renderSplash();
    }
  };

  return <View style={styles.wrapper}>{renderScreen()}</View>;
}

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  page: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  greenBg: {
    backgroundColor: '#4db76f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  logoIcon: { fontSize: 24, marginRight: 10 },
  logoTitle: { fontSize: 32, fontWeight: 'bold', textTransform: 'lowercase' },
  logoSubtitle: { color: '#fff', fontSize: 18, marginBottom: 32 },
  welcomeContainer: { marginBottom: 40 },
  welcomeTitle: { fontSize: 32, fontWeight: 'bold', marginBottom: 10 },
  welcomeSubtitle: { fontSize: 16, color: '#4b4b4b', marginBottom: 20 },
  title2: { fontSize: 26, fontWeight: '700' as const, marginBottom: 18 },
  subtitle2: { fontSize: 16, color: '#4b4b4b', marginBottom: 16 },
  label: { fontSize: 14, color: '#666', marginBottom: 6 },
  button: {
    marginTop: 20,
    backgroundColor: '#2fc286',
    paddingVertical: 14,
    borderRadius: 14,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700' as const,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 12,
  },
  countryCode: { fontSize: 16, fontWeight: '600' },
  input: {
    flex: 1,
    height: 46,
    paddingHorizontal: 10,
  },
  inputSingle: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 46,
    width: '100%',
    marginBottom: 12,
  },
  resendText: { color: '#2fc286', marginTop: 10, fontWeight: '600' },
  switchText: { marginTop: 18, color: '#2fc286', textAlign: 'center', fontWeight: '600' },
  box: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    height: 46,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});