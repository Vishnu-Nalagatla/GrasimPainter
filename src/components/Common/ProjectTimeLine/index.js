import {View, Text} from 'react-native';
import React from 'react';
import styles from './styeles';
import ellipse from '../../../assets/images/ellipse/image.png';
import {Image} from 'react-native';
import Moment from 'moment';

const ProjectTimeLine = (props: Props) => {
  const {data} = props;
  const {Name, AssetCheckStatus, ProjectStartDate} = data;
  const viewDetails = 'View Details';

  const prepareDate = () => {
    const date = Moment(ProjectStartDate).format('DD MMMM YYYY');
    return `Starting on ${date}`;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftWrapper}>
          <View style={styles.projectLine}>
            <Image
              source={ellipse}
              style={styles.ellipse}
              resizeMode="contain"
            />
            <View style={styles.staitLine} />
          </View>
          <Text style={styles.projectName}> {Name}</Text>
        </View>
        <View style={styles.rightWrapper}>
          <Text style={styles.viewDetailsText}> {viewDetails}</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.status}> {AssetCheckStatus}</Text>
        <Text style={styles.date}> {prepareDate()}</Text>
      </View>
    </View>
  );
};

export default ProjectTimeLine;
