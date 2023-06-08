import React from 'react';
import { TextInput, View, Text, Alert } from 'react-native';
import CustomButton from '../customButton';
import PostingTextInput from '../postingTextInput';
import { styles } from './styles';
function CreatePost(props) {
  const { postAction } = props;
  return (
    <View style={styles.createPostWrap}>
      <View style={styles.createPostTextWrap}>
        <Text style={styles.createPostText}>Create Post</Text>
      </View>

      <View style={styles.createPostInputWrap}>
        <PostingTextInput />
      </View>

      <View style={styles.createPostButtonWrap}>
        <CustomButton
          alignment="flex-end"
          width={'30%'}
          ctaText="Post"
          onPress={postAction}
        />
      </View>
    </View>
  );
}

export default CreatePost;
