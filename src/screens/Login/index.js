import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Login = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: top,
      }}>
      <Text>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
