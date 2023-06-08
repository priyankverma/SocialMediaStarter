// register screen using the register template from input modal
import React, { useState, useEffect } from 'react';
import { View, Image, SafeAreaView, Dimensions } from 'react-native';
import { commonStyles } from '../CommonComponents/commonStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');
import { styles } from '../LoginScreen/styles';
import InputModal from '../CommonComponents/inputModal';
import { modalContents } from '../../constants/dataConstants';

function Register({ navigation }) {
  const [registerScreenFormData, setRegisterScreenFormData] = useState({
    registerEmail: '',
    registerName: '',
    registerPassword: '',
  });
  const [isFormDataValid, setIsFormDataValid] = useState(false);

  let registerModalContent = modalContents.register;
  useEffect(() => {
    /**
     * creating and passing in all the custom actions needed in the register template
     */
    registerModalContent.ctaAction = () => {
      navigation.navigate('Login');
    };

    registerModalContent.bottmCTAAction = () => {
      navigation.navigate('Login');
    };
  }, []);

  /**
   * Function sets the state dynamically on the basis of the id given initially, names as id
   * @param  {string} value - user keyboard input value
   * @param  {string} id - name of the textinput feild for setting the state dynamically
   */
  const userInputChange = (value, id) => {
    setRegisterScreenFormData({
      ...registerScreenFormData,
      [id]: value,
    });
  };

  useEffect(() => {
    if (registerScreenFormData) {
      // check if all the feilds have some values (non-empty)
      const isValid = Object.values(registerScreenFormData).every(
        obj => obj !== '',
      );
      if (isValid) {
        setIsFormDataValid(true);
      } else {
        setIsFormDataValid(false);
      }
    }
  }, [registerScreenFormData]);
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
            buttonDisabled={!isFormDataValid}
            contentToRender={registerModalContent}
            onChangeText={(value, id) => userInputChange(value, id)}
            registerModal
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default Register;
