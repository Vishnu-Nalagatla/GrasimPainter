import React from 'react';
import {Container, Content} from 'native-base';
import {Image, View, Text} from 'react-native';
import styles from './styles';

console.log('styles', styles);

const ProjectDetails = () => {
  return (
    <View style={styles.container}>
      <Text> ProjectDetails</Text>
    </View>
  );
};

export default ProjectDetails;
