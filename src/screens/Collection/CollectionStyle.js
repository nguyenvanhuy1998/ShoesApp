import {StyleSheet} from 'react-native';
import COLORS from '../../constants/theme';
import SIZES from '../../constants/theme';
import FONTS from '../../constants/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.COLORS.black,
    position: 'absolute',
    width: '100%',
    height: 250,
  },
  collection_name: {
    top: 0,
  },
  collection_name_text: {
    color: COLORS.COLORS.white,
    fontSize: SIZES.SIZES.largeTitle,
    fontWeight: FONTS.FONTS.body4_bold.fontWeight,
    fontFamily: FONTS.FONTS.h4.fontFamily,
  },
  category: {
    marginTop: 15,
  },
  name_each_categories: {
    color: COLORS.COLORS.white,
    margin: 8,
    fontSize: SIZES.SIZES.h4,
    fontWeight: FONTS.FONTS.body4_bold.fontWeight,
  },
  product: {
    margin: 15,
    padding: 16,
    backgroundColor: COLORS.COLORS.white,
    shadowColor: COLORS.COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 5,
    width: 300,
    height: 400,
  },
  product_icon_like: {
    width: 16,
    height: 16,
    alignSelf: 'flex-end',
  },
  product_image: {
    width: '100%',
    height: '60%',
  },
  product_name: {
    fontSize: SIZES.SIZES.h1,
    fontWeight: FONTS.FONTS.body4_bold.fontWeight,
    fontFamily: FONTS.FONTS.h4.fontFamily,
    marginTop: -20,
  },
  product_theme: {
    marginTop: 10,
  },
  product_line_price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
  },
  product_price: {
    fontSize: SIZES.SIZES.h2,
    marginTop: 16,
    fontWeight: '600',
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
    borderWidth: 3,
  },
  product_choose_color_white: {
    width: 20,
    height: 20,
    borderRadius: 60 / 2,
    backgroundColor: COLORS.COLORS.white,
    borderWidth: 3,
  },
  marginLeft: {
    marginLeft: 7,
  },

  product_latest: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  product_latest_title: {
    fontSize: SIZES.SIZES.h4,
    fontWeight: FONTS.FONTS.body4_bold.fontWeight,
    fontFamily: FONTS.FONTS.h4.fontFamily,
  },
  product_latest_item: {
    marginTop: 10,
    marginLeft: 20,
    padding: 5,
    backgroundColor: COLORS.COLORS.white,
    shadowColor: COLORS.COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    width: 70,
    height: 80,
  },
  product_latest_item_image: {
    width: '100%',
    height: '100%',
  },
});
