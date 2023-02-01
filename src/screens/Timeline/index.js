import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import ellipse from '../../assets/images/ellipse/image.png';
import hamburger from '../../assets/images/timeline/reorder.png';
import flagImg from '../../assets/images/timeline/flag.png';
import styles from './styles';
import DraggableFlatList from 'react-native-draggable-flatlist';
import strings from '../../constants/strings';
import CustomButton from '../../components/Button';
import CalendarPicker from 'react-native-calendar-picker';
import Popup from '../../components/Popup';
import POPUP_CONSTANTS from '../../enums/popup';
import data from './data.json';

class Timeline extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // timeLineData: initialData.roomSequence,
            timeLineData: [],
            projectStartDate: data.ProjectStartDate,
            projectEndDate: data.ProjectEndDate,
            popup: undefined,
        };
    }

    componentDidMount = () => {
        this.getTimeLineSequence();
    }

    compare(room1, room2) {
        if (room1.RoomSequence < room2.RoomSequence) {
            return 1;
        }
        if (room1.RoomSequence > room2.RoomSequence) {
            return -1;
        }
        return 0;
    }

    getTimeLineSequence = () => {
        const roomsList = data.RoomList;
        let sequencedArray = roomsList.sort(this.compare);
        console.log('sequencedArray', sequencedArray);
        const roomOrderedList = this.getCalculatedTimelineSequence(sequencedArray);
        this.setState({ timeLineData: roomOrderedList.reverse() });
    }

    getCalculatedTimelineSequence = (roomsList) => {
        const calculatedTimelineSequence = [];
        const { projectStartDate } = this.state;

        for (var roomIdx = roomsList.length - 1; roomIdx >= 0; roomIdx--) {
            let DaysForPrevRooms = 0;
            let roomStartDate = '';
            if (roomIdx === roomsList.length - 1) {
                roomStartDate = this.getFormattedDate();
                DaysForPrevRooms = 0;
            } else {
                DaysForPrevRooms = calculatedTimelineSequence[calculatedTimelineSequence.length - 1].DaysForPrevRooms + calculatedTimelineSequence[calculatedTimelineSequence.length - 1].DaysRequiredForRoom;
                roomStartDate = this.getFormattedDate(DaysForPrevRooms);
            }
            calculatedTimelineSequence.push({
                ...roomsList[roomIdx],
                roomStartDate,
                DaysForPrevRooms,
            })
        }
        console.log('calculatedTimelineSequence', calculatedTimelineSequence);
        return calculatedTimelineSequence;
    }

    getFormattedDate = (roomDuration) => {
        const { projectStartDate } = this.state;
        var date = new Date(projectStartDate);
        let nextRoomStartDate;
        if (roomDuration) {
            nextRoomStartDate = new Date(date.setDate(date.getDate() + Math.floor(roomDuration)));
        } else {
            nextRoomStartDate = date;
        }
        var formattedDate = nextRoomStartDate.getDate() + ' ' + nextRoomStartDate.toString().substr(4, 3) + ' ' + nextRoomStartDate.getFullYear();
        return formattedDate;
    }

    onStartDateChange = (date) => {
        const { timeLineData } = this.state;
        const selectedDate = new Date(date);
        var formatDate = selectedDate.getDate() + ' ' + selectedDate.toString().substr(4, 3) + ' ' + selectedDate.getFullYear();
        timeLineData[timeLineData.length - 1].roomStartDate = formatDate;
        this.setState({
            projectStartDate: selectedDate.getFullYear() + '-' + (selectedDate.getMonth() + 1) + '-' + selectedDate.getDate(),
            timeLineData: timeLineData,
            popup: undefined,
        })
    }

    onEndDateChange = date => {
        const { timeLineData } = this.state;
        const selectedDate = new Date(date);
        var formatDate = selectedDate.getDate() + ' ' + selectedDate.toString().substr(4, 3) + ' ' + selectedDate.getFullYear();
        timeLineData[0].roomStartDate = formatDate;
        this.setState({
            projectEndDate: selectedDate.getFullYear() + '-' + selectedDate.getMonth() + '-' + selectedDate.getDate(),
            timeLineData: timeLineData,
            popup: undefined,
        })
    }

    showCalendar = (index) => {
        const { timeLineData } = this.state;
        if (index === 0)
            this.setState({ type: POPUP_CONSTANTS.SHOW_END_DATE_CALENDAR });
        else if (index === timeLineData.length - 1)
            this.setState({ type: POPUP_CONSTANTS.SHOW_START_DATE_CALENDAR });
    }

    renderItem = (data) => {
        const { item, drag } = data;
        const { totalTime = 0, index } = item;
        const { timeLineData } = this.state;

        return (
            <TouchableOpacity style={styles.item}
                onPress={() => this.showCalendar(index)}
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
                    <Text style={[styles.heading, styles.roomHeading, styles.noMargin]}>{item.Name}</Text>
                    <View style={styles.dateContainer}>
                        {/* <View style={styles.dateContainer} onPress={() => showCalendar(index)}> */}
                        <Image
                            source={flagImg}
                            style={styles.flagImg}
                            resizeMode="contain"
                        />
                        <Text style={index === 0 || index === timeLineData.length - 1 ? [styles.startDate, styles.highlight] : styles.startDate}>{item.roomStartDate}</Text>
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

    updateProjectPlan = () => {

    }

    recalculateProjectPlan = () => {

    }

    setTimelineSequence = data => {
        console.log('setTimelineSequence data', data);
        const updatedSequence = this.getCalculatedTimelineSequence(data);
        console.log('setTimelineSequence updatedSequence data', updatedSequence);
        this.setState({ timeLineData: updatedSequence.reverse() });
    }

    getPopupContent = () => {
        const { popup, projectStartDate } = this.state;
        if (!popup) {
            return null;
        }
        switch (popup.type) {
            case POPUP_CONSTANTS.SHOW_START_DATE_CALENDAR:
                return <CalendarPicker onDateChange={(date) => this.onStartDateChange(date)}
                    previousComponent={this.getPreviousComponent()}
                    nextComponent={this.getNextComponent()}
                    startFromMonday={true}
                    showDayStragglers={true}
                    selectedDayColor='#2C4DAE'
                    textStyle={styles.textStyle}
                    minDate={new Date()}
                />;
            case POPUP_CONSTANTS.SHOW_END_DATE_CALENDAR:
                return <CalendarPicker onDateChange={(date) => this.onEndDateChange(date)}
                    previousComponent={this.getPreviousComponent()}
                    nextComponent={this.getNextComponent()}
                    startFromMonday={true}
                    showDayStragglers={true}
                    selectedDayColor='#2C4DAE'
                    textStyle={styles.textStyle}
                    minDate={new Date(projectStartDate)}// replace with project start date
                />;
        }
    };

    getPreviousComponent = () => {
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

    getNextComponent = () => {
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

    render() {
        const { popup, timeLineData } = this.state;
        return (
            <View style={styles.container}>
                <Popup visible={!!popup}>
                    {this.getPopupContent()}
                </Popup>
                <View style={styles.innerContainer}>
                    <Text style={styles.heading}>{strings.reorderText}</Text>
                    <View style={styles.listStyle}>
                        <DraggableFlatList
                            data={timeLineData}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            onDragEnd={({ data }) => {
                                this.setTimelineSequence(data);
                            }}
                        // containerStyle={styles.listStyle}
                        />
                    </View>
                    <CustomButton
                        title={strings.recalculateProjectPlan}
                        textStyle={styles.recalculateButtonText}
                        style={styles.recalculateButton}
                        onPress={this.recalculateProjectPlan}
                    />
                </View>
                <CustomButton
                    title={strings.updateProjectPlan}
                    textStyle={styles.buttonText}
                    style={styles.button}
                    onPress={this.updateProjectPlan}
                />
            </View>
        );
    }

};

export default Timeline;