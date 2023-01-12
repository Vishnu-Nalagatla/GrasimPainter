import React from 'react';
import {StackHeaderProps} from '@react-navigation/stack';
// import {View, Text} from 'native-base';
// import ViewPort from '../../constants/view-port';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, StyleSheet, Text, View} from 'react-native';
import backImg from '../../assets/images/group/image.png';
import bellImg from '../../assets/images/group/image.png';
// const {vh} = ViewPort;

function Header(props: StackHeaderProps) {
  const {options} = props;
  const navigation = {goBack: () => {}};
  // const showBackIcon = true;

  const {title = undefined, showBackIcon = false} = options;
  return (
    <View style={styles.container}>
      {showBackIcon ? (
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={backImg}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              height: 30,
            }}
            resizeMode="contain"
          />
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
  },
  bellContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  backIcon: {
    height: '100%',
    // padding: 5,
    // justifyContent: 'center',
  },
  bellIcon: {
    alignItems: 'flex-end',
  },
  bellImg: {
    height: 30,
    width: 30,
    marginRight: 10,
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
