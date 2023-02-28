import React, {useState, useEffect} from 'react';
import {Container, Content, FlatList, ScrollView} from 'native-base';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

import bellImg from '../../assets/images/group/image.png';
import profileImg from '../../assets/images/profileColor/image.png';
import locationImg from '../../assets/images/location/image.png';
import rightArrowImg from '../../assets/images/rightArrowBlack/image.png';

import colors from '../../constants/colors';
import Moment from 'moment';
import CustomButton from '../../components/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import ViewPort from '../../constants/view-port';
import ProgressPercentage from '../../components/ProgressPercentage';
import RouteConfig from '../../constants/route-config';

const ProjectProgress = props => {
  const {project={}, loggedInUser = {}} = props;
  const {
    ProjectStartDate,
    ProjectEndDate,
    CompletionPercentage,
    Address,
    paymentInfo = '1st payment received',
    SiteMaterialStorage,
    SiteWaterAvailability,
  } = project || {};
  const {roleKey = 'TeamLeadId'} = loggedInUser || {};
  const startDate = Moment(ProjectStartDate).format('DD MMM YYYY');
  const endDate = Moment(ProjectEndDate).format('DD MMM YYYY');

  const onPress = () => {
    console.info('project..');
  };
  const viewCustomerProfile = () => {
    const {navigation} = props;
    navigation.navigate(RouteConfig.ClinetInfo);
  };
  const constraints = [
    {
      key: 'Space required for material movement',
      value: SiteMaterialStorage == 'Yes' ? 'Available' : 'Not Available',
    },
    {
      key: 'Access to washroom',
      value: SiteWaterAvailability,
    },
  ];
  const tabList = [
    {
      key: 'material',
      value: 'Material',
      tabIndex: 2,
    },
    {
      key: 'crewDetails',
      value: 'Crew Details',
      tabIndex: 0,
    },
    {
      key: 'siteChecklist',
      value: 'Site Checklist',
      tabIndex: 4,
    },
    {
      key: 'timeline',
      value: 'Timeline',
      tabIndex: 1,
    },
    {
      key: 'reports',
      value: 'Reports',
      tabIndex: 3,
    },
    {
      key: 'projectInfo',
      value: 'Project Info',
      tabIndex: 5,
    },
  ];

  const projectConstraints = 'Project Constraints';

  const getProgressInfo = () => {
    return (
      <View style={styles.progressInfo}>
        <View style={styles.header}>
          <Text style={styles.label}>Project Palnning</Text>
          <TouchableOpacity onPress={viewCustomerProfile}>
            <Image
              source={profileImg}
              style={styles.profileIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <ProgressPercentage value={CompletionPercentage.split('.')[0]} />
        <View style={styles.duration}>
          <View style={styles.startDate}>
            <Image
              source={bellImg}
              style={styles.profileIcon}
              resizeMode="contain"
            />
            <Text>{startDate} </Text>
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
              source={bellImg}
              style={styles.profileIcon}
              resizeMode="contain"
            />
            <Text>{endDate} </Text>
          </View>
        </View>
        <View style={styles.paymentInfo}>
          <Text style={styles.paymentInfoLabel}> {paymentInfo}</Text>
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
            source={locationImg}
            style={styles.locationIcon}
            resizeMode="contain"
          />
          <Text style={styles.address}>{Address}</Text>
        </View>
      </View>
    );
  };

  const getProjectConstraints = () => {
    return (
      <View style={styles.projectConstraintsWrapper}>
        <Text style={styles.projectConstraintsLabel}>{projectConstraints}</Text>
        {constraints.map((info, index) => {
          const styleInfo =
            index % 2 === 0 ? styles.constraintInfo : styles.constraintInfoOdd;
          return (
            <View style={styleInfo}>
              <Text style={styles.constraintKey}>{info.key}</Text>
              <Text style={styles.constraintValue}>{info.value}</Text>
            </View>
          );
        })}
      </View>
    );
  };
  const onTabPress = item => {
    // alert(JSON.stringify(item));
  };
  const getTabs = () => {
    return (
      <SafeAreaView style={styles.tabView}>
        <FlatList
          data={tabList}
          contentContainerStyle={styles.itemView}
          keyExtractor={(item, index) => item.key}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                onTabPress(item);
              }}
              style={styles.navitem}>
              <Text style={styles.tabItem}>{item.value}</Text>
              <Image
                source={rightArrowImg}
                style={styles.arrowIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {getProgressInfo()}
      {getProjectConstraints()}
      {getTabs()}
    </ScrollView>
  );
};

export default ProjectProgress;
