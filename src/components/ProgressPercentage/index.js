import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import styles from './styles';
import {Dimensions} from 'react-native';
import ViewPort from '../../constants/view-port';
import ProgressBar from 'react-native-progress/Bar';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;
const windowWidth = Dimensions.get('window').width;

// FIXME: review the logic.
const ProgressPercentage = props => {
  const {value = 20} = props;
  const progress = value <= 10 ? 10 : value;
  const space = value <= 10 ? 30 : 30;
  const percentage = progress / 100;
  const left = (295 * vw * value) / 100 - space * vw;
  const styleInfo = {
    left: left,
    position: 'absolute',
    color: colors.white,
    zIndex: 123,
    fontSize: 14 * vh,
    fontWeight: '700',
  };
  return (
    <View style={styles.container}>
      <Text style={styleInfo}>
        {value} {'%'}
      </Text>
      <ProgressBar
        progress={percentage}
        width={295 * vw}
        height={20 * vh}
        borderRadius={8 * vh}
        color={colors.primary}
      />
    </View>
  );
};

export default ProgressPercentage;
