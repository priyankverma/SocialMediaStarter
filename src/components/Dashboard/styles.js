import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colorPallete';
import { fontSize } from '../../constants/fontSizes';
const WINDOW_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  contentWrap: {
    paddingBottom: '25%',
  },
  welcomeNoteView: {
    paddingVertical: 5,
  },
  helloText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: fontSize.font28,
    lineHeight: 34,
    color: colors.primaryTextColor,
  },
  welcomeMessage: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: fontSize.font16,
    lineHeight: 24,
    color: colors.secondaryTextColor,
    paddingVertical: 8,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'red',
  },
  modalItem: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
});
