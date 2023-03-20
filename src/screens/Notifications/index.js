import { FlatList, Image, ScrollView, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';

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
import Popup from '../../components/Popup';
import RouteConfig from '../../constants/route-config';

const Notifications = (props) => {


  const notifications1 = [
    {
      type: 'complaint',
      id: '0051y00000MZkuVAAT',
      message:
        'Ravi Kumar from The Mehtas has requested to change project timeline',
    },
    {
      type: 'paymentUpdate',
      id: '0051y00000MZkuVAAT',
      message:
        'Team Lead Mukesh soni has asked to retake few images for The Mehtas - Living Room',
    },
    {
      type: 'projectUpdate',
      id: '0051y00000MZkuVAAT',
      message:
        'The Mehtas are now have a updated timeline. Please check what are next items.',
    },
    {
      type: 'newProject',
      id: '0051y00000MZkuVAAT',
      message:
        'New Project “The Mehtas” has been assigned to you. Tap to view the details',
    },
    {
      type: 'leaveRequest',
      id: '0051y00000MZkuVAAT',
      message: 'Leave request from Painter Ravi Verma for 3 days',
    },
    {
      type: 'leaveRequest',
      id: '0051y00000MZkuVAAT',
      message: 'Leave request from Painter Ravi Verma for 3 days',
    },
    {
      type: 'complaint',
      id: '0051y00000MZkuVAAT',
      message:
        'Team Lead Mukesh soni has asked to retake few images for The Mehtas - Living Room',
    },
    {
      type: 'materialUpdates',
      id: '0051y00000MZkuVAAT',
      message:
        'Team Lead Mukesh soni has asked to retake few images for The Mehtas - Living Room',
    },
    {
      type: 'newCrewMember',
      id: '0051y00000MZkuVAAT',
      message: 'Leave request from Painter Ravi Verma for 3 days',
    },
    {
      type: 'leaveRequest',
      id: '0051y00000MZkuVAAT',
      message: 'Leave request from Painter Ravi Verma for 3 days',
    },
    {
      type: 'siteVisit',
      id: '0051y00000MZkuVAAT',
      message:
        'Team Lead Mukesh soni has asked to retake few images for The Mehtas - Living Room',
    },
    {
      type: 'timeLineChange',
      id: '0051y00000MZkuVAAT',
      message:
        'Team Lead Mukesh soni has asked to retake few images for The Mehtas - Living Room',
    },
  ];

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

  const closePopup = () => {
    setPopup(undefined);
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
              onPress: () => closePopup(),
            },
          ],
        });
      });
  }

  const updateNotification = (notification) => {
    const { id = 'a0x1y000000EYZsAAO' } = notification;
    setPopup({ type: POPUP_CONSTANTS.SPINNER_POPUP });
    const request = {
      Is_Read__c: true,
    };
    SFDC_API.updateNotification(request, id)
      .then(res => {
        const { type } = notification;
        const { navigation } = props;
        const route = routeMap.get(type);
        navigation.navigate(route);
      })
      .catch(error => {
        setPopup({
          type: POPUP_CONSTANTS.ERROR_POPUP,
          heading: 'Network Error',
          message: error.message,
          popupStyle: styles.popupStyle,
          headingImage: errorImg,
          buttons: [
            {
              title: 'TryAgain',
              onPress: () => closePopup(),
            },
          ],
        });
      });
  }

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
  const routeMap = new Map([
    ["complaint", RouteConfig.MyDay],
    ["newCrewMember", RouteConfig.MyDay],
    ["leaveRequest", RouteConfig.LeaveRequests],

    ["materialUpdates", RouteConfig.ProfileProjects],
    ["newProject", newProjectAllocatedImg],
    ["paymentUpdate", paymentsImg],

    ["siteVisit", RouteConfig.MyDay],
    ["timeLineChange", RouteConfig.LeaveRequests],
    ["projectUpdate", RouteConfig.LeaveRequests],
  ]);

  const Notification = ({ notification, onPress }) => {
    const { type, message } = notification;
    const imageSrc = imagesMap.get(type);
    return (
      <TouchableOpacity style={styles.notificationCard} onPress={() => onPress(notification)}>
        <View style={styles.notification}>
          <Image
            source={imageSrc}
            style={styles.notifiaftionImg}
            resizeMode="contain"
          />
          <Text style={styles.notifiaftionLable}>{message}</Text>
        </View>
        <Text style={styles.time}>{'9 hours ago'}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Popup visible={!!popup} onPress={closePopup}>
        {getPopupContent()}
      </Popup>
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <FlatList
          data={notifications}
          keyExtractor={(item, index) => item.index}
          renderItem={({ item, index }) => (
            <Notification notification={item} onPress={updateNotification} index={index} />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Notifications;
