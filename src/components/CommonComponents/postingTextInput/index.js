import React from 'react';
import { Image, TextInput, View } from 'react-native';
import { colors } from '../../../constants/colorPallete';
import { styles } from './styles';

function PostingTextInput(props) {
  return (
    <View style={styles.textInputWrap}>
      <View style={styles.inputRow}>
        <View style={styles.imageWrap}>
          <Image
            source={require('../../../assets/images/callout.png')}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor={colors.secondaryTextColor}
            placeholder="How are you feeling today?"
            style={styles.textInput}
            onChangeText={props.onChangeText}
          />
        </View>
      </View>
    </View>
  );
}

export default PostingTextInput;
