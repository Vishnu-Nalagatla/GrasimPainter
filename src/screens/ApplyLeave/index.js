import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './styles';
import ellipse from '../../assets/images/ellipse/image.png';
import CalendarPicker from 'react-native-calendar-picker';
import Popup from '../../components/Popup';
import POPUP_CONSTANTS from '../../enums/popup';
import strings from '../../constants/strings';
import CustomButton from '../../components/Button';
import prevDateImg from '../../assets/images/attendanceColor/prevDate.png';
import nextDateImg from '../../assets/images/calendar/calendarRightArrow.png';
import leaveSuccesIcon from '../../assets/images/addLeave/leaveSuccesIcon.png';
import colors from '../../constants/colors';
import { API, SFDC_API } from '../../requests';
import errorImg from '../../assets/images/error/image.png';
import { ScrollView } from 'native-base';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import util from '../../util';



const halfDay = [
  { label: 'First Half', value: '1' },
  { label: 'Second Half', value: '2' },
];

// “First Half/Second Half/Full Day”,

const ApplyLeave = () => {
  const [leaveType, setLeaveType] = useState(null);
  const [description, setDescription] = useState('');
  const [fromHalfDay, setFromHalfDay] = useState(null);
  const [toHalfDay, setToHalfDay] = useState(null);
  const [selectedFromDate, setSelectedFromDate] = useState('');
  const [selectedToDate, setSelectedToDate] = useState('');
  const [popup, setPopup] = useState(undefined);

  const [showFromDayCalendar, setFromDayCalendar] = useState(false);
  const [showToDayCalendar, setToDayCalendar] = useState(false);
  const [leaveAppliedSuccess, setLeaveAppliedSuccess] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState();

  useEffect(() => {
    setLeaveAppliedSuccess(false);
    const currentDate = util.currentDate();
    AsyncStorage.getItem('loggedInUser' + currentDate).then(user => {
      console.log('loggedInUser->', JSON.parse(user));
      setLoggedInUser(JSON.parse(user));
    });
  }, []);
  useEffect(() => {
    if (leaveAppliedSuccess) {
      setTimeout(() => {
        setLeaveAppliedSuccess(false);
      }, 2000);
    }

  }, [leaveAppliedSuccess])
  const renderLabel = () => {
    if (leaveType) {
      return (
        <Text style={[styles.selectedTextStyle, styles.label]}>Leave Type</Text>
      );
    }
    return null;
  };

  const renderHalfDayLabel = () => {
    if (
      !popup ||
      (popup &&
        popup.type !== POPUP_CONSTANTS.SHOW_START_DATE_CALENDAR &&
        popup.type !== POPUP_CONSTANTS.SHOW_END_DATE_CALENDAR)
    ) {
      return (
        <Text style={[styles.selectedTextStyle, styles.halfDayLabel]}>
          Half
        </Text>
      );
    }
    return null;
  };

  const onStartDateChange = date => {
    const selectedDate = new Date(date);
    var formatDate =
      selectedDate.getDate() +
      ' ' +
      selectedDate.toString().substr(4, 3) +
      ' ' +
      selectedDate.getFullYear();
    setSelectedFromDate(formatDate);
    setFromDayCalendar(false);
  };

  const onEndDateChange = date => {
    const selectedDate = new Date(date);
    var formatDate =
      selectedDate.getDate() +
      ' ' +
      selectedDate.toString().substr(4, 3) +
      ' ' +
      selectedDate.getFullYear();
    setSelectedToDate(formatDate);
    setToDayCalendar(false);
  };

  const showCalendar = openStartDate => {
    if (openStartDate) {
      setFromDayCalendar(true);
    } else {
      setToDayCalendar(true);
    }
  };

  const getPopupContent = () => {
    if (!popup) {
      return null;
    }
    switch (popup.type) {
      case POPUP_CONSTANTS.SPINNER_POPUP:
        return (
          <ActivityIndicator size="large" color={colors.primary} animating />
        );
    }
  };

  const getPreviousComponent = () => {
    return (
      <View style={[styles.buttonStyle, { marginLeft: 10, margin: 0 }]}>
        <Image
          source={prevDateImg}
          style={styles.imgStyle}
          resizeMode="contain"
        />
      </View>
    );
  };

  const getNextComponent = () => {
    return (
      <View style={[styles.buttonStyle, { marginRight: 10, margin: 0 }]}>
        <Image
          source={nextDateImg}
          style={styles.imgStyle}
          resizeMode="contain"
        />
      </View>
    );
  };

  // const getPopupStyle = () => {
  //   let popupStyle = {};
  //   if (
  //     popup &&
  //     (popup.type === POPUP_CONSTANTS.SHOW_START_DATE_CALENDAR ||
  //       popup.type === POPUP_CONSTANTS.SHOW_END_DATE_CALENDAR)
  //   ) {
  //     popupStyle = styles.calendarStyle;
  //   }
  //   return popupStyle;
  // };
  const applyLeave = () => {
    if (
      description &&
      selectedFromDate &&
      selectedToDate &&
      fromHalfDay &&
      toHalfDay
    ) {
      const fromDate = moment(selectedFromDate).format('YYYY-MM-DD');
      const toDate = moment(selectedToDate).format('YYYY-MM-DD');
      const uniqueID = moment(new Date()).format('YYYY-MM-DD-HH:mm')
      const request = {
        OwnerId: JSON.parse(loggedInUser).Id,
        Type: 'Leave',
        Subject: 'Leave',
        Operation_Type__c: 'Leave',
        Leave_Description__c: description,
        Leave_Type__c: 'Sick',
        StartDateTime: fromDate,
        EndDateTime: toDate,
        Start_Leave_Portion__c: fromHalfDay,
        End_Leave_Portion__c: toHalfDay,
        Unique_ID__c: uniqueID,
        infoId: JSON.parse(loggedInUser).infoId,
      };
      setPopup({ type: POPUP_CONSTANTS.SPINNER_POPUP });
      API.applyLeave(request)
        .then(resp => {
          if (resp.status == 200) {
            setLeaveAppliedSuccess(true);
          }
          this.closePopup()
        })
        .catch(error => {
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
      // SFDC_API.upsertUserLeaves(request)
      //   .then(res => {
      //     setPopup(undefined);
      //     console.log(res,'resp of apply leave')
      //     if (res.data === 'Success') {
      //       setLeaveAppliedSuccess(true);
      //     }
      //   })
      //   .catch(error => {
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
      //   });
    }
  };

  const invokeApplyLeave = () => {
    if (
      description &&
      selectedFromDate &&
      selectedToDate &&
      fromHalfDay &&
      toHalfDay
    ) {
      const fromDate = moment(selectedFromDate).format('yyyy-MM-DD');
      const toDate = moment(selectedToDate).format('yyyy-MM-DD');
      let request = [];
      if (moment(selectedToDate).diff(moment(selectedFromDate), 'days') < 0) {
        //To Do Need to add validation "to date should be getterthen from date"
      } else if (
        moment(selectedToDate).diff(moment(selectedFromDate), 'days') === 0
      ) {
        // debugger;
        let leavePortion = halfDay.find(
          item => item.value === fromHalfDay,
        ).label;
        let toPortion = halfDay.find(item => item.value === toHalfDay).label;
        let fromLeaveDate = prepareReqObj(fromDate, leavePortion);
        let toLeaveDate = prepareReqObj(fromDate, toPortion);
        request.push(fromLeaveDate);
        request.push(toLeaveDate);
      } else {
        let daysDiff = moment(selectedToDate).diff(
          moment(selectedFromDate),
          'days',
        );
        console.log(daysDiff);
        let newDate = moment(selectedFromDate);
        for (let i = 0; i <= daysDiff; i++) {
          // debugger;
          const fromDate = newDate.format('yyyy-MM-DD-h:mm:ss');
          let leavePortion = '';
          if (i == 0) {
            leavePortion = halfDay.find(
              item => item.value === fromHalfDay,
            ).label;
          } else if (i == daysDiff) {
            leavePortion = halfDay.find(item => item.value === toHalfDay).label;
          } else {
            leavePortion = 'Full Day';
          }
          let obj = prepareReqObj(fromDate, leavePortion);
          request.push(obj);
          newDate.add(1, 'days');
        }
      }
      console.info('invokeApplyLeave...', request);

      console.info('invokeApplyLeave...', request);
      setPopup({ type: POPUP_CONSTANTS.SPINNER_POPUP });
      SFDC_API.upsertUserLeaves(request)
        .then(res => {
          setPopup(undefined);
          if (res.data === 'Success') {
            setLeaveAppliedSuccess(true);
          }
        })
        .catch(error => {
          // debugger;
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
        });
    }
  };

  const prepareReqObj = (date, leavePortion) => {
    let userData = JSON.parse(loggedInUser);
    let obj = {
      Crew_Member__c: JSON.parse(loggedInUser).Id,
      Date__c: date,
      Leave_Description__c: description,
      Leave_Portion__c: leavePortion,
      Leave_Status__c: 'Pending',
      Leave_Type__c: '',
      Unique_ID__c: new Date().getTime() + '',
      Operation_Type__c: 'Leave',
      Allocated_Project__c: 'a061y000000EwQ5AAK',
      Assigned_approvar_for_HP__c: '',
      Assigned_approvar_for_painter__c: '',
      Crew_Id_And_Date__c: '0031y00000RNH0hAAH-2023-01-26',
    };
    return obj;
  };

  const customDatesStyles = [{ style: { with: 300 } }];
  return (
    <View style={styles.container}>
      <Popup visible={!!popup}>{getPopupContent()}</Popup>
      {leaveAppliedSuccess ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={leaveSuccesIcon}
            style={styles.imgLeaveSuccessStyle}
            resizeMode="contain"
          />
          <Text style={styles.leaveSuccessLabel}>
            Your leave request has been sent for approval
          </Text>
        </View>
      ) : (
        <ScrollView>
          <View>
            {/* {renderLabel()}
            <Dropdown
              style={[styles.dropdown, {borderRadius:8 }]}
              // placeholderStyle={[styles.selectedTextStyle,{paddingLeft:0,borderColor:'red'}]}
              selectedTextStyle={styles.selectedTextStyle}
              placeholderStyle={{backgroundColor:'red',color:'green',width:20}}
              // inputSearchStyle={[styles.selectedTextStyle, styles.inputSearchStyle]}
              data={leaveTypes}
              // search
              labelField="label"
              valueField="value"
              placeholder={'Leave type'}
              // searchPlaceholder="Search..."
              value={leaveType}
              onChange={item => {
                setLeaveType(item.value);
              }}
              iconStyle={{
                height:30
              }}
              iconColor='#000000'
            /> */}
            <View style={styles.dropdown}>
              <Text style={[styles.selectedTextStyle, styles.descText]}>
                Description
              </Text>
              <TextInput
                // style={styles.selectedTextStyle}
                onChangeText={data => setDescription(data)}
                value={description}
                placeholder="Enter Description"
                placeholderTextColor="#949DB6"
                style={{
                  color: '#949db6',
                  fontSize: 14,
                  fontFamily: 'Lato-Bold',
                }}
              />
            </View>
            <View style={styles.fromContainer}>
              <TouchableOpacity
                style={[styles.startDate, { flex: 1 }]}
                onPress={() => showCalendar(true)}>
                <Text
                  style={[
                    styles.selectedTextStyle,
                    styles.descText,
                    styles.marginBtm,
                  ]}>
                  From
                </Text>
                <Text
                  style={[
                    styles.selectedTextStyle,
                    styles.descText,
                    styles.marginBtm,
                    {
                      color: '#949db6',
                      fontSize: 14,
                      fontFamily: 'Lato-Bold',
                    },
                  ]}>
                  {selectedFromDate ? selectedFromDate : 'Select From Date'}
                </Text>
              </TouchableOpacity>
              <View style={[styles.fromDateContainer, { flex: 1 }]}>
                {renderHalfDayLabel()}
                <Dropdown
                  style={[styles.dropdown, { width: '100%' }]}
                  placeholderStyle={styles.selectedTextStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={halfDay}
                  labelField="label"
                  valueField="value"
                  placeholder={'Select half day'}
                  value={fromHalfDay}
                  onChange={item => {
                    console.log('half day on change', item);
                    setFromHalfDay(item.label);
                  }}
                />
              </View>
            </View>
            {showFromDayCalendar ? (
              <View style={styles.showFromDayCalendar}>
                <CalendarPicker
                  onDateChange={date => onStartDateChange(date)}
                  previousComponent={getPreviousComponent()}
                  nextComponent={getNextComponent()}
                  startFromMonday={true}
                  showDayStragglers={true}
                  selectedDayTextColor="#FFF"
                  todayBackgroundColor="#2C4DAE"
                  textStyle={styles.textStyle}
                  customDatesStyles={customDatesStyles}
                  weekdays={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
                  minDate={new Date()}
                  dayLabelsWrapper={{
                    borderBottomWidth: 0,
                    borderTopWidth: 0,
                    paddingLeft: 24,
                  }}
                />
              </View>
            ) : null}
            <View style={[styles.fromContainer]}>
              <TouchableOpacity
                style={[styles.startDate, { flex: 1 }]}
                onPress={() => showCalendar()}>
                <Text
                  style={[
                    styles.selectedTextStyle,
                    styles.descText,
                    styles.marginBtm,
                  ]}>
                  To
                </Text>
                <Text
                  style={[
                    styles.selectedTextStyle,
                    styles.descText,
                    styles.marginBtm,
                  ]}>
                  {selectedToDate ? selectedToDate : 'Select To Date'}
                </Text>
              </TouchableOpacity>
              <View style={[styles.fromDateContainer, { flex: 1 }]}>
                {renderHalfDayLabel()}
                <Dropdown
                  style={[styles.dropdown, { width: '100%' }]}
                  placeholderStyle={styles.selectedTextStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={halfDay}
                  labelField="label"
                  valueField="value"
                  placeholder={'Select half day'}
                  value={toHalfDay}
                  onChange={item => {
                    console.log('half day on change', item);
                    setToHalfDay(item.label);
                  }}
                />
              </View>
            </View>
            {showToDayCalendar ? (
              <View style={styles.showFromDayCalendar}>
                <CalendarPicker
                  onDateChange={date => onEndDateChange(date)}
                  previousComponent={getPreviousComponent()}
                  nextComponent={getNextComponent()}
                  startFromMonday={true}
                  showDayStragglers={true}
                  selectedDayColor="#2C4DAE"
                  textStyle={styles.textStyle}
                  customDatesStyles={customDatesStyles}
                  weekdays={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
                />
              </View>
            ) : null}
            <CustomButton
              title={strings.applyLeave}
              textStyle={styles.buttonText}
              style={styles.button}
              onPress={applyLeave}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default ApplyLeave;
