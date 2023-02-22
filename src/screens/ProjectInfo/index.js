import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

import styles from './styles';
import multiple from '../../assets/images/multiple/image.png';
import locationImg from '../../assets/images/location/image.png';
import Clipboard from '@react-native-community/clipboard';

const ProjectInfo = props => {
  const {
    projectId = '1234567',
    address = '101 Dr V B Gandhi Marg Hutatma Chowk, Mumbai, 400023',
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.label}>{'Some information about project'}</Text>
        <View style={styles.projectInfo}>
          <Text style={styles.projectId}>{'Project ID'}</Text>
          <View style={styles.projectIdRow}>
            <Text style={styles.projectName}>{projectId}</Text>
            <TouchableOpacity onPress={() => Clipboard.setString(projectId)}>
              <Image
                source={multiple}
                style={styles.multiple}
                resizeMode="contain"
              />
            </TouchableOpacity>
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
