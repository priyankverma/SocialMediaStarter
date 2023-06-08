import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colorPallete';
export const styles = StyleSheet.create({
  inputWrapper: {
    // paddingHorizontal: 10,
  },
  inlineView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputFeild: {
    height: 43,
    width: '100%',
    borderWidth: 1.5,
    borderColor: colors.borderColor,
    borderRadius: 4,
    marginVertical: 10,
    paddingHorizontal: 10,
    position: 'relative',
    color: colors.primaryTextColor
  },
  rightImage: {
    position: 'absolute',
    top: '51%',
    right: '7%',
    height: 20,
    width: 20,
  },
});
