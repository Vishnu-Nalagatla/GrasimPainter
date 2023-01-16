import {FlatList, ScrollView, Text} from 'native-base';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import CustomButton from '../../components/Button';

import styles from './styles';

const Material = props => {
  const materialLeft = 'Let’s check quantity of material left';
  const materialUsed = 'Here is the list of material used';
  const sliderValue = '23 Ltr';
  const leftOver = 'Leftover';
  const {
    material = [
      {
        name: 'Putty',
        totalQuantity: '10 kg',
        brand: 'Asain Paints',
      },
      {
        name: 'Paint',
        totalQuantity: '10 ltr',
        brand: 'Asain Paints',
      },
    ],
    onPress,
  } = props;

  const MaterialCard = ({item} = props) => {
    const {name, brand, totalQuantity} = item;
    return (
      <View style={styles.materialCard}>
        <View style={styles.headerView}>
          <Text>{name}</Text>
          <Text>{brand}</Text>
        </View>
        <Text style={styles.totalQuantityLabel}>
          Total Quantity {'   '}
          <Text style={styles.totalQuantity}>{totalQuantity}</Text>
        </Text>
        <View style={styles.leftOverWrapper}>
          <Text style={styles.leftOverLabel}> {leftOver}</Text>
          <View style={styles.leftOverView}>
            <Text style={styles.leftOverValue}> {sliderValue}</Text>
          </View>
        </View>
      </View>
    );
  };

  const getTabs = () => {
    return (
      <FlatList
        data={material}
        keyExtractor={(item, index) => item.key}
        renderItem={({item}) => <MaterialCard item={item} />}
      />
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.materialLeftView}>
        <Text style={styles.materialLabel}> {materialLeft}</Text>
        {getTabs()}
        <CustomButton
          title={'Save'}
          textStyle={[styles.btnTxt]}
          style={[styles.button]}
          onPress={onPress}
        />
      </View>
      <View style={styles.materialusedView}>
        <Text style={styles.materialLabel}> {materialUsed}</Text>
      </View>
    </ScrollView>
  );
};

export default Material;
