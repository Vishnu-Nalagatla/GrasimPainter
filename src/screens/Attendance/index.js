import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Moment from 'moment';
import bellImg from '../../assets/images/group/image.png';
import applyLeave from '../../assets/images/addLeave/image.png';
import {FlatList, Image} from 'native-base';
import RouteConfig from '../../constants/route-config';
import strings from '../../globalization';
import Popup from '../../components/Popup';
import POPUP_CONSTANTS from '../../enums/popup';
import colors from '../../constants/colors';
import StandardPopup from '../../components/Common/StandardPopup';

export interface Props {
  props: String;
}

const leaveRequests = 'Leave Requests';
const count = 98;
const date = Moment(new Date()).format('DD MMM YYYY');
// const [attendance, setAttendance] = useState(false);
// const attendanceLabel = attendance ? 'Marked' : 'Mark attendance';

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
    // this.fetchMyDayInfo();
  }

  showSpinner = () => {
    this.setState({
      popup: {type: POPUP_CONSTANTS.SPINNER_POPUP},
    });
  };

  closePopup = () => {
    this.setState({popup: undefined});
  };

  onAttendance = () => {
    this.setState({
      attendance: true,
      attendanceLabel: 'Marked',
    });
  };
  onLeaveRequest = () => {
    const {navigation} = this.props;
    navigation.navigate(RouteConfig.LeaveRequests);
  };

  applyLeave = () => {
    const {navigation} = this.props;
    navigation.navigate(RouteConfig.ApplyLeave);
  };

  getPopupContent = () => {
    const {popup} = this.state;

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
    const {reduxProps} = this.props;
    const {popup, attendance, attendanceLabel} = this.state;
    const {style = {}} = popup || {};
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
          onPress={this.onAttendance}
          style={attendance ? styles.attendanceMarked : styles.attendance}>
          <Image
            source={bellImg}
            style={styles.flagImg}
            alt=""
            resizeMode="contain"
          />
          <Text style={styles.attendanceLabel}> {attendanceLabel}</Text>
        </TouchableOpacity>
        <View style={styles.leaceRow}>
          <Text style={styles.leavesLabel}>{leave}</Text>
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
            renderItem={({item, index}) => (
              <LeaveCard leaveInfo={item} index={index} />
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

const LeaveCard = ({leaveInfo}) => {
  const {status, duration} = leaveInfo;
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
