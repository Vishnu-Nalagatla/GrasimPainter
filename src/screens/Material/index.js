import {FlatList, ScrollView, Text} from 'native-base';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import CustomButton from '../../components/Button';

import styles from './styles';

const Material = props => {
  const materialLeft = 'Let’s check quantity of material left';
  const materialUsedLabel = 'Here is the list of material used';
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

    materialUsed = {
      painting: [
        {
          name: 'Shine',
          cost: '8872',
          quantity: '22 Ltr',
        },
        {
          name: 'Royal paint',
          cost: '8872',
          quantity: '22 Ltr',
        },
      ],
      accessories: [
        {
          name: 'Paint Roller',
          value: '7 pcs',
        },
        {
          name: 'Paint Brush',
          value: '2 pcs',
        },
        {
          name: 'Ladder',
          value: '2 pcs',
        },
        {
          name: 'Paint Spray Machine',
          value: '2 pcs',
        },
      ],
    },
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

  const MaterialUsedCard = ({item, index} = props) => {
    const {name, cost, quantity, value} = item;
    console.info('materialUsedCardEven.....',  index % 2 === 0);
    return (
      <View
        style={
          index % 2 === 0
            ? styles.materialUsedCardEven
            : styles.materialUsedCard
        }>
        <View style={styles.usedRow}>
          <View>
            <Text>{name}</Text>
          </View>
          <View style={styles.rightInfo}>
            <Text style={styles.cost}>{cost}</Text>
            <Text>{quantity}</Text>
            <Text>{value}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.materialLeftView}>
          <Text style={styles.materialLabel}> {materialLeft}</Text>
          {material.map(item => (
            <MaterialCard item={item} />
          ))}
          <CustomButton
            title={'Save'}
            textStyle={[styles.btnTxt]}
            style={[styles.button]}
            onPress={onPress}
          />
        </View>
        <View style={styles.materialusedView}>
          <Text style={styles.materialLabel}> {materialUsedLabel}</Text>
          <Text style={styles.heading}>{'Painting Material'}</Text>
          <View style={styles.cardView}>
            {materialUsed.painting.map((item, index) => (
              <MaterialUsedCard item={item} index={index} />
            ))}
          </View>
          <Text style={styles.heading}>{'Accessories & Equipments'}</Text>
          <View style={styles.cardView}>
            {materialUsed.accessories.map((item, index) => (
              <MaterialUsedCard item={item} index={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Material;
