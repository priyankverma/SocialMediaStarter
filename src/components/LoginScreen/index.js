import React, { useState, useEffect } from 'react';
import { View, Image, SafeAreaView, Dimensions } from 'react-native';
import { commonStyles } from '../CommonComponents/commonStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');
import { styles } from './styles';
import InputModal from '../CommonComponents/inputModal';
import { modalContents } from '../../constants/dataConstants';

function Login({ navigation }) {
  const initialState = {
    loginName: '',
    loginPassword: '',
  };
  const [loginScreenFormData, setLoginScreenFormData] = useState(initialState);
  const [isFormDataValid, setIsFormDataValid] = useState(false);

  let loginModalContent = modalContents.login;
  useEffect(() => {
    loginModalContent.ctaAction = () => {
      setLoginScreenFormData(initialState)
      navigation.navigate('Dashboard');
    };

    loginModalContent.bottmCTAAction = () => {
      navigation.navigate('Register');
    };
  }, []);

  const userInputChange = (value, id) => {
    setLoginScreenFormData({
      ...loginScreenFormData,
      [id]: value,
    });
  };

  useEffect(() => {
    if (loginScreenFormData) {
      const isValid = Object.values(loginScreenFormData).every(
        obj => obj !== '',
      );
      if (isValid) {
        setIsFormDataValid(true);
      } else {
        setIsFormDataValid(false);
      }
    }
  }, [loginScreenFormData]);
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
            accessible={true}
            accessibilityLabel={'Logo'}
            accessibilityRole="image"
            accessibilityHint={'App Logo'}
          />
          <InputModal
            buttonDisabled={!isFormDataValid}
            contentToRender={loginModalContent}
            onChangeText={(value, id) => userInputChange(value, id)}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default Login;
