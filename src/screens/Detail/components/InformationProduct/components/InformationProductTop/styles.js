import {StyleSheet} from 'react-native';
import COLORS from '../../../../../../constants/theme';
import FONTS from '../../../../../../constants/theme';
import SIZES from '../../../../../../constants/theme';

export default StyleSheet.create({
  information_product_top: {
    padding: 20,
  },
  information_product_top_title: {
    color: COLORS.COLORS.black,
    fontSize: SIZES.SIZES.h1,
    fontWeight: FONTS.FONTS.body4_bold.fontWeight,
    fontFamily: FONTS.FONTS.h4.fontFamily,
  },
  information_product_top_rate: {
    flexDirection: 'row',
  },
  text_color_grey: {
    color: COLORS.COLORS.gray,
  },
  information_product_top_image_rate_margin: {
    marginLeft: 50,
    marginRight: 10,
    width: 16,
    height: 16,
  },
  price_colors: {
    marginTop: 10,
  },
  price: {
    fontSize: SIZES.SIZES.h2,
    fontWeight: FONTS.FONTS.body4_bold.fontWeight,
    fontFamily: FONTS.FONTS.h4.fontFamily,
  },
  product_choose_color: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 3,
  },
  product_choose_color_black: {
    width: 20,
    height: 20,
    borderRadius: 60 / 2,
    backgroundColor: COLORS.COLORS.black,
    borderWidth: 1,
  },
  product_choose_color_white: {
    width: 20,
    height: 20,
    borderRadius: 60 / 2,
    backgroundColor: COLORS.COLORS.white,
    borderWidth: 1,
  },
  marginLeft: {
    marginLeft: 7,
  },
  select_size: {
    marginTop: 20,
  },
  select_size_text: {
    fontSize: SIZES.SIZES.h4,
    fontWeight: FONTS.FONTS.body4_bold.fontWeight,
    fontFamily: FONTS.FONTS.h4.fontFamily,
  },
  view_size: {
    marginLeft: 15,
    marginTop: 3,
    color: COLORS.COLORS.gray,
  },
  infor_choose_size: {
    marginTop: 20,
  },
  choose_size: {
    width: SIZES.SIZES.base * 5,
    height: SIZES.SIZES.base * 5,
    marginRight: 10,
  },
  number_size: {
    alignSelf: 'center',
    marginTop: 10,
  },
  line: {
    marginVertical: SIZES.SIZES.base * 3,
    height: 1,
    backgroundColor: COLORS.COLORS.line,
    marginBottom: 0,
  },
});
