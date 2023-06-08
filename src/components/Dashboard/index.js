import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  Pressable,
  Dimensions,
  Modal,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles } from '../CommonComponents/commonStyles';
import CreatePost from '../CommonComponents/createPost';
import Post from '../CommonComponents/post';
import { styles } from './styles';
const WINDOW_HEIGHT = Dimensions.get('window').height;
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
  return (
    <SafeAreaView style={commonStyles.wrapper}>
      <ScrollView style={commonStyles.scrollWrap}>
        <View style={styles.contentWrap}>
          <View style={styles.welcomeNoteView}>
            <Text style={styles.helloText}>Hello Jane</Text>
            <Text style={styles.welcomeMessage}>
              How are you doing today? Would you like to share something with
              the community 🤗
            </Text>
          </View>
          <CreatePost />
          {postsData.map((post, index) => (
            <Post post={post} />
          ))}

          <Button
            title="Goto Login"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Dashboard;
