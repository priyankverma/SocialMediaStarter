//custom component to create posts
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../customButton';
import PostingTextInput from '../postingTextInput';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../../redux/slices/addPostSlice';
import { showMessage } from 'react-native-flash-message';

function CreatePost(props) {
  const [postText, setPostText] = useState('');
  const isLoggedIn = useSelector(state => state.authSlice?.isLoggedIn);

  const { postAction } = props;
  const dispatch = useDispatch();

  /**
   * function handles the action to perform on tapping POST button
   * if the user is logged in, the post is added, otherwise login modal is opened
   */
  const handleAddPost = () => {
    if (!isLoggedIn) postAction();
    else {
      let payload = {
        userImage: require('../../../assets/images/user1.png'),
        userName: 'Jane',
        timePassed: 'a few mins ago',
        moodEmoji: require('../../../assets/images/wave.png'),
        postText: postText,
        commentNumber: '0',
        edited: false,
      };

      dispatch(addPost(payload));
      showMessage({
        message: 'Post Added ',
        description: 'Your Post has been added successfully',
        type: 'success',
      });
      setPostText('');
    }
  };

  return (
    <View style={styles.createPostWrap}>
      <View style={styles.createPostTextWrap}>
        <Text
          accessible={true}
          accessibilityHint="Create Posts by typing in text box"
          accessibilityLabel="Create Post"
          accessibilityRole="header"
          style={styles.createPostText}>
          Create Post
        </Text>
      </View>

      <View style={styles.createPostInputWrap}>
        <PostingTextInput
          value={postText}
          onChangeText={value => setPostText(value)}
        />
      </View>

      <View style={styles.createPostButtonWrap}>
        <CustomButton
          disabled={postText ? false : true}
          alignment="flex-end"
          width={'30%'}
          ctaText="Post"
          onPress={() => {
            handleAddPost();
          }}
          hint="Post your created post"
        />
      </View>
    </View>
  );
}

export default CreatePost;
