import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles.js';

import doneColor from '../../../assets/images/doneColor/image.png';

export interface Props {
  name: String;
  status: String;
  startDate: Date;
  date: Date;
}

function Success({info}: Props) {
  const {message, image} = info;
  return (
    <View style={styles.container}>
      <Image source={doneColor} style={styles.doneColor} resizeMode="contain" />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

export default Success;
