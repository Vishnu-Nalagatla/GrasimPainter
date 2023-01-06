import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from '../../theme/colors';

import Animated, {useSharedValue} from 'react-native-reanimated';

const Splash = () => {
  const shrink = useSharedValue(false);
  useEffect(() => {
    setTimeout(() => {
      shrink.value = true;
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={style.container}>
      <View
        style={{
          position: 'relative',
          left: '36%',
        }}>
        <Animated.Image
          source={require('../../assets/images/paint_logo.png')}
          style={{
            width: 81.62,
            height: 81.62,
          }}
        />
        <Animated.Image
          source={require('../../assets/images/star_logo.png')}
          style={{
            width: 69.15,
            height: 69.15,
            position: 'absolute',
            left: '14.4%',
            top: '35.2%',
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
});

export default Splash;
