import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styeles';
import ellipse from '../../../assets/images/ellipse/image.png';
import {Image} from 'react-native';
import Moment from 'moment';
import CustomButton from '../Button';

const ProjectTimeLine = (props: Props) => {
  const {data, onClick} = props;
  const {Name, AssetCheckStatus, ProjectStartDate} = data;
  const viewDetails = 'View Details';

  const prepareDate = () => {
    const date = Moment(ProjectStartDate).format('DD MMMM YYYY');
    return `Starting on ${date}`;
  };
  const onPress = data => {
    console.info('onPress data....');
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
        <TouchableOpacity style={styles.rightWrapper} onPress={onClick}>
          <Text style={styles.viewDetailsText}> {viewDetails}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.status}> {AssetCheckStatus}</Text>
        <Text style={styles.date}> {prepareDate()}</Text>
        <Text style={styles.date}>
          <Text style={styles.viewDetailsText}> {'Call Mr. Rajesh'}</Text>
        </Text>
        <View>
          <CustomButton
            title={AssetCheckStatus}
            textStyle={[styles.btnTxt]}
            style={[styles.button]}
            onPress={onPress}
          />
        </View>
      </View>
    </View>
  );
};

export default ProjectTimeLine;
