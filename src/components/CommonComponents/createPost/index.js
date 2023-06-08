import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../customButton';
import PostingTextInput from '../postingTextInput';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/slices/addPostSlice';

function CreatePost(props) {
  const [postText, setPostText] = useState('');
  const { postAction } = props;
  const dispatch = useDispatch();

  const handleAddPost = () => {
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
        <PostingTextInput onChangeText={value => setPostText(value)} />
      </View>

      <View style={styles.createPostButtonWrap}>
        <CustomButton
          disabled={postText ? false : true}
          alignment="flex-end"
          width={'30%'}
          ctaText="Post"
          onPress={() => {
            handleAddPost();
            // postAction();
          }}
          hint="Post your created post"
        />
      </View>
    </View>
  );
}

export default CreatePost;
