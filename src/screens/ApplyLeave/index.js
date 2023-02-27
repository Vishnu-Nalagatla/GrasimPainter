import React, { useState } from 'react';
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
import leaveSuccesIcon from '../../assets/images/addLeave/leaveSuccesIcon.png';
import colors from '../../constants/colors';
import { SFDC_API } from '../../requests';
import errorImg from '../../assets/images/error/image.png';
import { ScrollView } from 'native-base';
import moment from 'moment';

const leaveTypes = [
  { label: 'Sick', value: '1' },
  { label: 'Casual', value: '2' },
  { label: 'Vacation', value: '3' },
  { label: 'Maternity', value: '4' },
  { label: 'Paternity', value: '5' },
  { label: 'Loss of Pay', value: '6' },
  { label: 'Work from Home', value: '7' },
];

const halfDay = [
  { label: '1st Half', value: '1' },
  { label: '2nd Half', value: '2' },
];

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
          Half Day
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
          source={prevDateImg}
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

  const invokeApplyLeave = () => {

    const fromDate = moment(selectedFromDate).format('yyyy-MM-DD');
    const toDate = moment(selectedToDate).format('yyyy-MM-DD');
    const leave = leaveTypes.find(item => item.value == leaveType)
    debugger

    const request = [{
      "OwnerId": "0051y000000NpxWAAS",
      "WhatId": "",
      "StartDateTime": fromDate,
      "EndDateTime": toDate,
      "IsAllDayEvent": true,
      "Type": "Leave",
      "Subject": "Leave",
      "User_Id_And_Date__c": `0051y000000NpxWAAS-${(new Date()).getTime()}`,
      "Operation_Type__c": "Leave",
      "Leave_Description__c": description,
      "Leave_Portion__c": fromHalfDay + "",
      "Leave_Status__c": "Pending",
      "Leave_Type__c": leave.label,
      "Unique_ID__c": (new Date()).getTime() + "",
      "Assigned_Approver__c": "0051y000000O5rkAAC"
    }];
    console.info('invokeApplyLeave...', request);
    setPopup({ type: POPUP_CONSTANTS.SPINNER_POPUP });
    SFDC_API.upsertUserLeaves(request)
      .then(res => {
        debugger
        console.log('leave apply resp->', res);
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
      });
  };
  const customDatesStyles = [{ style: { with: 300 } }];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Popup visible={!!popup}>{getPopupContent()}</Popup>
      {leaveAppliedSuccess ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={leaveSuccesIcon}
            style={styles.imgLeaveSuccessStyle}
            resizeMode='contain' />
          <Text style={styles.leaveSuccessLabel}>Your leave request has been sent for approval</Text>
        </View>
        :
        <View>
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, { borderColor: 'blue' }]}
            placeholderStyle={styles.selectedTextStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={[styles.selectedTextStyle, styles.inputSearchStyle]}
            data={leaveTypes}
            search
            labelField="label"
            valueField="value"
            placeholder={'Select leave type'}
            searchPlaceholder="Search..."
            value={leaveType}
            onChange={item => {
              setLeaveType(item.value);
            }}
          />
          <View style={styles.dropdown}>
            <Text style={[styles.selectedTextStyle, styles.descText]}>
              Description
            </Text>
            <TextInput
              style={styles.selectedTextStyle}
              onChangeText={data => setDescription(data)}
              value={description}
              placeholder="Enter Description"
              placeholderTextColor="#949DB6"
            />
          </View>
          <View style={styles.fromContainer}>
            <TouchableOpacity
              style={[styles.startDate,{flex:1}]}
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
                ]}>
                {selectedFromDate ? selectedFromDate : 'Select From Date'}
              </Text>
            </TouchableOpacity>
            <View style={[styles.fromDateContainer,{flex:1}]}>
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
                  setFromHalfDay(item.value);
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
                todayBackgroundColor='#2C4DAE'
                textStyle={styles.textStyle}
                customDatesStyles={customDatesStyles}
                weekdays={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
              />
            </View>
          ) : null}
          <View style={[styles.fromContainer]}>
            <TouchableOpacity
              style={[styles.startDate,{flex:1}]}
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
            <View style={[styles.fromDateContainer,{flex:1}]}>
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
                  setToHalfDay(item.value);
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
            onPress={invokeApplyLeave}
          />
        </View>}
    </ScrollView>
  );
};

export default ApplyLeave;
