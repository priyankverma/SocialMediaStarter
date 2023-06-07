import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../../constants/colorPallete';
import { commonStyles } from '../commonStyles';
import CustomTextInput from '../customTextInput';

function InputModal(props) {
  const content = props?.contentToRender;
  const loginContent = content.login;
  return (
    <View style={commonStyles.loginModal}>
      <View style={commonStyles.modalHeadingWrap}>
        <Text style={commonStyles.messageLineText}>
          {loginContent.messageLine}
        </Text>
        <Text style={commonStyles.instructionText}>
          {loginContent.instruction}
        </Text>
      </View>
      <View style={commonStyles.modalContentWrap}>
        {content.login.inputComponent.map((item, index) => (
          <CustomTextInput key={item.title} item={item} />
        ))}
        <TouchableOpacity
          onPress={() => loginContent.ctaAction()}
          style={commonStyles.buttonWrap}>
          <Text style={commonStyles.buttonText}>{loginContent.ctaText}</Text>
        </TouchableOpacity>

        <Text style={commonStyles.bottomCTA}>
          {loginContent.bottomQuestion}{' '}
          <Text onPress={()=> loginContent.bottmCTAAction()}style={{ color: colors.primaryTextColor }}>
            {loginContent.bottomQuestionCTA}
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default InputModal;
