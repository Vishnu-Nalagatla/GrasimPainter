import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import styles from './styles';
import {Dimensions} from 'react-native';
import ViewPort from '../../constants/view-port';

const {vh, vw} = ViewPort;
const windowWidth = Dimensions.get('window').width;

const ProgressSlider = ({onValueChange}) => {
  const [value, setState] = useState(0);
  const left = (value * (windowWidth - 190)) / 90;
  const onChange = data => {
    setState(data);
    onValueChange(data[0]);
  };
  return (
    <View style={styles.container}>
      <Text style={{width: 70 * vw, textAlign: 'center', left: left}}>
        {value}
      </Text>
      <Slider
        animateTransitions
        value={value}
        minimumTrackTintColor="#2C4DAE"
        maximumValue={100}
        minimumValue={0}
        step={1}
        thumbTouchSize={{width: 40 * vw, height: 40 * vh}}
        thumbTintColor="#D0D7E8"
        onValueChange={data => onChange(data)}
      />
    </View>
  );
};

export default ProgressSlider;
