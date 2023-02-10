import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Moment from 'moment';
import bellImg from '../../assets/images/group/image.png';
import {FlatList, Image} from 'native-base';
import RouteConfig from '../../constants/route-config';
import strings from '../../globalization';

export interface Props {
  props: String;
}

const Attendance = (props: Props) => {
  const leaveRequests = 'Leave Requests';
  const count = 98;
  const date = Moment(new Date()).format('DD MMM YYYY');
  const [attendance, setAttendance] = useState(false);
  const attendanceLabel = attendance ? 'Marked' : 'Mark attendance';

  // const approved = 'APPROVED';
  // const declined = 'DECLINED';
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
    {
      date: '',
      status: 'APPROVED',
      type: '',
      duration: 'Full Day',
      index: 6,
    },
    {
      date: '',
      status: 'DECLINED',
      type: '',
      duration: 'Half Day',
      index: 7,
    },
    {
      date: '',
      status: 'APPROVED',
      type: '',
      duration: 'Full Day',
      index: 8,
    },
    {
      date: '',
      status: 'DECLINED',
      type: '',
      duration: 'Half Day',
      index: 9,
    },
    {
      date: '',
      status: 'APPROVED',
      type: '',
      duration: 'Full Day',
      index: 10,
    },
    {
      date: '',
      status: 'DECLINED',
      type: '',
      duration: 'Full Day',
      index: 11,
    },
    {
      date: '',
      status: 'APPROVED',
      type: '',
      duration: 'Half Day',
      index: 12,
    },
  ];
  const leave = 'Leaves';
  const onAttendance = () => {
    setAttendance(true);
  };
  const onLeaveRequest = () => {
    console.info('onLeaveRequest..');
    const {navigation} = props;
    navigation.navigate(RouteConfig.LeaveRequests);
  };

  const LeaveCard = ({leave}) => {
    const {status, duration} = leave;
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

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={onLeaveRequest}>
        <Text style={styles.leaveRequestlabel}>{leaveRequests}</Text>
        <Text style={styles.leaveRequestCount}>{count}</Text>
      </TouchableOpacity>
      <Text style={styles.date}>{date} </Text>
      <TouchableOpacity
        disabled={attendance}
        onPress={onAttendance}
        style={attendance ? styles.attendanceMarked : styles.attendance}>
        <Image
          source={bellImg}
          style={styles.flagImg}
          alt=""
          resizeMode="contain"
        />
        <Text style={styles.attendanceLabel}> {attendanceLabel}</Text>
      </TouchableOpacity>
      <Text style={styles.leavesLabel}>{leave}</Text>
      <ScrollView style={styles.leavesWrapper}>
        <FlatList
          data={leaves}
          keyExtractor={(item, index) => item.index}
          renderItem={({item, index}) => (
            <LeaveCard leave={item} index={index} />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Attendance;
