// custom post component that displays the post card with all information mapped via props
import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles';

function Post(props) {
  const {
    userImage,
    userName,
    timePassed,
    moodEmoji,
    postText,
    commentNumber,
    edited,
  } = props?.post;
  return (
    <View style={styles.postWrap}>
      <View style={styles.authorDetailsWrap}>
        <View style={styles.userImageWrap}>
          <Image
            style={styles.userImage}
            source={userImage}
            accessible={true}
            accessibilityHint="Post's Author Image"
            accessibilityLabel="Post's Author Image"
            accessibilityRole="image"
          />
        </View>
        <View style={styles.userDetails}>
          <Text
            style={styles.userName}
            accessible={true}
            accessibilityHint="Post's Author Name"
            accessibilityLabel="Post's Author Name"
            accessibilityRole="text">
            {userName}
          </Text>
          <Text
            style={styles.timeDetails}
            accessible={true}
            accessibilityHint="Post's Time"
            accessibilityLabel="Post's Time"
            accessibilityRole="text">
            {timePassed} {edited && '• Edited'}
          </Text>
        </View>
        <View style={styles.userImageWrap}>
          <Image
            style={styles.optionWrap}
            source={require('../../../assets/images/moreOptions.png')}
            accessible={true}
            accessibilityHint="More options"
            accessibilityLabel="More options"
            accessibilityRole="image"
          />
        </View>
      </View>
      <View style={styles.postDetails}>
        <View style={styles.leftImage}>
          <Image
            source={moodEmoji}
            accessible={true}
            accessibilityHint="Author's post Mood"
            accessibilityLabel="Author's post Mood"
            accessibilityRole="image"
          />
        </View>
        <View style={styles.postTextWrap}>
          <Text
            style={styles.post}
            accessible={true}
            accessibilityHint="Post's Content"
            accessibilityLabel="Post's Content"
            accessibilityRole="text">
            {postText}
          </Text>
        </View>
      </View>
      <View style={styles.commentSection}>
        <Image source={require('../../../assets/images/comment.png')} />
        <Text
          style={styles.timeDetails}
          accessible={true}
          accessibilityHint="Number of comments"
          accessibilityLabel="Number of comments on post"
          accessibilityRole="text">
          {commentNumber} comments
        </Text>
      </View>
    </View>
  );
}

export default Post;
