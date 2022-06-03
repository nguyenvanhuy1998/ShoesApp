import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from './src/constants';
import {formatCurrency} from './src/utils/formatter';
const App = () => {
  return (
    <View>
      <Text
        style={{
          ...theme.FONTS.body1,
        }}>
        {formatCurrency(10000)}
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
