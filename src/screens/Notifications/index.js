import {FlatList, Image, ScrollView, Text} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import complaintsImg from '../../assets/images/complaints/image.png';

import styles from './styles';

const Notifications = () => {
  const notifications = [
    {
      type: 'complaint',
      message:
        'Ravi Kumar from The Mehtas has requested to change project timeline',
    },
    {
      type: 'complaint',
      message:
        'The Mehtas are now have a updated timeline. Please check what are next items.',
    },
    {
      type: 'newProject',
      message:
        'New Project “The Mehtas” has been assigned to you. Tap to view the details',
    },
    {
      type: 'leaveRequest',
      message: 'Leave request from Painter Ravi Verma for 3 days',
    },
    {
      type: 'leaveRequest',
      message: 'Leave request from Painter Ravi Verma for 3 days',
    },
    {
      type: 'siteVisit',
      message:
        'Team Lead Mukesh soni has asked to retake few images for The Mehtas - Living Room',
    },
    {
      type: 'siteVisit',
      message:
        'Team Lead Mukesh soni has asked to retake few images for The Mehtas - Living Room',
    },
    {
      type: 'leaveRequest',
      message: 'Leave request from Painter Ravi Verma for 3 days',
    },
    {
      type: 'leaveRequest',
      message: 'Leave request from Painter Ravi Verma for 3 days',
    },
    {
      type: 'siteVisit',
      message:
        'Team Lead Mukesh soni has asked to retake few images for The Mehtas - Living Room',
    },
    {
      type: 'siteVisit',
      message:
        'Team Lead Mukesh soni has asked to retake few images for The Mehtas - Living Room',
    },
  ];
  const Notification = ({notification}) => {
    const {type, message} = notification;
    return (
      <View style={styles.notificationCard}>
        <View style={styles.notification}>
          <Image
            source={complaintsImg}
            style={styles.notifiaftionImg}
            resizeMode="contain"
          />
          <Text style={styles.notifiaftionLable}>{message}</Text>
        </View>
        <Text style={styles.time}>{'9 hours ago'}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <FlatList
          data={notifications}
          keyExtractor={(item, index) => item.index}
          renderItem={({item, index}) => (
            <Notification notification={item} index={index} />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Notifications;
