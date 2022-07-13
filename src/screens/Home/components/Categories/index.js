import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {dataGetAllCategory} from '../../../../utils/dummyData';
import styles from './styles';

const Categories = () => {
  const renderItemCatgory = item => (
    <TouchableOpacity>
      <Text style={styles.category}>{item.category}</Text>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={dataGetAllCategory}
        horizontal
        renderItem={({item}) => renderItemCatgory(item)}
      />
    </View>
  );
};

export default Categories;
