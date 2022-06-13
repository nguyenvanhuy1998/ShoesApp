import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {UIButton, UIInput} from '../../../../components';
import {icons, theme} from '../../../../constants';
import styles from './styles';
const colorGradient = [
  theme.COLORS.transparent,
  theme.COLORS.white,
  theme.COLORS.white,
];
const FormLogin = () => {
  return (
    <LinearGradient style={styles.container} colors={colorGradient}>
      <View style={styles.flexOne}>
        <View style={styles.containerFormLogin}>
          <View style={styles.contentLogin}>
            <Text style={styles.titleLogin}>Login</Text>
            <View style={styles.formLogin}>
              <UIInput placeholder={'Email'} icon={icons.iconUser} />
              <UIInput
                secureTextEntry
                placeholder={'Password'}
                icon={icons.iconPassword}
              />
              <UIButton name="Login" />
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
