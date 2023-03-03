import { FlatList, Image, ScrollView, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import complaintsImg from '../../assets/images/complaints/image.png';
import crewMemberImg from '../../assets/images/crewMember/image.png';
import leaveRequestImg from '../../assets/images/leaveRequest/image.png';
import materialRequestImg from '../../assets/images/materialRequest/image.png';

import newProjectAllocatedImg from '../../assets/images/newProjectAllocated/image.png';
import paymentsImg from '../../assets/images/payments/image.png';
import siteVisitImg from '../../assets/images/siteVisit/image.png';

import timeLineUpdateImg from '../../assets/images/timeLineUpdate/image.png';
import updatesImg from '../../assets/images/updates/image.png';
import colors from '../../constants/colors';
import { SFDC_API } from '../../requests';
import POPUP_CONSTANTS from '../../enums/popup';





import styles from './styles';
import StandardPopup from '../../components/Common/StandardPopup';

const Notifications = () => {
  const [popup, setPopup] = useState(undefined);
  const [notifications, setNotifications] = useState();

  useEffect(() => {
    getNotifications();
  }, []);


  const getPopupContent = () => {
    if (!popup) {
      return null;
    }
    switch (popup.type) {
      case POPUP_CONSTANTS.SPINNER_POPUP:
        return (
          <ActivityIndicator size="large" color={colors.primary} animating />
        );
      case POPUP_CONSTANTS.ERROR_POPUP:
        return <StandardPopup {...popup} />;
    }
  };

  const getNotifications = () => {
    const userId = '0051y00000MZkuVAAT';
    setPopup({ type: POPUP_CONSTANTS.SPINNER_POPUP });
    console.info('getNotifications...:123 ');
    SFDC_API.getNotifications(userId)
      .then(res => {
        console.info('getNotifications...: ', res.data);
      })
      .catch(error => {
        console.info('error...: ', error);
        setPopup({
          type: POPUP_CONSTANTS.ERROR_POPUP,
          heading: 'Network Error',
          message: error.message,
          popupStyle: styles.popupStyle,
          headingImage: errorImg,
          buttons: [
            {
              title: 'TryAgain',
              onPress: () => this.closePopup(),
            },
          ],
        });
      });
  }
  const notifications1 = [
    {
      type: 'complaint',
      message:
        'Ravi Kumar from The Mehtas has requested to change project timeline',
    },
    {
      type: 'paymentUpdate',
      message:
        'Team Lead Mukesh soni has asked to retake few images for The Mehtas - Living Room',
    },
    {
      type: 'projectUpdate',
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
      type: 'complaint',
      message:
        'Team Lead Mukesh soni has asked to retake few images for The Mehtas - Living Room',
    },
    {
      type: 'materialUpdates',
      message:
        'Team Lead Mukesh soni has asked to retake few images for The Mehtas - Living Room',
    },
    {
      type: 'newCrewMember',
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
      type: 'timeLineChange',
      message:
        'Team Lead Mukesh soni has asked to retake few images for The Mehtas - Living Room',
    },
  ];
  const imagesMap = new Map([
    ["complaint", complaintsImg],
    ["newCrewMember", crewMemberImg],
    ["leaveRequest", leaveRequestImg],

    ["materialUpdates", materialRequestImg],
    ["newProject", newProjectAllocatedImg],
    ["paymentUpdate", paymentsImg],

    ["siteVisit", siteVisitImg],
    ["timeLineChange", timeLineUpdateImg],
    ["projectUpdate", updatesImg],
  ]);

  const Notification = ({ notification }) => {
    const { type, message } = notification;
    const imageSrc = imagesMap.get(type);
    return (
      <View style={styles.notificationCard}>
        <View style={styles.notification}>
          <Image
            source={imageSrc}
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
          renderItem={({ item, index }) => (
            <Notification notification={item} index={index} />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Notifications;
