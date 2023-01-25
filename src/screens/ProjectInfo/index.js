import {ScrollView} from 'native-base';
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import SwithcButtons from '../../components/SwithcButtons';
import Accordion from 'react-native-collapsible/Accordion';

import styles from './styles';
import multiple from '../../assets/images/multiple/image.png';
import locationImg from '../../assets/images/location/image.png';

const ProjectInfo = props => {
  const {
    Name = '12345',
    address = '101 Dr V B Gandhi Marg Hutatma Chowk, Mumbai, 400023',
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.label}>{'Some information about project'}</Text>
        <View style={styles.projectInfo}>
          <Text style={styles.projectId}>{'Project ID'}</Text>
          <View style={styles.projectIdRow}>
            <Text style={styles.projectName}>{Name}</Text>
            <Image
              source={multiple}
              style={styles.locationIcon}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.hrLine} />
        <View style={styles.addressinfo}>
          <Image
            source={locationImg}
            style={styles.locationIcon}
            resizeMode="contain"
          />
          <Text style={styles.address}> {address}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProjectInfo;
