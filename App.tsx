import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from './android/components/SplashScreen';
import Onboarding from './android/components/Onboarding';
import OnboardingMap from './android/components/OnboardingMap';
import ReportScreen from './android/components/ReportScreen';
import Welcome from './android/components/Welcome';
import SignUp from './android/components/SignUp';
import Gender from './android/components/Gender';
import Lifestyle from './android/components/Lifestyle';
import Agepicker from './android/components/AgeSelector';
import HeightSelector from './android/components/HeightSelector';
import WeightSelector from './android/components/WeightSelector';
import StepSelector from './android/components/StepSelector'; 
function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [step, setStep] = useState<'onboarding' | 'map' | 'report' | 'welcome'| 'signup'|'gender'|'lifestyle'|'agepicker'|'heightselector'|'weightselector'|'stepset'>('onboarding');
  console.log('App render, step =', step);

  useEffect(() => {
    const id = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(id);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  if (step === 'onboarding') {
    return <Onboarding onContinue={() => setStep('map')} />;
  }

  if (step === 'map') {
    return <OnboardingMap onDone={() => setStep('report')} />;
  }

  if (step === 'report') {
    return <ReportScreen onContinue={() => setStep('welcome')} />;
  }

  if (step === 'welcome') {
    return <Welcome onSignUp={()=>setStep('signup')} />;
  }
  if (step === 'signup') {
  return <SignUp onDone={() => setStep('gender')} />; // or setStep('welcome'), depending on next screen
}

if(step==='gender')
  return <Gender onContinue={()=>setStep('lifestyle')}/>;
if(step==='lifestyle')
  return <Lifestyle onContinue={()=>{setStep('agepicker')}}/>;
if(step==='agepicker')
  return <Agepicker onContinue={()=>{setStep('heightselector')}}/>;
if(step==='heightselector')
  return <HeightSelector onContinue={()=>{setStep('weightselector')}}/>;
if(step==='weightselector')
  return <WeightSelector onContinue={()=>{setStep('stepset')}}/>;
if (step === 'stepset') {
  return <StepSelector onContinue={()=>{console.log('StepSelector: Continue pressed')}} />;
}


  // Only render the StepSelector when step === 'stepselector'.
  // Do not navigate away automatically — leave its onContinue to the component or pass a noop.


}




const styles = StyleSheet.create({
 
});

export default App;
