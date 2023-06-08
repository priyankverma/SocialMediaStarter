import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../constants/colorPallete';
import { fontSize } from '../../../constants/fontSizes';
const WINDOW_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  createPostWrap: {
    height: WINDOW_HEIGHT * 0.23,
    backgroundColor: colors.contentBackgroundColor,
    borderWidth: 2,
    borderColor: colors.borderColor,
    borderRadius: 8,
    paddingHorizontal: 12,
  },

  createPostText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: fontSize.font18,
    lineHeight: 22,
    color: colors.primaryTextColor,
  },
  createPostTextWrap: {
    flex: 0.2,
    justifyContent: 'center',
  },
  createPostInputWrap: {
    flex: 0.4,
    justifyContent: 'center',
  },
  createPostButtonWrap: {
    flex: 0.4,
    justifyContent: 'center',
  },
});
