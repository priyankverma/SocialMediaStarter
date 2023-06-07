import React, { useState } from 'react';
import { View, Image, SafeAreaView, Dimensions } from 'react-native';
import { commonStyles } from '../CommonComponents/commonStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');
import { styles } from './styles';
import InputModal from '../CommonComponents/inputModal';

function Login({ navigation }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const modalContents = {
    login: {
      messageLine: 'WELCOME BACK',
      instruction: 'Log into your account',
      inputComponent: [
        {
          title: 'Email or Username',
          placeholder: 'Enter your email',
          type: 'input',
          onChange: e => {
            setUserName(e);
          },
          value: userName,
        },
        {
          title: 'Password',
          placeholder: 'Choose a preferred password',
          type: 'password',
          inlineText: 'Forgot password?',
          onChange: e => setPassword(e),
          value: password,
        },
      ],
      ctaText: 'Login now',
      ctaAction: () => navigation.navigate('Dashboard'),
      bottomQuestion: 'Not registered yet?',
      bottomQuestionCTA: 'Register →',
      bottmCTAAction: () => alert('Take me to Register'),
    },
  };
  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <KeyboardAwareScrollView extraHeight={180} enableOnAndroid>
        <View
          style={[
            {
              height: WINDOW_HEIGHT,
              width: WINDOW_WIDTH,
            },
            commonStyles.contentWrap,
          ]}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
          <InputModal
            contentToRender={modalContents}
            // userName={}
            // userPassword={}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default Login;
