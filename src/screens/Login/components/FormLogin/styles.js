import {StyleSheet} from 'react-native';
import {theme} from '../../../../constants';
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  flexOne: {
    flex: 1,
  },
  containerFormLogin: {
    position: 'absolute',
    height: '50%',
    width: '100%',
    bottom: 0,
  },
  contentLogin: {
    flex: 1,
    alignItems: 'center',
  },
  titleLogin: {
    ...theme.FONTS.body2,
    textAlign: 'center',
  },
  formLogin: {
    width: '80%',
    marginTop: theme.SIZES.base * 3,
    backgroundColor: theme.COLORS.white,
  },
  viewInputContainer: {
    backgroundColor: theme.COLORS.lightGray,
    borderRadius: theme.SIZES.radius,
    padding: theme.SIZES.base * 3,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: theme.SIZES.base * 3,
    height: theme.SIZES.base * 3,
    resizeMode: 'cover',
  },
  input: {
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
