import {Platform, StyleSheet} from 'react-native';
import Layout from '../../constants/Layout';
import STYLES from '../../constants/Styles';

export const styles = StyleSheet.create({
  textInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    borderRadius: 30,
    width: Layout.window.width - 75,
  },
  inputBoxWithShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 5,
    margin: 5,
  },
  addMoreButton: {
    padding: 10,
    paddingLeft: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiButton: {
    padding: 10,
  },
  emoji: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  inputParent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingLeft: 0,
    // width: Layout.window.width - 180,
    // width:'65%', // when both emoji and updload icon is there
    // width: '90%', // when none of emoji and updload icon is there
    width: '70%',
  },
  input: {
    flexGrow: 1,
    fontSize: STYLES.$FONT_SIZES.XL,
    fontFamily: STYLES.$FONT_TYPES.MEDIUM,
    maxHeight: 120,
    padding: 0,
    marginBottom: 2,
    overflow: 'scroll',
  },
  sendButton: {
    height: 50,
    width: 50,
    backgroundColor: STYLES.$COLORS.SECONDARY,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    marginLeft: 5,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emojiPicker: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    padding: 10,
  },

  centeredView: {
    flexGrow: 1,
    marginTop: 20,
  },
  modalViewParent: {
    position: 'absolute',
    bottom: 80,
    flexGrow: 1,
    width: Layout.window.width,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: 5,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  alignModalElements: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    flexWrap: 'wrap',
    gap: 30,
    marginHorizontal: 40,
  },
  cameraStyle: {backgroundColor: '#06C3AF', padding: 15, borderRadius: 50},
  imageStyle: {backgroundColor: '#555feb', padding: 15, borderRadius: 50},
  docStyle: {backgroundColor: '#e55e69', padding: 15, borderRadius: 50},
  pollStyle: {backgroundColor: '#4098f7', padding: 15, borderRadius: 50},
  replyBoxParent: {
    backgroundColor: 'white',
    borderBottom: 'none',
    borderBottomWidth: 0,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderColor: STYLES.$COLORS.MSG,
    overflow: 'hidden',
  },
  replyBox: {marginHorizontal: 10, marginTop: 10},
  linkPreviewBox: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    width: '40%',
  },
  linkPreviewTitle: {
    color: 'black',
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.BOLD,
    overflow: 'hidden',
  },
  alignRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  linkPreviewIcon: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    marginLeft: 10,
  },
  linkPreviewMainBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  linkPreviewMessageText: {
    fontSize: STYLES.$FONT_SIZES.SMALL,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    color: STYLES.$COLORS.PRIMARY,
    maxWidth: Layout.window.width - 150,
    // textAlign: 'left',
  },
  replyBoxClose: {
    position: 'absolute',
    right: 5,
    top: 5,
    backgroundColor: STYLES.$COLORS.SELECTED_BLUE,
    padding: 5,
    borderRadius: 10,
  },
  replyCloseImg: {height: 5, width: 5, resizeMode: 'contain'},
  iconText: {
    fontSize: STYLES.$FONT_SIZES.SMALL,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    color: STYLES.$COLORS.PRIMARY,
  },
  iconContainer: {alignItems: 'center', gap: 5},
  avatar: {
    width: 30,
    height: 30,
    borderRadius: STYLES.$AVATAR.BORDER_RADIUS,
    marginRight: STYLES.$MARGINS.SMALL,
  },
  infoContainer: {
    flex: 1,
    paddingVertical: 15,
    borderBottomColor: STYLES.$COLORS.MSG,
  },
  title: {
    fontSize: STYLES.$FONT_SIZES.LARGE,
    fontFamily: STYLES.$FONT_TYPES.MEDIUM,
    color: STYLES.$COLORS.PRIMARY,
  },
  subTitle: {
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    color: STYLES.$COLORS.MSG,
  },
  messageCustomTitle: {
    color: STYLES.$COLORS.SECONDARY,
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
  },
  taggableUsersBox: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: '100%',
    position: 'relative',
    backgroundColor: 'white',
    borderColor: STYLES.$COLORS.MSG,
    overflow: 'hidden',
  },
  taggableUserView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  linkPreviewImageView: {
    marginLeft: 10,
    marginTop: 10,
    width: '30%',
  },
});
