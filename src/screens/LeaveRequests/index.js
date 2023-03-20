import {FlatList, Image, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import bellImg from '../../assets/images/group/image.png';

import approveImg from '../../assets/images/approve/image.png';

import naImg from '../../assets/images/leaveDecline/decline.png';
import strings from '../../globalization';
import styles from './styles';
import {API, SFDC_API} from '../../requests';
import POPUP_CONSTANTS from '../../enums/popup';
import util from '../../util';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const LeaveRequests = props => {
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
  const [leaveApprovalsData, setLeaveApprovalsData] = useState([]);

  const leaveClick = () => {
    console.info('onClick...', props);
  };

  useEffect(() => {
    setPopup({type: POPUP_CONSTANTS.SPINNER_POPUP});
    // debugger
    // SFDC_API.leaveApproveForTL('0051y000000NpxWAAS')
    //   .then(res => {
    //     debugger
    //     console.log('leave list resp->',res.data);
    //     setPopup(undefined);
    //   })
    //   .catch(error => {
    //     debugger
    //     const popupInfo = {
    //       type: POPUP_CONSTANTS.ERROR_POPUP,
    //       style: styles.popup,
    //       heading: 'Network Error',
    //       message: error.message,
    //       headingImage: errorImg,
    //       buttons: [
    //         {
    //           title: 'TryAgain',
    //           onPress: () => this.closePopup(),
    //         },
    //       ],
    //     };
    //     setPopup(popupInfo);
    //   });;
    const currentDate = util.currentDate();
    AsyncStorage.getItem('loggedInUser' + currentDate).then(user => {
      const parsedData = JSON.parse(user);
      const body = {
        infoId: JSON.parse(parsedData).infoId,
      };
      API.getLeavesApproval(body)
        .then(resp => {
          if (resp?.status == 200) {
            setLeaveApprovalsData(resp?.data);
          }
        })
        .catch(er => console.log(er, 'er of thr leave approvals'));
    });
  }, []);

  // updateLeaveStatus = () => {
  //   const {loggedInUser} = this.state;
  //   //FIXME:
  //   const {Id, Territory__c, roleKey = 'TeamLeadId'} = loggedInUser || {};
  //   const request = {
  //     userId: Id,
  //     role: roleKey,
  //     territoryid: Territory__c,
  //   };
  //   this.showSpinner();
  //   API.getMyDayInfo(request)
  //     .then(response => {
  //       console.info('response', response);
  //       this.setState({
  //         attendance: true,
  //         attendanceLabel: 'Marked',
  //       });
  //     })
  //     .catch(error => {
  //       this.setState({
  //         popup: {
  //           type: POPUP_CONSTANTS.ERROR_POPUP,
  //           heading: 'Network Error',
  //           message: error.message,
  //           popupStyle: styles.popupStyle,
  //           headingImage: errorImg,
  //           buttons: [
  //             {
  //               title: 'TryAgain',
  //               onPress: () => this.closePopup(),
  //             },
  //           ],
  //         },
  //       });
  //     });
  // };

  const approveLeave = data => {
    console.info('approveLeave: ', props);
    const {index} = data;
    const leavesUpdated = leaves.map(leave => {
      if (leave.index === index) {
        leave.status = strings.approved;
      }
      return leave;
    });
    setLeaves(leavesUpdated);
  };
  const declineLeave = data => {
    console.info('declineLeave: ', props);
    const {index} = data;
    const leavesUpdated = leaves.map(leave => {
      if (leave.index === index) {
        leave.status = strings.declined;
      }
      return leave;
    });
    setLeaves(leavesUpdated);
  };

  const leaveAction = (status, Id,uniqueId) => {
    const currentDate = util.currentDate();
    AsyncStorage.getItem('loggedInUser' + currentDate).then(user => {
      const parsedData = JSON.parse(user);
      // const body ={
      //   infoId:JSON.parse(parsedData).infoId
      // } ;
      const body = {
        Crew_Member__c: JSON.parse(parsedData).Id,
        Leave_Status__c: status,
        Unique_ID__c: uniqueId,
        Assigned_approvar_for_HP__c:
          JSON.parse(parsedData).role == 'Team Lead' ? Id : '',
        Assigned_approvar_for_painter__c:
          JSON.parse(parsedData).role == 'Team Lead' ? '' : Id,
      };
      SFDC_API.upsertLeaves(body)
        .then(resp => {
          console.log(resp, 'resp of the leave approvals');
          if (resp?.status == 200) {
            // setLeaveApprovalsData(resp?.data);
          }
        })
        .catch(er => console.log(er, 'er of thr leave approvals'));
    });
  };

  const getExtraInfo = leaveInfo => {
    // const {description} = leaveInfo;
    const {
      profilePic,
      name,
      status,
      Crew_Member_Name,
      LeaveDays,
      LeaveDesc,
      StartDateTime,
      EndDateTime,
    } = leaveInfo;
    const startDate = moment(StartDateTime).format('ddd, D MMM');
    const endDate = moment(EndDateTime).format('ddd, D MMM');
    return (
      <View>
        {/* <Text style={styles.leaveInfo}>{strings.getExtraInfo}</Text> */}
        <Text style={styles.leaveInfo}>{LeaveDays}</Text>
        <View style={styles.hrLine} />
        <View style={styles.description}>
          <Text style={styles.descriptionLabel}>{strings.description}</Text>
          <Text style={styles.description}>{LeaveDesc}</Text>
        </View>
        <View style={styles.hrLine} />
        <View>
          <Text style={styles.duration}>
            {StartDateTime == StartDateTime
              ? startDate
              : `${startDate}  -  ${endDate}`}
          </Text>
        </View>
      </View>
    );
  };

  const getLeaveInfo = leaveInfo => {
    const {description, status} = leaveInfo;
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

  const LeaveRequest = ({data, onClick}) => {
    const {
      profilePic,
      name,
      status,
      Crew_Member_Name,
      LeaveDays,
      LeaveDesc,
      StartDateTime,
      EndDateTime,
      Crew_Member_Id,
      Unique_ID__c
    } = data;
    console.log(data, 'leave requests@@##');
    return (
      <View style={styles.leaveCard}>
        <View style={styles.headerInfo}>
          <View style={styles.rightInfo}>
            <Image
              source={bellImg}
              style={styles.profilePic}
              resizeMode="contain"
              alt=""
            />
            <Text style={styles.name}> {Crew_Member_Name} </Text>
          </View>
          {!status ? (
            <View
            style={{
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'center'
            }}
            >
              <TouchableOpacity
                //  onPress={() => declineLeave(data)}
                onPress={() => leaveAction('Declined', Crew_Member_Id,Unique_ID__c)}>
                <Image
                  source={naImg}
                  style={{
                    // width:20,
                    // height:20,
                    marginTop:-10,
                    marginRight:12
                  }}
                  // style={styles.declineIcon}
                  // resizeMode="contain"
                  alt=""
                />
              </TouchableOpacity>
              <TouchableOpacity 
              // onPress={() => approveLeave(data)}
              onPress={() => leaveAction('Approved', Crew_Member_Id,Unique_ID__c)}
              
              >
                <Image
                  source={approveImg}
                  // style={styles.approveIcon}
                  // resizeMode="contain"
                  alt=""
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
        data={leaveApprovalsData}
        keyExtractor={(item, index) => item.index}
        renderItem={({item}) => (
          <LeaveRequest data={item} onClick={leaveClick} />
        )}
      />
    </SafeAreaView>
  );
};

export default LeaveRequests;
