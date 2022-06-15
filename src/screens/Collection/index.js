import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import styles from './CollectionStyle';
import {dataGetAllCategory, dataProduct} from '../../utils/dummyData';
import {icons} from '../../constants';

const Collection = () => {
  const getAllCategory = item => (
    <TouchableOpacity style={styles.category}>
      <Text style={styles.name_each_categories}>{item.category}</Text>
    </TouchableOpacity>
  );

  const getProduct = item => (
    <View style={styles.product}>
      <Image source={icons.like} style={styles.product_icon_like} />
      <Image
        resizeMode="contain"
        source={{uri: item.image}}
        style={styles.product_image}
      />
      <Text style={styles.product_name}>{item.name}</Text>
      <Text numberOfLines={1} style={styles.product_theme}>
        {item.shortDescription}
      </Text>
      <View style={styles.product_line_price}>
        <Text style={styles.product_price}>${item.price}</Text>
        <View style={styles.product_choose_color}>
          <Text>Colors</Text>
          <TouchableOpacity
            style={[styles.product_choose_color_black, styles.marginLeft]}
          />
          <TouchableOpacity
            style={[styles.product_choose_color_white, styles.marginLeft]}
          />
        </View>
      </View>
    </View>
  );

  const getProductLatest = item => (
    <View style={styles.product_latest_item}>
      <Image
        resizeMode="contain"
        source={{uri: item.image}}
        style={styles.product_latest_item_image}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        {/* Title: Collection name */}
        <View style={styles.collection_name}>
          <Text style={styles.collection_name_text}>
            Athletic Shoes Collection
          </Text>
        </View>

        {/* Category */}
        <View>
          <FlatList
            data={dataGetAllCategory}
            horizontal
            renderItem={({item}) => getAllCategory(item)}
          />
        </View>

        {/* Product */}
        <View>
          <FlatList
            style={{height: 430}}
            data={dataProduct}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => getProduct(item)}
          />
        </View>

        {/* Product Latest */}
        <View>
          <View style={styles.product_latest}>
            <Text style={styles.product_latest_title}>Latest Shoes</Text>
            <TouchableOpacity>
              <Text>Show all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={{height: 100}}
            data={dataProduct}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => getProductLatest(item)}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Collection;
