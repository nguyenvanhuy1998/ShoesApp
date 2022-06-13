import {View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {images} from '../../constants';

const BackgroundAuthen = () => {
  return (
    <>
      <View style={styles.flexTwo}>
        <Image
          resizeMode="cover"
          source={images.bgLogin}
          style={styles.background_image}
        />
      </View>
      <View style={styles.flexOne} />
    </>
  );
};

export default BackgroundAuthen;
