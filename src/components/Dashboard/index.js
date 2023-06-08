import React, { useState, useEffect } from 'react';
import { View, Text, Button, Modal, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles } from '../CommonComponents/commonStyles';
import CreatePost from '../CommonComponents/createPost';
import InputModal from '../CommonComponents/inputModal';
import Post from '../CommonComponents/post';
import { styles } from './styles';
import { BlurView } from '@react-native-community/blur';
import { modalContents } from '../../constants/dataConstants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const postsData = [
  {
    userImage: require('../../assets/images/user1.png'),
    userName: 'Theresa Webb',
    timePassed: '5mins ago',
    moodEmoji: require('../../assets/images/wave.png'),
    postText:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentNumber: '24',
    edited: false,
  },
  {
    userImage: require('../../assets/images/user2.png'),
    userName: 'Marvin McKinney',
    timePassed: '8mins ago',
    moodEmoji: require('../../assets/images/sad.png'),
    postText:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentNumber: '24',
    edited: true,
  },
  {
    userImage: require('../../assets/images/user1.png'),
    userName: 'Lonie Cole',
    timePassed: '11mins ago',
    moodEmoji: require('../../assets/images/sad.png'),
    postText:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    commentNumber: '2',
    edited: false,
  },
];

function Dashboard({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  let loginModalContent = modalContents.login;
  let registerModalContent = modalContents.register;
  useEffect(() => {
    loginModalContent.ctaAction = () => {
      setModalVisible(false);
    };
    registerModalContent.ctaAction = () => {
      setModalVisible(true);
      setRegisterModal(false);
    };
    registerModalContent.bottmCTAAction = () => {
      setModalVisible(false);
      setRegisterModal(true);
    };

    loginModalContent.bottmCTAAction = () => {
      setModalVisible(false);
      setRegisterModal(true);
    };
  }, []);

  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <ScrollView style={commonStyles.scrollWrap}>
        <View style={styles.contentWrap}>
          <View style={styles.welcomeNoteView}>
            <Text
              style={styles.helloText}
              accessible={true}
              accessibilityHint="Greeting text"
              accessibilityLabel="Hello Message"
              accessibilityRole="text"
             >
              Hello Jane
            </Text>
            <Text
              style={styles.welcomeMessage}
              accessible={true}
              accessibilityHint="Greeting text with instruction"
              accessibilityLabel="Greeting text with instruction"
              accessibilityRole="text"
             >
              How are you doing today? Would you like to share something with
              the community 🤗
            </Text>
          </View>
          <CreatePost postAction={() => setModalVisible(true)} />
          {postsData.map((post, index) => (
            <Post post={post} />
          ))}

          <Button
            title="Goto Login"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        style={{ backgroundColor: 'red', flex: 1 }}
        visible={modalVisible || registerModal}>
        <BlurView
          style={styles.absolute}
          blurType="dark"
          blurAmount={1}
          reducedTransparencyFallbackColor="white"
        />

        <KeyboardAwareScrollView extraHeight={180} enableOnAndroid>
          {modalVisible && (
            <View style={styles.centeredView}>
              <InputModal
                contentToRender={loginModalContent}
                bottomSheet={true}
                onChangeText={(e, id) => console.log({ id, e })}
                toggleModal={() => setModalVisible(false)}
              />
            </View>
          )}
          {registerModal && (
            <View style={styles.centeredView}>
              <InputModal
                registerModal={true}
                contentToRender={registerModalContent}
                bottomSheet={true}
                onChangeText={(e, id) => console.log({ id, e })}
                toggleModal={() => setRegisterModal(false)}
              />
            </View>
          )}
        </KeyboardAwareScrollView>
      </Modal>
    </SafeAreaView>
  );
}

export default Dashboard;
