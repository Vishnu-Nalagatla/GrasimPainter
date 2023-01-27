import {Image, Text} from 'native-base';
import React from 'react';
import {View} from 'react-native';

import phoneBlack from '../../assets/images/phoneBlack/image.png';

import styles from './styles';

const ClinetInfo = props => {
  const {
    Name = 'Rajesh Kumar',
    address = '101 Dr V B Gandhi Marg Hutatma Chowk, Mumbai, 400023',
    data = [
      {
        property: 'Key Decision Maker',
        value: 'Rajesh Kumar',
      },
      {
        property: 'Site Area',
        value: '1000 sqft',
      },
      {
        property: 'Painting System',
        value: 'Fast Painting',
      },
      {
        property: 'Same house stay',
        value: 'No',
      },
      {
        property: 'Open Complaints',
        value: 'No',
      },
    ],
  } = props;
  const InfoRow = ({info, index}) => {
    const {property, value} = info;
    const row = index % 2 === 0 ? styles.evenRow : styles.oddRow;
    return (
      <View style={row}>
        <Text style={styles.key}>{property}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.header}>
          <Text style={styles.name}>{Name}</Text>
          <Image
            source={phoneBlack}
            style={styles.phoneIcon}
            resizeMode="contain"
          />
        </View>

        <View style={styles.clinetInfo}>
          {data.map((info, index) => (
            <InfoRow info={info} index={index}/>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ClinetInfo;
