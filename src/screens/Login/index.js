import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import FormLogin from './components/FormLogin';
import BackgroundAuthen from '../../components/BackgroundAuthen';

const Login = () => {
  return (
    <View style={styles.container}>
      <BackgroundAuthen />
      <FormLogin />
    </View>
  );
};

export default Login;
