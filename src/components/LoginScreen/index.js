import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { commonStyles } from '../CommonComponents/commonStyles';

function Login({ navigation }) {
  return (
    <View style={commonStyles.wrapper}>
      <Text>Login</Text>
      <Image style={{height: 40, width:40 }}  source={require('../../assets/images/logo.png')}/>
    </View>
  );
}

export default Login;
