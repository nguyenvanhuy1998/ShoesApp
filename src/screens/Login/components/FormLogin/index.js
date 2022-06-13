import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {icons, theme} from '../../../../constants';
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
      <View style={styles.container_login}>
        <View style={styles.container_login_form}>
          <View style={styles.container_login_form_content}>
            <Text style={styles.container_login_form_content__titleLogin}>
              Login
            </Text>
            <View style={styles.container_login_form_content_input}>
              <View style={styles.container_login_form_content_input_container}>
                <View
                  style={
                    styles.container_login_form_content_input_container_textInput
                  }>
                  <Image
                    source={icons.iconUser}
                    style={
                      styles.container_login_form_content_input_container_textInput__icon
                    }
                  />
                  <TextInput
                    placeholder="Email"
                    style={
                      styles.container_login_form_content_input_container_textInput__input
                    }
                  />
                </View>
                <View style={styles.line} />
                <View
                  style={
                    styles.container_login_form_content_input_container_textInput
                  }>
                  <Image
                    source={icons.iconPassword}
                    style={
                      styles.container_login_form_content_input_container_textInput__icon
                    }
                  />
                  <TextInput
                    secureTextEntry
                    placeholder="Password"
                    style={
                      styles.container_login_form_content_input_container_textInput__input
                    }
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.login}>Login</Text>
              </TouchableOpacity>
              <View style={styles.containerRegister}>
                <Text style={styles.subTitle}>Don't have an account? </Text>
                <TouchableOpacity>
                  <Text style={styles.signUp}>Signup</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default FormLogin;
