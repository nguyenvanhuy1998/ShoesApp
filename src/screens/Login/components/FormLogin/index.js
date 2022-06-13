import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../../../constants';
import styles from './styles';
const FormLogin = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[
        theme.COLORS.transparent,
        theme.COLORS.white,
        theme.COLORS.white,
      ]}>
      {/* <View style={styles.linear_container}>
        <View style={styles.form_container}>
          <View style={styles.form_container_flex}>
            <Text style={styles.form_container_flex__title}>Login</Text>
            <View style={styles.form_input_container}>
              <View style={styles.input_container}>
                <View style={styles.input_with_icon_container}>
                  <Image
                    source={icon_user}
                    style={styles.input_with_icon_container__icon}
                  />
                  <TextInput
                    onChangeText={text => (email = text)}
                    placeholder="Email"
                    style={styles.input_with_icon_container__input}
                  />
                </View>

                <View style={{height: 1, backgroundColor: '#DFDFDF'}} />

                <View style={styles.input_with_icon_container}>
                  <Image
                    source={icon_password}
                    style={styles.input_with_icon_container__icon}
                  />
                  <TextInput
                    onChangeText={text => (password = text)}
                    secureTextEntry
                    placeholder="Password"
                    style={styles.input_with_icon_container__input}
                  />
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Animated.View
                  style={{
                    backgroundColor: '#000',
                    borderRadius: 40,
                    padding: 16,
                    marginTop: 24,
                    width: animInter,
                  }}>
                  <TouchableOpacity onPress={() => onPressLogin()}>
                    {accessToken !== '' && accessToken !== undefined ? (
                      <Image
                        source={icon_close}
                        style={{width: 24, height: 24}}
                      />
                    ) : (
                      <Text
                        style={{
                          color: 'white',
                          alignSelf: 'center',
                          fontSize: 16,
                          fontWeight: '500',
                        }}>
                        Login
                      </Text>
                    )}
                  </TouchableOpacity>
                </Animated.View>
              </View>

              <Text style={{alignSelf: 'center', marginTop: 16}}>
                Don't have an account? Signup
              </Text>
            </View>
          </View>
        </View>
      </View> */}
    </LinearGradient>
  );
};

export default FormLogin;
