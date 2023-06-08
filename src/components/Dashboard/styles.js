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
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
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
    height: WINDOW_HEIGHT,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4);',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
 
});
