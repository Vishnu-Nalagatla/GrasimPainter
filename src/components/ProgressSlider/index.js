import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import styles from './styles';
import {Dimensions} from 'react-native';
import ViewPort from '../../constants/view-port';
import rollerIcon from '../../assets/images/roller/image.png';
import colors from '../../constants/colors';

const {vh, vw} = ViewPort;
const windowWidth = Dimensions.get('window').width;

const ProgressSlider = ({onValueChange}) => {
  const [value, setState] = useState(0);
  const left = (value * (windowWidth - 190)) / 90;
  const onChange = data => {
    setState(data);
    onValueChange(data[0]);
  };
  const viewStyle = {left: left};
  return (
    <View style={styles.container}>
      <Text style={[styles.textValue, viewStyle]}>{value}</Text>
      <Slider
        animateTransitions
        value={value}
        style={styles.slider}
        minimumTrackTintColor={colors.primary}
        maximumValue={100}
        minimumValue={0}
        thumbStyle={styles.thumbStyle}
        trackStyle={styles.trackStyle}
        thumbImage={rollerIcon}
        step={1}
        thumbTouchSize={{width: 60 * vw, height: 60 * vh}}
        thumbTintColor="#FFFF"
        onValueChange={data => onChange(data)}
      />
    </View>
  );
};

export default ProgressSlider;
