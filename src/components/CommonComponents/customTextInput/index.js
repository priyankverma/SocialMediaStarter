import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { colors } from '../../../constants/colorPallete';
import { commonStyles } from '../commonStyles';

function CustomTextInput(props) {
  const { onChangeText, item } = props;
  const [showPassword, setShowPassword] = useState(false);

  const { title, placeholder, inlineText, value, id } = item;
  return (
    <View>
      <View style={styles.inlineView}>
        <Text
          style={[commonStyles.bottomCTA, { color: colors.primaryTextColor }]}
          accessible={true}
          accessibilityLabel={title}
          accessibilityRole="text"
          accessibilityHint={`${title} Input Feild Label`}>
          {title}
        </Text>
        {inlineText && (
          <Text
            style={commonStyles.bottomCTA}
            accessible={true}
            accessibilityLabel={`${inlineText} Inline link`}
            accessibilityRole="link"
            accessibilityHint={`${inlineText} link`}>
            {inlineText}
          </Text>
        )}
      </View>

      <TextInput
        placeholderTextColor={colors.secondaryTextColor}
        placeholder={placeholder}
        style={[styles.inputFeild, inlineText && styles.extraPadding]}
        onChangeText={e => onChangeText(e, id)}
        value={value}
        secureTextEntry={inlineText && !showPassword ? true : false}
        accessible={true}
        accessibilityLabel={`${title} Label`}
        accessibilityRole="text"
        accessibilityHint={`${title} Input Feild`}
      />
      {inlineText && (
        <TouchableOpacity
          style={styles.rightImage}
          onPress={() => setShowPassword(!showPassword)}
          accessible={true}
          accessibilityLabel={`${title} Inline tappable`}
          accessibilityRole="imagebutton"
          accessibilityHint={`${title} Imagebutton`}>
          <Image source={require('../../../assets/images/eye.png')} />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default CustomTextInput;
