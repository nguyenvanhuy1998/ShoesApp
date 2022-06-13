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
      <View style={styles.flexOne}>
        <View style={styles.containerFormLogin}>
          <View style={styles.contentLogin}>
            <Text style={styles.titleLogin}>Login</Text>
            <View style={styles.formLogin}>
              <View style={styles.viewInputContainer}>
                <View style={styles.inputContainer}>
                  <Image source={icons.iconUser} style={styles.icon} />
                  <TextInput placeholder="Email" style={styles.input} />
                </View>
                <View style={styles.line} />
                <View style={styles.inputContainer}>
                  <Image source={icons.iconPassword} style={styles.icon} />
                  <TextInput
                    secureTextEntry
                    placeholder="Password"
                    style={styles.input}
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
