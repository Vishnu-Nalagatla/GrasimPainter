import React from 'react';
import {StackHeaderProps} from '@react-navigation/stack';
import styles from './styles.js';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import bellImg from '../../../assets/images/bell/image.png';
import menuImg from '../../../assets/images/menu/image.png';
import RouteConfig from '../../../constants/route-config.js';

function Header(props: StackHeaderProps) {
  const {options, navigation} = props;
  console.info('props.....', props);
  const {title = undefined, showBackIcon = true} = options;
  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        {showBackIcon ? (
          <TouchableOpacity
            style={styles.menuImg}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={menuImg}
              style={styles.menuImg}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : null}
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.bellContainer}>
        <TouchableOpacity
          style={styles.bellIcon}
          onPress={() => {
            navigation.navigate(RouteConfig.Notifications);
          }}>
          <Image source={bellImg} style={styles.bellImg} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;
