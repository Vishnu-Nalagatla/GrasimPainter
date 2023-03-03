import {Image, Text} from 'native-base';
import React from 'react';
import {View, Platform, TouchableOpacity, Linking} from 'react-native';

import phoneBlack from '../../assets/images/phoneBlack/image.png';

import styles from './styles';

const ClinetInfo = props => {
  const {route} = props;
  const {params} = route;
  const {project} = params;
  const {CustomerName, CustomerPhone, EmailId, RoomList} = project || {};
  const {
    data = [
      {
        property: 'Key Decision Maker',
        value: CustomerName,
      },
      {
        property: 'Site Area',
        value: `${RoomList[0].WallList[0].TotalArea} sqft`,
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
  const dialCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${CustomerPhone}`;
    } else {
      phoneNumber = `telprompt:${CustomerPhone}`;
    }
    Linking.openURL(phoneNumber);
  };
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.header}>
          <Text style={styles.name}>{CustomerName}</Text>
          <TouchableOpacity onPress={dialCall}>
            <Image
              source={phoneBlack}
              style={styles.phoneIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.clinetInfo}>
          {data.map((info, index) => (
            <InfoRow info={info} index={index} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default ClinetInfo;
