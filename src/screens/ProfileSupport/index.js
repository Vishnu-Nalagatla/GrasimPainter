import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {View} from 'native-base';
import styles from './styles';
import callImg from '../../assets/images/help/call.png';
import UTIL from '../../util';

const ProfileSupport = () => {
  const callContactCenter = number => {
    UTIL.connectThroughCall(number);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.getInTouch}>Get in touch with</Text>
      <View style={styles.phoneWrapper}>
        <TouchableOpacity
          style={styles.innerWrapper}
          onPress={() => callContactCenter('9876543210')}>
          <Text style={styles.text}>Contact Center</Text>
          <Image source={callImg} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.innerWrapper}
          onPress={() => callContactCenter('8765432109')}>
          <Text style={styles.text}>Service Partner</Text>
          <Image source={callImg} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.innerWrapper}
          onPress={() => callContactCenter('7654321098')}>
          <Text style={[styles.text, styles.right]}>Area Manager</Text>
          <Image source={callImg} style={styles.img} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileSupport;
