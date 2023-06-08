import React, { useState, useEffect } from 'react';
import { View, Image, SafeAreaView, Dimensions } from 'react-native';
import { commonStyles } from '../CommonComponents/commonStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');
import { styles } from './styles';
import InputModal from '../CommonComponents/inputModal';
import { modalContents } from '../../constants/dataConstants';

function Login({ navigation }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  let loginModalContent = modalContents.login;
  useEffect(() => {
    loginModalContent.ctaAction = () => {
      navigation.navigate('Dashboard');
    };

    loginModalContent.bottmCTAAction = () => {
      // setModalVisible(false);
      // setRegisterModal(true);
    };
  }, []);
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
          <InputModal contentToRender={loginModalContent} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default Login;
