import {StyleSheet} from 'react-native';
import STYLES from '../../constants/Styles';

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: STYLES.$PADDINGS.MEDIUM,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: STYLES.$COLORS.TERTIARY,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: STYLES.$AVATAR.BORDER_RADIUS,
    marginRight: STYLES.$MARGINS.LARGE,
    marginLeft: STYLES.$MARGINS.SMALL,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: STYLES.$FONT_SIZES.XL,
    fontFamily: STYLES.$FONT_TYPES.BOLD,
    color: STYLES.$COLORS.PRIMARY,
    width: 200,
  },
  newCountContainer: {
    height: 20,
    backgroundColor: STYLES.$COLORS.SECONDARY,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: STYLES.$MARGINS.SMALL,
  },
  newCount: {
    color: STYLES.$COLORS.TERTIARY,
    fontSize: STYLES.$FONT_SIZES.SMALL,
    fontFamily: STYLES.$FONT_TYPES.SEMI_BOLD,
    padding: 5,
  },
});
