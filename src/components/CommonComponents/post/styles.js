import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../constants/colorPallete';
import { fontSize } from '../../../constants/fontSizes';
const WINDOW_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  postWrap: {
    flex: 1,
    backgroundColor: colors.contentBackgroundColor,
    borderWidth: 2,
    borderColor: colors.borderColor,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginTop: 12,
  },
  authorDetailsWrap: {
    flex: 0.3,
    minHeight: WINDOW_HEIGHT * 0.08,
    flexDirection: 'row',
  },
  userImageWrap: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userDetails: {
    flex: 0.6,
    justifyContent: 'center',
    paddingLeft: '3%',
  },
  userName: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: fontSize.font16,
    lineHeight: 19,
    color: colors.primaryTextColor,
  },
  timeDetails: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: fontSize.font14,
    lineHeight: 17,
    color: colors.secondaryTextColor,
    paddingTop: 4,
  },
  optionWrap: {
    width: 17,
    height: 3,
    alignSelf: 'flex-end',
  },

  userImage: {
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
  postDetails: {
    flex: 0.45,
    backgroundColor: colors.appBackgroundColor,
    flexDirection: 'row',
    paddingVertical: '4%',
    borderRadius: 8,
  },
  post: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: fontSize.font14,
    lineHeight: 20,
    color: colors.secondaryTextColor,
  },
  leftImage: {
    flex: 0.15,
    alignItems: 'center',
  },
  postTextWrap: {
    flex: 0.85,
    paddingHorizontal: '3%',
    justifyContent: 'center',
  },
  commentSection: {
    minHeight: WINDOW_HEIGHT * 0.06,

    flex: 0.25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
