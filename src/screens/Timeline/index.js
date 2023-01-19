import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ellipse from '../../assets/images/ellipse/image.png';
import hamburger from '../../assets/images/myDay/hamburger.png';
import styles from './styles';
import DraggableFlatList from 'react-native-draggable-flatlist';
import strings from '../../constants/strings';
import CustomButton from '../../components/Button';
import CalendarPicker from 'react-native-calendar-picker';
import Popup from '../../components/Popup';
import POPUP_CONSTANTS from '../../enums/popup';

const initialData = {
    projectStartDate: '2022-08-19',
    roomSequence: [
        {
            name: 'Bedroom',
            timeTaken: 2,
            startDate: '3 Nov 2022',
            index: 0,
        },
        {
            name: 'Kitchen',
            timeTaken: 1,
            startDate: '2 Nov 2022',
            index: 1,
        },
        {
            name: 'Living Room',
            timeTaken: 3,
            startDate: '30 Oct 2022',
            index: 2,
        },
        {
            name: 'Balcony',
            timeTaken: 1,
            startDate: '29 Oct 2022',
            index: 3,
        },
        {
            name: 'Bedroom',
            timeTaken: 1,
            startDate: '28 Oct 2022',
            index: 4,
        },

        {
            name: 'Living Room',
            timeTaken: 3,
            startDate: '30 Oct 2022',
            index: 2,
        },
        {
            name: 'Balcony',
            timeTaken: 1,
            startDate: '29 Oct 2022',
            index: 3,
        },
        {
            name: 'Bedroom',
            timeTaken: 1,
            startDate: '28 Oct 2022',
            index: 4,
        },
    ]
};

const Timeline = () => {
    const [timeLineData, setTimeLineData] = useState(initialData.roomSequence);
    const [popup, setPopup] = useState(undefined);

    // const getCalculatedTimelineSequence = () => {
    //     const currentRoomSequence = data.roomSequence;
    //     const calculatedTimelineSequence = [];
    //     currentRoomSequence.forEach((room, roomIdx) => {
    //         let totalTime = 0;
    //         if (roomIdx === 0) {
    //             totalTime += room.timeTaken;
    //         } else {
    //             totalTime += room.timeTaken + calculatedTimelineSequence[roomIdx - 1].totalTime;
    //         }
    //         calculatedTimelineSequence.push({
    //             ...room,
    //             totalTime: totalTime,
    //         })
    //     });
    //     console.log('calculatedTimelineSequence', calculatedTimelineSequence);
    //     return calculatedTimelineSequence;
    // }


    const onStartDateChange = (date) => {
        const selectedDate = new Date(date);
        var formatDate = selectedDate.getDate() + ' ' + selectedDate.toString().substr(4, 3) + ' ' + selectedDate.getFullYear();
        timeLineData[timeLineData.length - 1].startDate = formatDate;
        setTimeLineData(timeLineData);
        setPopup(undefined);
    }

    const onEndDateChange = date => {
        const selectedDate = new Date(date);
        var formatDate = selectedDate.getDate() + ' ' + selectedDate.toString().substr(4, 3) + ' ' + selectedDate.getFullYear();
        timeLineData[0].startDate = formatDate;
        setTimeLineData(timeLineData);
        setPopup(undefined);
    }

    const showCalendar = (index) => {
        if (index === 0)
            setPopup({ type: POPUP_CONSTANTS.SHOW_END_DATE_CALENDAR });
        else if (index === timeLineData.length - 1)
            setPopup({ type: POPUP_CONSTANTS.SHOW_START_DATE_CALENDAR });
    }

    const renderItem = (data) => {
        const { item, drag } = data;
        const { totalTime = 0, index } = item;

        return (
            <TouchableOpacity style={styles.item}
                onPress={() => showCalendar(index)}
                onLongPress={drag}
            >
                <View style={styles.projectLine}>
                    <Image
                        source={ellipse}
                        style={styles.ellipse}
                        resizeMode="contain"
                    />
                    <View style={styles.straightLine} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.heading, styles.noMargin]}>{item.name}</Text>
                    <View style={styles.dateContainer}>
                        {/* <View style={styles.dateContainer} onPress={() => showCalendar(index)}> */}
                        <Image
                            source={ellipse}
                            style={styles.flagImg}
                            resizeMode="contain"
                        />
                        <Text style={index === 0 || index === timeLineData.length - 1 ? [styles.startDate, styles.highlight] : styles.startDate}>{item.startDate}</Text>
                    </View>
                </View>
                <View style={styles.hamburgerContainer}>
                    <Image
                        source={hamburger}
                        style={styles.ellipse}
                        resizeMode="contain"
                    />
                </View>
            </TouchableOpacity>
        )
    }

    const updateProjectPlan = () => {

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
                    source={ellipse}
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
                    source={ellipse}
                    style={styles.imgStyle}
                    resizeMode="contain"
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Popup visible={!!popup}>
                {getPopupContent()}
            </Popup>
            <View style={styles.innerContainer}>
                <Text style={styles.heading}>{strings.reorderText}</Text>
                <View style={styles.listStyle}>
                    <DraggableFlatList
                        data={timeLineData}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        onDragEnd={({ data }) => setTimeLineData(data)}
                    // containerStyle={styles.listStyle}
                    />
                </View>
            </View>
            <CustomButton
                title={strings.updateProjectPlan}
                textStyle={styles.buttonText}
                style={styles.button}
                onPress={updateProjectPlan}
            />
        </View>
    );
};

export default Timeline;