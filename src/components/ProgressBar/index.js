import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import styles from './styles';
import {Dimensions} from 'react-native';
import ViewPort from '../../constants/view-port';

const {vh, vw} = ViewPort;
const windowWidth = Dimensions.get('window').width;

const ProgressBar = () => {
  const [value, setState] = useState(0);
  const left = (value * (windowWidth - 60)) / 45;
  return (
    <View style={styles.container}>
      <Text style={{width: 70 * vw, textAlign: 'center', left: left * vw}}>
        {value}
      </Text>
      <Slider
        animateTransitions
        value={value}
        minimumTrackTintColor="#2C4DAE"
        maximumValue={100}
        minimumValue={0}
        step={1}
        thumbTouchSize={{width: 40, height: 40}}
        thumbTintColor="#D0D7E8"
        onValueChange={data => setState(data)}
      />
    </View>
  );
};

export default ProgressBar;
