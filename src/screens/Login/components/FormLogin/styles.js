import {StyleSheet} from 'react-native';
import {theme} from '../../../../constants';
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  container_login: {
    flex: 1,
  },
  container_login_form: {
    position: 'absolute',
    height: '50%',
    width: '100%',
    bottom: 0,
  },
  container_login_form_content: {
    flex: 1,
    alignItems: 'center',
  },
  container_login_form_content__titleLogin: {
    ...theme.FONTS.body2,
    textAlign: 'center',
  },
  container_login_form_content_input: {
    width: '80%',
    marginTop: theme.SIZES.base * 3,
    backgroundColor: theme.COLORS.white,
  },
  container_login_form_content_input_container: {
    backgroundColor: theme.COLORS.lightGray,
    borderRadius: theme.SIZES.radius,
    padding: theme.SIZES.base * 3,
  },
  container_login_form_content_input_container_textInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container_login_form_content_input_container_textInput__icon: {
    width: theme.SIZES.base * 3,
    height: theme.SIZES.base * 3,
    resizeMode: 'cover',
  },
  container_login_form_content_input_container_textInput__input: {
    flex: 1,
    marginLeft: theme.SIZES.base,
    height: theme.SIZES.radius3,
  },
  line: {
    marginVertical: theme.SIZES.base,
    height: 1,
    backgroundColor: theme.COLORS.line,
  },
  buttonLogin: {
    backgroundColor: theme.COLORS.black,
    marginTop: theme.SIZES.base * 3,
    height: theme.SIZES.radius3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.SIZES.base,
  },
  login: {
    color: 'white',
    ...theme.FONTS.body6,
    fontWeight: '500',
  },
  containerRegister: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: theme.SIZES.base * 2,
  },
  subTitle: {
    ...theme.FONTS.body4,
    color: theme.COLORS.black,
    fontWeight: '400',
  },
  signUp: {
    ...theme.FONTS.body4,
    color: theme.COLORS.black,
    fontWeight: '500',
  },
});
export default styles;
