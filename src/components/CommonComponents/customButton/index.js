import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { commonStyles } from '../commonStyles';

function CustomButton(props) {
  const { onPress, ctaText, width, alignment, disabled, hint } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        commonStyles.buttonWrap,
        { width, alignSelf: alignment || 'flex-start' },
        disabled && commonStyles.disabled,
      ]}
      accessible={true}
      accessibilityLabel={ctaText}
      accessibilityRole="button"
      accessibilityHint={hint}>
      <Text style={commonStyles.buttonText}>{ctaText}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
