import React from 'react';
import {Container, Content, FlatList, ScrollView} from 'native-base';
import {Image, View, Text} from 'react-native';
import styles from './styles';
import bellImg from '../../assets/images/group/image.png';
import colors from '../../constants/colors';
import Moment from 'moment';
import CustomButton from '../../components/Button';
import {SafeAreaView} from 'react-native-safe-area-context';

console.log('styles', styles);

const ProjectProgress = props => {
  const {
    ProjectStartDate = '2022-08-19',
    ProjectEndDate = '2022-09-19',
    onPress,
    paymentInfo = '1st payment received',
    address = '101 Dr V B Gandhi Marg Hutatma Chowk, Mumbai, 400023',
  } = props;
  const startDate = Moment(ProjectStartDate).format('DD MMM YYYY');
  const endDate = Moment(ProjectEndDate).format('DD MMM YYYY');

  const constraints = [
    {
      key: 'Space required for material movement',
      value: 'Available',
    },
    {
      key: 'Access to washroom',
      value: 'Yes',
    },
  ];

  const tabList = [
    {
      key: 'material',
      value: 'Material',
    },
    {
      key: 'crewDetails',
      value: 'Crew Details',
    },
    {
      key: 'siteChecklist',
      value: 'Site Checklist',
    },
    {
      key: 'timeline',
      value: 'Timeline',
    },
    {
      key: 'reports',
      value: 'Reports',
    },
    {
      key: 'projectInfo',
      value: 'Project Info',
    },
  ];

  const projectConstraints = 'Project Constraints';

  const getProgressInfo = () => {
    return (
      <View style={styles.progressInfo}>
        <View style={styles.header}>
          <Text> Project Palnning</Text>
          <Image
            source={bellImg}
            style={styles.profileIcon}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text> ProgressBar </Text>
        </View>
        <View style={styles.duration}>
          <View style={styles.startDate}>
            <Image
              source={bellImg}
              style={styles.profileIcon}
              resizeMode="contain"
            />
            <Text> {startDate} </Text>
          </View>
          <Text style={styles.dotted}> - - - - - </Text>
          <View style={styles.endDate}>
            <Image
              source={bellImg}
              style={styles.profileIcon}
              resizeMode="contain"
            />
            <Text> {endDate} </Text>
          </View>
        </View>
        <View style={styles.paymentInfo}>
          <Text> {paymentInfo}</Text>
        </View>
        <CustomButton
          title={'Create Project plan'}
          textStyle={[styles.btnTxt]}
          style={[styles.button]}
          onPress={onPress}
        />
        <View style={styles.hrLine} />
        <View style={styles.addressinfo}>
          <Image
            source={bellImg}
            style={styles.locationIcon}
            resizeMode="contain"
          />
          <Text style={styles.address}> {address}</Text>
        </View>
      </View>
    );
  };

  const getProjectConstraints = () => {
    return (
      <View style={styles.projectConstraintsWrapper}>
        <Text style={styles.projectConstraintsLabel}>{projectConstraints}</Text>
        {constraints.map(info => {
          return (
            <View style={styles.constraintInfo}>
              <Text style={styles.constraintKey}>{info.key} </Text>
              <Text style={styles.constraintValue}>{info.value} </Text>
            </View>
          );
        })}
      </View>
    );
  };

  const getTabs = () => {
    return (
      <SafeAreaView style={styles.tabView}>
        <FlatList
          data={tabList}
          contentContainerStyle={styles.itemView}
          keyExtractor={(item, index) => item.key}
          renderItem={({item}) => (
            <View style={styles.navitem}>
              <Text style={styles.tabItem}>{item.value}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {getProgressInfo()}
      {getProjectConstraints()}
      {getTabs()}
    </ScrollView>
  );
};

export default ProjectProgress;
