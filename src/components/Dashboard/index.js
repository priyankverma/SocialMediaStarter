import React, { useState, useEffect } from 'react';
import { View, Text, Modal, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles } from '../CommonComponents/commonStyles';
import CreatePost from '../CommonComponents/createPost';
import InputModal from '../CommonComponents/inputModal';
import Post from '../CommonComponents/post';
import { styles } from './styles';
import { BlurView } from '@react-native-community/blur';
import { modalContents } from '../../constants/dataConstants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/slices/authSlice';
import CustomButton from '../CommonComponents/customButton';
import { showMessage } from 'react-native-flash-message';

function Dashboard({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const { posts } = useSelector(state => state.addPostSlice);
  const { isLoggedIn, user } = useSelector(state => state.authSlice);
  const dispatch = useDispatch();

  let loginModalContent = modalContents.login;
  let registerModalContent = modalContents.register;

  const handleLogin = () => {
    showMessage({
      message: 'Logged In',
      description: 'You have been Logged in successfully',
      type: 'success',
    });
    dispatch(login('Jane'));
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    loginModalContent.ctaAction = () => {
      handleLogin();
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
              accessibilityRole="text">
              Hello {isLoggedIn ? user : 'User'}
            </Text>
            <Text
              style={styles.welcomeMessage}
              accessible={true}
              accessibilityHint="Greeting text with instruction"
              accessibilityLabel="Greeting text with instruction"
              accessibilityRole="text">
              How are you doing today? Would you like to share something with
              the community 🤗
            </Text>
          </View>
          <CreatePost
            postAction={() => {
              setModalVisible(true);
            }}
          />
          {posts &&
            posts.map(post => (
              <Post key={`${post.userName} ${post.timePassed}`} post={post} />
            ))}
        </View>
        {isLoggedIn && (
          <View style={styles.logoutWrap}>
            <CustomButton
              alignment="center"
              width={'80%'}
              ctaText="Logout"
              onPress={() => {
                showMessage({
                  message: 'Logged Out',
                  description: 'You have been logged out successfully',
                  type: 'success',
                });
                handleLogout();
              }}
              hint="Tap to logout"
            />
          </View>
        )}
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
