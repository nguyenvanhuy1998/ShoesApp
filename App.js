import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from './src/constants';

const App = () => {
  return (
    <View>
      <Text
        style={{
          ...theme.FONTS.body1,
        }}>
        App
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
