import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { commonStyles } from '../commonStyles';

function CustomButton(props) {
  const { onPress, ctaText, width, alignment } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        commonStyles.buttonWrap,
        { width, alignSelf: alignment || 'flex-start' },
      ]}>
      <Text style={commonStyles.buttonText}>{ctaText}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
