import {StyleSheet} from 'react-native';
import COLORS from '../../../../../../constants/theme';
import FONTS from '../../../../../../constants/theme';
import SIZES from '../../../../../../constants/theme';

export default StyleSheet.create({
  information_product_bottom: {
    padding: 20,
    paddingTop: 5,
  },
  title: {
    color: COLORS.COLORS.black,
    fontSize: SIZES.SIZES.h4,
    fontWeight: FONTS.FONTS.body4_bold.fontWeight,
    fontFamily: FONTS.FONTS.h4.fontFamily,
  },
});
