import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colorPallete';
import { fontSize } from '../../constants/fontSizes';

export const commonStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.appBackgroundColor,
    flex: 1,
  },
  scrollWrap:{
    paddingHorizontal: 16,
    paddingTop: '5%',
  },
  contentWrap:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16

  },

  loginModal: {
    height: '60%',
    maxHeight: 411,
    width: '100%',
    backgroundColor: colors.contentBackgroundColor,
    borderRadius: 8,
    overflow: 'hidden',
    flex: 1
  },
  modalHeadingWrap: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageLineText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: fontSize.font14,
    color: colors.secondaryTextColor,
    lineHeight: 17,
  },
  instructionText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: fontSize.font18,
    color: colors.white,
    lineHeight: 22,
  },

  modalContentWrap: {
    flex: 0.75,
    paddingHorizontal: 10,
  },
  buttonWrap: {
    height: '70%',
    maxHeight: 43,
    width: '100%',
    backgroundColor: colors.buttonBackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 10,
    marginTop: 5

  },
  disabled:{
    opacity: 0.5
  },
  buttonText:{
    color: colors.white,
    fontWeight: '500',
    fontSize: fontSize.font16,
    lineHeight: 19,
  },
  bottomCTA:{
    paddingTop: 5,
    fontWeight: '500',
    fontSize:fontSize.font14,
    lineHeight: 17,
    color: colors.secondaryTextColor,

  },
  crossWrap:{
    position: 'absolute',
    top: '5%',
    right: '3%'
  }
});
