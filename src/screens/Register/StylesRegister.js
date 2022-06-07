import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  img_container: {
    flex: 1.5,
  },
  img_style: {
    width: '100%',
    height: '100%',
  },
  gradient_container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  linear_container: {
    flex: 1,
    alignItems: 'center',
  },
  form_container: {
    position: 'absolute',
    height: '55%',
    width: '100%',
    bottom: 0,
  },
  form_container_flex: {
    flex: 1,
    alignItems: 'center',
  },
  form_container_flex__title: {
    fontSize: 24,
    fontWeight: '500',
  },
  form_input_container: {
    width: '80%',
    marginTop: 24,
    marginBottom: 5,
  },
  input_container: {
    borderRadius: 30,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: 'silver',
    padding: 12,
    marginBottom: 15,
  },
  form_button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 40,
    padding: 16,
  },
  form_button_text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  text_ask_account: {
    alignSelf: 'center',
    marginTop: 16,
  },
  text_ask_account__signin: {
    color: 'blue',
    top: 3,
    left: 10,
  },
});
