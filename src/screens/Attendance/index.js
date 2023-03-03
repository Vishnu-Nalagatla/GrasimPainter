import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import Moment from 'moment';
import attendanceIcon from '../../assets/images/attendence/attendance.png';
import markedAttendanceIcon from '../../assets/images/attendence/markedAttendence.png';
import applyLeave from '../../assets/images/addLeave/image.png';
import { FlatList, Image } from 'native-base';
import RouteConfig from '../../constants/route-config';
import strings from '../../globalization';
import Popup from '../../components/Popup';
import POPUP_CONSTANTS from '../../enums/popup';
import colors from '../../constants/colors';
import StandardPopup from '../../components/Common/StandardPopup';
import util from '../../util';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API } from '../../requests';

export interface Props {
  props: String;
}

const leaveRequests = 'Leave Requests';
const count = 98;
const date = Moment(new Date()).format('DD MMM YYYY');
const leaves = [
  {
    date: '',
    status: 'APPROVED',
    type: '',
    duration: 'Full Day',
    index: 1,
  },
  {
    date: '',
    status: 'DECLINED',
    type: '',
    duration: 'Half Day',
    index: 2,
  },
  {
    date: '',
    status: 'APPROVED',
    type: '',
    duration: 'Full Day',
    index: 3,
  },
  {
    date: '',
    status: 'APPROVED',
    type: '',
    duration: 'Half Day',
    index: 4,
  },
  {
    date: '',
    status: 'DECLINED',
    type: '',
    duration: 'Half Day',
    index: 5,
  },
];
const leavesLable = 'Leaves';
const balanceLabel = 'Balance';
const balanceCount = 5;
class Attendance extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      popup: undefined,
      attendance: false,
      attendanceLabel: 'Mark attendance',
    };
  }

  componentDidMount() {
    const currentDate = util.currentDate();
    AsyncStorage.getItem('loggedInUser' + currentDate).then(user => {
      this.setState(
        {
          loggedInUser: JSON.parse(user),
        },
        () => {
          // this.fetchAttendanceInfo(JSON.parse(user));
        },
      );
    });
  }
  fetchAttendanceInfo = user => {
    const loggedInUser = JSON.parse(user);
    //FIXME:
    const {Id, Territory__c, roleKey = 'TeamLeadId'} = loggedInUser || {};
    const request = {
      userId: Id,
      role: roleKey,
      territoryid: Territory__c,
    };
    this.showSpinner();
    API.getMyDayInfo(request)
      .then(response => {
        const {data} = response;
        const myDayInfo = data.response;
        this.closePopup();
        this.setState({
          myDayInfo,
        });
      })
      .catch(error => {
        this.setState({
          popup: {
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
          },
        });
      });
  };

  showSpinner = () => {
    this.setState({
      popup: { type: POPUP_CONSTANTS.SPINNER_POPUP },
    });
  };

  closePopup = () => {
    this.setState({ popup: undefined });
  };

  updateAttendance = () => {
    const { loggedInUser } = this.state;
    //FIXME:
    const {Id, Territory__c, roleKey = 'TeamLeadId'} = loggedInUser || {};
    const request = {
      userId: Id,
      role: roleKey,
      territoryid: Territory__c,
    };
    this.showSpinner();
    API.getMyDayInfo(request)
      .then(response => {
        console.info('response', response);
        this.setState({
          attendance: true,
          attendanceLabel: 'Marked',
        });
      })
      .catch(error => {
        this.setState({
          popup: {
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
          },
        });
      });
  };

  onLeaveRequest = () => {
    const { navigation } = this.props;
    navigation.navigate(RouteConfig.LeaveRequests);
  };

  applyLeave = () => {
    const { navigation } = this.props;
    navigation.navigate(RouteConfig.ApplyLeave);
  };

  getPopupContent = () => {
    const { popup } = this.state;

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
  render() {
    const { reduxProps } = this.props;
    const { popup, attendance, attendanceLabel } = this.state;
    console.log('attendance->', attendance);
    const { style = {} } = popup || {};
    return (

      <View style={styles.container}>
        <Popup popupStyle={style} visible={!!popup}>
          {this.getPopupContent()}
        </Popup>
        <TouchableOpacity style={styles.header} onPress={this.onLeaveRequest}>
          <Text style={styles.leaveRequestlabel}>{leaveRequests}</Text>
          <Text style={styles.leaveRequestCount}>{count}</Text>
        </TouchableOpacity>
        <Text style={styles.date}>{date} </Text>
        <TouchableOpacity
          disabled={attendance}
          onPress={this.updateAttendance}
          style={attendance ? styles.attendanceMarked : styles.attendance}>
          <Image
            source={attendance ? markedAttendanceIcon : attendanceIcon}
            key={this.state.attendance}
            style={styles.flagImg}
            alt=""
            resizeMode="contain"
          />
          <Text style={styles.attendanceLabel}> {attendanceLabel}</Text>
        </TouchableOpacity>
        <View style={styles.leaceRow}>
          <Text style={styles.leavesLabel}>{leavesLable}</Text>
          {/* NOTE: balanceCount not required: Figma updated  */}
          {/* <View style={styles.balanceRow}>
            <Text style={styles.balanceLabel}>{balanceLabel}</Text>
            <Text style={styles.balanceLabel}>{balanceCount}</Text>
          </View> */}
        </View>
        <View style={styles.leaceRow}>
          <Text style={styles.allLabel}>{'All'}</Text>
          <TouchableOpacity onPress={this.applyLeave}>
            <Image
              source={applyLeave}
              style={styles.applyImg}
              alt=""
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.leavesWrapper}>
          <FlatList
            data={leaves}
            keyExtractor={(item, index) => item.index}
            renderItem={({ item, index }) => (
              <LeaveCard leaveInfo={item} index={index} />
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

const LeaveCard = ({ leaveInfo }) => {
  const { status, duration } = leaveInfo;
  return (
    <View style={styles.leaveCard}>
      <View style={styles.leavesHeader}>
        <Text style={styles.duration}>{duration}</Text>
        <Text
          style={
            status === strings.approved ? styles.approved : styles.declined
          }>
          {status}
        </Text>
      </View>

      <View style={styles.leavesBottom}>
        <Text style={styles.dateRange}> {status}</Text>
      </View>
    </View>
  );
};
export default Attendance;
