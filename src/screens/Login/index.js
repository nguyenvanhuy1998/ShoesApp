import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {images, theme} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  return (
    <View style={styles.flexOne}>
      <View style={styles.flexTwo}>
        <Image
          resizeMode="cover"
          source={images.bgLogin}
          style={styles.background_image}
        />
      </View>
      <View style={styles.flexOne} />
      <LinearGradient
        style={styles.gradient_container}
        colors={['transparent', theme.COLORS.white, theme.COLORS.white]}>
        {/* form login */}
      </LinearGradient>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 2,
  },
  background_image: {width: '100%', height: '100%'},
  gradient_container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
