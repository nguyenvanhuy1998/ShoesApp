import {View, Text} from 'react-native';
import React from 'react';
import styles from '../InformationProductBottom/styles';

const InformationProductBottom = () => {
  return (
    <View style={styles.information_product_bottom}>
      {/* Title */}
      <Text style={styles.title}>
        Adidas Running Shoes With Cooling Ventilation
      </Text>
    </View>
  );
};

export default InformationProductBottom;
