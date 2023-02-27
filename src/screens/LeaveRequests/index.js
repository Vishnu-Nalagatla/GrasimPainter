import { FlatList, Image, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import bellImg from '../../assets/images/group/image.png';

import approveImg from '../../assets/images/approve/image.png';

import naImg from '../../assets/images/leaveDecline/decline.png';
import strings from '../../globalization';
import styles from './styles';
import { SFDC_API } from '../../requests';
import POPUP_CONSTANTS from '../../enums/popup';

const LeaveRequests = () => {
  const request = [
    {
      name: 'Ram Prakash',
      status: '',
      description: 'Fever',
      index: 1,
    },
    {
      name: 'Jai Kumar',
      status: '',
      description: 'Fever',
      index: 2,
    },
    {
      name: 'Govind Singh',
      status: '',
      description: 'Fever',
      index: 3,
    },
  ];
  const [leaves, setLeaves] = useState(request);
  const [popup, setPopup] = useState(undefined);

  const leaveClick = () => {
    console.info('onClick...');
  };

  useEffect(() => {
    setPopup({ type: POPUP_CONSTANTS.SPINNER_POPUP });

    SFDC_API.leaveApproveForTL('0051y000000NpxWAAS')
      .then(res => {
        debugger
        console.log('leave list resp->',res);
        setPopup(undefined);
      })
      .catch(error => {
        debugger
        const popupInfo = {
          type: POPUP_CONSTANTS.ERROR_POPUP,
          style: styles.popup,
          heading: 'Network Error',
          message: error.message,
          headingImage: errorImg,
          buttons: [
            {
              title: 'TryAgain',
              onPress: () => this.closePopup(),
            },
          ],
        };
        setPopup(popupInfo);
      });;
  }, [])

  const approveLeave = data => {
    console.info('declineLeave...', data);
    const { index } = data;
    const leavesUpdated = leaves.map(leave => {
      if (leave.index === index) {
        leave.status = strings.approved;
      }
      return leave;
    });
    setLeaves(leavesUpdated);
  };
  const declineLeave = data => {
    const { index } = data;
    const leavesUpdated = leaves.map(leave => {
      if (leave.index === index) {
        leave.status = strings.declined;
      }
      return leave;
    });
    setLeaves(leavesUpdated);
  };

  const getExtraInfo = leaveInfo => {
    const { description } = leaveInfo;
    console.info('description....', description);
    return (
      <View>
        <Text style={styles.leaveInfo}>{strings.getExtraInfo}</Text>
        <View style={styles.hrLine} />
        <View style={styles.description}>
          <Text style={styles.descriptionLabel}>{strings.description}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.hrLine} />
        <View>
          <Text style={styles.duration}>{'Wed, 3 Dec 1st Half'}</Text>
        </View>
      </View>
    );
  };

  const getLeaveInfo = leaveInfo => {
    const { description, status } = leaveInfo;
    console.info('description....', description);
    return (
      <View>
        <View style={styles.leaveStatus}>
          <Text style={styles.leaveInfo}>{strings.getExtraInfo}</Text>
          <Text
            style={
              status === strings.approved ? styles.approved : styles.declined
            }>
            {status}
          </Text>
        </View>
        <View style={styles.hrLine} />
      </View>
    );
  };

  const LeaveRequest = ({ data, onClick }) => {
    const { profilePic, name, status } = data;
    return (
      <View style={styles.leaveCard}>
        <View style={styles.headerInfo}>
          <View style={styles.rightInfo}>
            <Image
              source={bellImg}
              style={styles.profilePic}
              resizeMode="contain"
              alt=''
            />
            <Text style={styles.name}> {name} </Text>
          </View>
          {!status ? (
            <View style={styles.rightInfo}>
              <TouchableOpacity onPress={() => declineLeave(data)}>
                <Image
                  source={naImg}
                  style={styles.declineIcon}
                  resizeMode="contain"
                  alt=''
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => approveLeave(data)}>
                <Image
                  source={approveImg}
                  style={styles.approveIcon}
                  resizeMode="contain"
                  alt=''
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
        <View>{!status ? getExtraInfo(data) : getLeaveInfo(data)}</View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={leaves}
        keyExtractor={(item, index) => item.index}
        renderItem={({ item }) => (
          <LeaveRequest data={item} onClick={leaveClick} />
        )}
      />
    </SafeAreaView>
  );
};

export default LeaveRequests;
