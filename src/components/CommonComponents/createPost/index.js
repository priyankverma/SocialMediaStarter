import React, { useState } from 'react';
import { TextInput, View, Text, Alert } from 'react-native';
import CustomButton from '../customButton';
import PostingTextInput from '../postingTextInput';
import { styles } from './styles';
function CreatePost(props) {
  const [postText, setPostText] = useState('');
  const { postAction } = props;
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
          onPress={postAction}
          hint='Post your created post'
        />
      </View>
    </View>
  );
}

export default CreatePost;
