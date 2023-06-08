import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { colors } from '../../../constants/colorPallete';
import { commonStyles } from '../commonStyles';
import CustomButton from '../customButton';
import CustomTextInput from '../customTextInput';

function InputModal(props) {
  const {
    contentToRender,
    bottomSheet,
    toggleModal,
    onChangeText,
    registerModal,
    buttonDisabled,
  } = props;
  return (
    <View
      style={
        registerModal
          ? [commonStyles.loginModal,
             { height: '70%', maxHeight: 500 }
            ]
          : commonStyles.loginModal
      }>
      <View style={commonStyles.modalHeadingWrap}>
        <Text style={commonStyles.messageLineText}>
          {contentToRender.messageLine}
        </Text>
        <Text style={commonStyles.instructionText}>
          {contentToRender.instruction}
        </Text>
      </View>
      <View style={commonStyles.modalContentWrap}>
        {contentToRender.inputComponent.map((item, index) => (
          <CustomTextInput
            key={item.title}
            item={item}
            onChangeText={onChangeText}
          />
        ))}

          <CustomButton
            disabled={buttonDisabled}
            width={'100%'}
            ctaText={contentToRender.ctaText}
            onPress={() => contentToRender.ctaAction()}
          />


        <Text style={commonStyles.bottomCTA}>
          {contentToRender.bottomQuestion}{' '}
          <Text
            onPress={() => contentToRender.bottmCTAAction()}
            style={{ color: colors.primaryTextColor }}>
            {contentToRender.bottomQuestionCTA}
          </Text>
        </Text>
      </View>
      {bottomSheet && (
        <View style={commonStyles.crossWrap}>
          <TouchableOpacity onPress={toggleModal}>
            <Image source={require('../../../assets/images/cross.png')} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default InputModal;
