import { View } from 'native-base';
import React from 'react';
import { Image, Text } from 'react-native';
import styles from './styles';
import flagImg from '../../assets/images/profileColor/flag.png';
import timeImg from '../../assets/images/myProjects/time.png';
import locationImg from '../../assets/images/location/image.png';

class ProfileProjectDetails extends React.Component {
  getProjectDetails = () => {
    const { route } = this.props;
    const { params } = route;
    const { project } = params;
    return (
      <View style={styles.projectWrapper}>
        <View style={styles.odd}>
          <Text style={styles.key}>Onsite Crew</Text>
          <Text style={styles.value}>{project.OnSiteCrew} </Text>
        </View>
        <View style={styles.even}>
          <Text style={styles.key}>Project Duration</Text>
          <Text style={styles.value}>{project.ProjectDuration} </Text>
        </View>
        <View style={styles.odd}>
          <Text style={styles.key}>NPS Score</Text>
          <Text style={styles.value}>{project.NPSScore} </Text>
        </View>
        <View style={[styles.even, styles.column]}>
          <Text style={styles.category}>Product Category</Text>
          {project.productCategory?.map(category => {
            return <Text style={styles.category}>{category} </Text>;
          })}
        </View>
        <View style={[styles.odd, styles.column]}>
          <Text style={styles.feedback}>Customer Feedback</Text>
          <Text style={[styles.category, styles.bottom]}>
            {project.CustomerFeedback}{' '}
          </Text>
        </View>
      </View>
    );
  };

  render() {
    const { route } = this.props;
    const { params } = route;
    const { project } = params;
    const {
      ProjectStartDate,
      ProjectEndDate,
      address = '101 Dr V B Gandhi Marg Hutatma Chowk, Mumbai, 400023',
    } = project || {};
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.duration}>
            <View style={styles.startDate}>
              <Image
                source={timeImg}
                style={styles.profileIcon}
                resizeMode="contain"
              />
              <Text style={styles.startDateText}> {ProjectStartDate} </Text>
            </View>
            <Text style={styles.dotted}> </Text>
            <Text style={styles.dotted}> </Text>
            <Text style={styles.dotted}> </Text>
            <Text style={styles.dotted}> </Text>
            <Text style={styles.dotted}> </Text>
            <Text style={styles.dotted}> </Text>
            <Text style={styles.dotted}> </Text>
            <Text style={styles.dotted}> </Text>
            <View style={styles.endDate}>
              <Image
                source={flagImg}
                style={styles.profileIcon}
                resizeMode="contain"
              />
              <Text style={styles.startDateText}> {ProjectEndDate} </Text>
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
          {this.getProjectDetails()}
        </View>
      </View>
    );
  }
}

export default ProfileProjectDetails;

