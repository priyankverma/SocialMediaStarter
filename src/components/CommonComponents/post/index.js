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
    edited
  } = props?.post;
  return (
    <View style={styles.postWrap}>
      <View style={styles.authorDetailsWrap}>
        <View style={styles.userImageWrap}>
          <Image style={styles.userImage} source={userImage} />
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.timeDetails}>{timePassed} {edited && '• Edited'}</Text>
        </View>
        <View style={styles.userImageWrap}>
          <Image
            style={styles.optionWrap}
            source={require('../../../assets/images/moreOptions.png')}
          />
        </View>
      </View>
      <View style={styles.postDetails}>
        <View style={styles.leftImage}>
          <Image source={moodEmoji} />
        </View>
        <View style={styles.postTextWrap}>
          <Text style={styles.post}>{postText}</Text>
        </View>
      </View>
      <View style={styles.commentSection}>
        <Image source={require('../../../assets/images/comment.png')} />
        <Text style={styles.timeDetails}>{commentNumber} comments</Text>
      </View>
    </View>
  );
}

export default Post;
