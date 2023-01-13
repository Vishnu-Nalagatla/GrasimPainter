import {View, Text} from 'react-native';
import React from 'react';
import styles from './styeles';
import ellipse from '../../../assets/images/ellipse/image.png';
import {Image} from 'react-native';

const ProjectTimeLine = (props: Props) => {
  const {data} = props;
  const {Name} = data;
  const viewDetails = 'View Details';
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftWrapper}>
          <Image source={ellipse} style={styles.ellipse} resizeMode="contain" />
          <Text style={styles.projectName}> {Name}</Text>
        </View>
        <View style={styles.rightWrapper}>
          <Text style={styles.viewDetailsText}> {viewDetails}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProjectTimeLine;
