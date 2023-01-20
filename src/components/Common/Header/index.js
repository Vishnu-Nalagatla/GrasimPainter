import React from 'react';
import {StackHeaderProps} from '@react-navigation/stack';
// import {View, Text} from 'native-base';
import ViewPort from '../../../constants/view-port';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, StyleSheet, Text, View} from 'react-native';
import backImg from '../../../assets/images/group/image.png';
// import bellImg from '../../../assets/images/group/image.png';

import bellImg from '../../../assets/images/bell/image.png';

const {vh, vw} = ViewPort;

function Header(props: StackHeaderProps) {
  const {options} = props;
  const navigation = {goBack: () => {}};
  // const showBackIcon = true;

  const {title = undefined, showBackIcon = true} = options;
  return (
    <View style={styles.container}>
      {showBackIcon ? (
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => {
            navigation.goBack();
          }}>
          {/* <Image
            source={bellImg}
            style={styles.backIcon}
            resizeMode="contain"
          /> */}
        </TouchableOpacity>
      ) : null}
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.bellContainer}>
        <TouchableOpacity
          style={styles.bellIcon}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={bellImg} style={styles.bellImg} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#2C4DAE',
    justifyContent: 'center',
    alignItems:'center',
  },
  bellContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  backIcon: {
    height: 50 * vh,
    width: 50 * vw,
    marginRight: 40 * vw,
  },
  bellIcon: {
    alignItems: 'flex-end',
  },
  bellImg: {
    height: 50 * vh,
    width: 50 * vw,
    marginRight: 50 * vw,
  },
  headerTitle: {
    paddingLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Header;
