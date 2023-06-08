import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { colors } from '../../../constants/colorPallete';
import { commonStyles } from '../commonStyles';

function CustomTextInput(props) {
  const { onChangeText, item } = props;

  const { title, placeholder, type, inlineText, value, id } = item;
  return (
    <View>
      <View style={styles.inlineView}>
        <Text
          style={[commonStyles.bottomCTA, { color: colors.primaryTextColor }]}>
          {title}
        </Text>
        {inlineText && <Text style={commonStyles.bottomCTA}>{inlineText}</Text>}
      </View>

      <TextInput
        placeholderTextColor={colors.secondaryTextColor}
        placeholder={placeholder}
        style={styles.inputFeild}
        onChangeText={e => onChangeText(e, id)}
        value={value}
        secureTextEntry={inlineText ? true : false}></TextInput>
      {inlineText && (
        <Image
          style={styles.rightImage}
          source={require('../../../assets/images/eye.png')}
        />
      )}
    </View>
  );
}

export default CustomTextInput;
