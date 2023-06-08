import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  Pressable,
  Dimensions,
  Modal
} from 'react-native';
import { commonStyles } from '../CommonComponents/commonStyles';
import InputModal from '../CommonComponents/inputModal';
import { styles } from './styles';
const windowHeight = Dimensions.get('window').height;
const modalHeight = windowHeight * 0.5;
function Dashboard({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
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
      ctaAction: () => setModalVisible(false),
      bottomQuestion: 'Not registered yet?',
      bottomQuestionCTA: 'Register →',
      bottmCTAAction: () => alert('Take me to Register'),
    },
  };
  return (
    <View style={commonStyles.wrapper}>
      <Text style={{ color: 'white' }}>Dashboard</Text>
      <Button title="Goto Login" onPress={() => navigation.navigate('Login')} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // presentationStyle='overFullScreen'
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={[styles.modalItem, {height: modalHeight}]}></View>
          <InputModal
            contentToRender={modalContents}
            // userName={}
            // userPassword={}
          />
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
}

export default Dashboard;
