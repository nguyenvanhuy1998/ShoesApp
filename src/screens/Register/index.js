import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './StylesRegister';
import LinearGradient from 'react-native-linear-gradient';
import emailValidator from '../../utils/validate';

const Register = () => {
  const bg_login = require('../../assets/images/bg_login.webp');
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');

  // const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <View style={styles.container}>
      <View style={styles.img_container}>
        <Image resizeMode="repeat" source={bg_login} style={styles.img_style} />
      </View>

      <View style={{flex: 2}} />

      <LinearGradient
        style={styles.gradient_container}
        colors={['transparent', '#FFF', '#FFF']}>
        {/* form register */}
        <View style={styles.linear_container}>
          <View style={styles.form_container}>
            <View style={styles.form_container_flex}>
              <Text style={styles.form_container_flex__title}>Register</Text>
              <View style={styles.form_input_container}>
                <View style={styles.input_container}>
                  <TextInput placeholder="NAME" />
                </View>
                <View style={styles.input_container}>
                  <TextInput
                    placeholder="EMAIL"
                    value={email}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={value => {
                      setEmail(value);
                      // emailValidator(value);
                    }}
                    // defaultValue={emailValidator}
                    secureTextEntry={false}
                  />
                </View>

                <View style={styles.input_container}>
                  <TextInput placeholder="PASSWORD" secureTextEntry={true} />
                </View>
                <View style={styles.input_container}>
                  <TextInput
                    placeholder="CONFIRM PASSWORD"
                    secureTextEntry={true}
                  />
                </View>

                <View style={styles.form_button}>
                  <TouchableOpacity>
                    <Text style={styles.form_button_text}>SIGN UP</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.text_ask_account}>
                  Already have an account?
                  <TouchableOpacity>
                    <Text style={styles.text_ask_account__signin}>
                      Sign in now.
                    </Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default Register;
