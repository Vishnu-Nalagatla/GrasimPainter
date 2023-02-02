import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './styles';
import ellipse from '../../assets/images/ellipse/image.png';
import CalendarPicker from 'react-native-calendar-picker';
import Popup from '../../components/Popup';
import POPUP_CONSTANTS from '../../enums/popup';
import strings from '../../constants/strings';
import CustomButton from '../../components/Button';
import prevDateImg from '../../assets/images/attendanceColor/prevDate.png';

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
]

const ApplyLeave = () => {
    const [leaveType, setLeaveType] = useState(null);
    const [description, setDescription] = useState('');
    const [fromHalfDay, setFromHalfDay] = useState(null);
    const [toHalfDay, setToHalfDay] = useState(null);
    const [selectedFromDate, setSelectedFromDate] = useState('');
    const [selectedToDate, setSelectedToDate] = useState('');
    const [popup, setPopup] = useState(undefined);

    const renderLabel = () => {
        if (leaveType) {
            return (
                <Text style={[styles.selectedTextStyle, styles.label]}>
                    Leave Type
                </Text>
            );
        }
        return null;
    };

    const renderHalfDayLabel = () => {
        if (!popup || (popup && popup.type !== POPUP_CONSTANTS.SHOW_START_DATE_CALENDAR && popup.type !== POPUP_CONSTANTS.SHOW_END_DATE_CALENDAR)) {
            return (
                <Text style={[styles.selectedTextStyle, styles.halfDayLabel]}>
                    Half Day
                </Text>
            );
        }
        return null;
    }

    const onStartDateChange = (date) => {
        const selectedDate = new Date(date);
        var formatDate = selectedDate.getDate() + ' ' + selectedDate.toString().substr(4, 3) + ' ' + selectedDate.getFullYear();
        setSelectedFromDate(formatDate);
        setPopup(undefined);
    }

    const onEndDateChange = date => {
        const selectedDate = new Date(date);
        var formatDate = selectedDate.getDate() + ' ' + selectedDate.toString().substr(4, 3) + ' ' + selectedDate.getFullYear();
        setSelectedToDate(formatDate);
        setPopup(undefined);
    }

    const showCalendar = (openStartDate) => {
        if (openStartDate)
            setPopup({ type: POPUP_CONSTANTS.SHOW_START_DATE_CALENDAR });
        else
            setPopup({ type: POPUP_CONSTANTS.SHOW_END_DATE_CALENDAR });
    }

    const getPopupContent = () => {
        if (!popup) {
            return null;
        }
        switch (popup.type) {
            case POPUP_CONSTANTS.SHOW_START_DATE_CALENDAR:
                return <CalendarPicker onDateChange={(date) => onStartDateChange(date)}
                    previousComponent={getPreviousComponent()}
                    nextComponent={getNextComponent()}
                    startFromMonday={true}
                    showDayStragglers={true}
                    selectedDayColor='#2C4DAE'
                    textStyle={styles.textStyle}
                />;
            case POPUP_CONSTANTS.SHOW_END_DATE_CALENDAR:
                return <CalendarPicker onDateChange={(date) => onEndDateChange(date)}
                    previousComponent={getPreviousComponent()}
                    nextComponent={getNextComponent()}
                    startFromMonday={true}
                    showDayStragglers={true}
                    selectedDayColor='#2C4DAE'
                    textStyle={styles.textStyle}
                />;
        }
    };

    const getPreviousComponent = () => {
        return (
            <View style={styles.buttonStyle}>
                <Image
                    source={prevDateImg}
                    style={styles.imgStyle}
                    resizeMode="contain"
                />
            </View>
        )
    }

    const getNextComponent = () => {
        return (
            <View style={styles.buttonStyle}>
                <Image
                    source={prevDateImg}
                    style={styles.imgStyle}
                    resizeMode="contain"
                />
            </View>
        )
    }

    const invokeApplyLeave = () => {
        
    }

    return (
        <View style={styles.container}>
            <Popup visible={!!popup}>
                {getPopupContent()}
            </Popup>
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
                <Text style={[styles.selectedTextStyle, styles.descText]}>Description</Text>
                <TextInput
                    style={styles.selectedTextStyle}
                    onChangeText={data => setDescription(data)}
                    value={description}
                    placeholder="Enter Description"
                    placeholderTextColor='#949DB6'
                />
            </View>
            <View style={styles.fromContainer}>
                <TouchableOpacity style={styles.startDate} onPress={() => showCalendar(true)}>
                    <Text style={[styles.selectedTextStyle, styles.descText, styles.marginBtm]}>From</Text>
                    <Text style={[styles.selectedTextStyle, styles.descText, styles.marginBtm]}>{selectedFromDate ? selectedFromDate : 'Select From Date'}</Text>
                </TouchableOpacity>
                <View style={styles.fromDateContainer}>
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
            <View style={styles.fromContainer}>
                <TouchableOpacity style={styles.startDate} onPress={() => showCalendar()}>
                    <Text style={[styles.selectedTextStyle, styles.descText, styles.marginBtm]}>To</Text>
                    <Text style={[styles.selectedTextStyle, styles.descText, styles.marginBtm]}>{selectedToDate ? selectedToDate : 'Select To Date'}</Text>
                </TouchableOpacity>
                <View style={styles.fromDateContainer}>
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
            <CustomButton
                title={strings.applyLeave}
                textStyle={styles.buttonText}
                style={styles.button}
                onPress={invokeApplyLeave}
            />
        </View>
    );
};

export default ApplyLeave;
