import {View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import styles from '../Detail/DetailStyle';
import {icons} from '../../constants';

const Detail = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 250,
          width: '100%',
          backgroundColor: '#000',
          position: 'absolute',
        }}
      />

      <SafeAreaView>
        {/* AppBar */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
          }}>
          <Image source={icons.iconClose} style={{width: 24, height: 24}} />
          <Image source={icons.iconTune} style={{width: 24, height: 24}} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Detail;
