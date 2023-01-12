@@ -0,0 +1,46 @@
/**
 * @flow
 */

import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles.js';

const handsImg = require('../../assets/images/hands/image.png');

export interface Props {
  name: String;
  status: String;
  startDate: Date;
  date: Date;
}

function ProjectCard({name, status, onPress, ...remainingProps}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <Text style={styles.name}> {name} </Text>
        <View style={styles.statusWrapper}>
          <Text style={styles.status}> {status} </Text>
        </View>
      </View>
      <View style={styles.middleWrapper}>
        <Text style={styles.statusInfo}> Starting in 20 days</Text>
      </View>
      <View style={styles.bottomWrapper}>
        <Text style={styles.date}> 30 Oct 2022</Text>
        <Image
          source={handsImg}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: 28,
          }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

export default ProjectCard;