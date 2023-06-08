import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colorPallete';
export const styles = StyleSheet.create({
  textInputWrap: {
    flex: 1,
  },
  inputRow: {
    backgroundColor: colors.textInputBackground,
    flexDirection: 'row',
    borderRadius: 8,
    flex: 1,
    marginVertical: '2%',
  },
  imageWrap: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 0.85,
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: colors.textInputBackground,
    paddingLeft: '2%',
    color: colors.primaryTextColor,
  },
});
