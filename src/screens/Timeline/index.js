import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import ROLES from '../../enums/roles';
// import data from './data.json';
import {connect} from 'react-redux';
import UTIL from '../../util';
import {API, SFDC_API} from '../../requests';
import colors from '../../constants/colors';

const Timeline = props => {
  const {myDayInfo} = props;
  // const {myDayInfo} = myDay;
  const {project = {}, loggedInUser = {}} = props;
  const {roleKey=''} = loggedInUser || {};
  const [timeLineData, setTimeLineData] = useState([]);
  const [projectStartDate, setProjectStartDate] = useState(
    project.ProjectStartDate,
  );
  const [projectEndDate, setProjectEndDate] = useState(project.ProjectEndDate);
  const [popup, setPopup] = useState(undefined);
  const {displayStatus} = project || {};
  const {order} = displayStatus || {};

  useEffect(() => {
    getTimeLineSequence();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const compare = (room1, room2) => {
    if (room1.RoomSequence < room2.RoomSequence) {
      return 1;
    }
    if (room1.RoomSequence > room2.RoomSequence) {
      return -1;
    }
    return 0;
  };

  const getTimeLineSequence = () => {
    const roomsList = project.RoomList || [];
    let sequencedArray = roomsList.sort(compare);
    const roomOrderedList = getCalculatedTimelineSequence(sequencedArray);
    setTimeLineData(roomOrderedList.reverse());
  };

  const getCalculatedTimelineSequence = roomsList => {
    const calculatedTimelineSequence = [];

    for (var roomIdx = roomsList.length - 1; roomIdx >= 0; roomIdx--) {
      let DaysForPrevRooms = 0;
      let roomStartDate = '';
      if (roomIdx === roomsList.length - 1) {
        roomStartDate = getFormattedDate();
        DaysForPrevRooms = 0;
      } else {
        DaysForPrevRooms =
          calculatedTimelineSequence[calculatedTimelineSequence.length - 1]
            .DaysForPrevRooms +
          calculatedTimelineSequence[calculatedTimelineSequence.length - 1]
            .DaysRequiredForRoom;
        roomStartDate = getFormattedDate(DaysForPrevRooms);
      }
      calculatedTimelineSequence.push({
        ...roomsList[roomIdx],
        roomStartDate,
        DaysForPrevRooms,
      });
    }
    return calculatedTimelineSequence;
  };

  const getFormattedDate = roomDuration => {
    var date = new Date(projectStartDate);
    let nextRoomStartDate;
    if (roomDuration) {
      nextRoomStartDate = new Date(
        date.setDate(date.getDate() + Math.floor(roomDuration)),
      );
    } else {
      nextRoomStartDate = date;
    }
    var formattedDate =
      nextRoomStartDate.getDate() +
      ' ' +
      nextRoomStartDate.toString().substr(4, 3) +
      ' ' +
      nextRoomStartDate.getFullYear();
    return formattedDate;
  };

  const onStartDateChange = date => {
    const selectedDate = new Date(date);
    var formatDate =
      selectedDate.getDate() +
      ' ' +
      selectedDate.toString().substr(4, 3) +
      ' ' +
      selectedDate.getFullYear();
    timeLineData[timeLineData.length - 1].roomStartDate = formatDate;
    const updatedProjectStartDate =
      selectedDate.getFullYear() +
      '-' +
      (selectedDate.getMonth() + 1) +
      '-' +
      selectedDate.getDate();
    setTimeLineData(timeLineData);
    setProjectStartDate(updatedProjectStartDate);
    setPopup(undefined);
  };

  const onEndDateChange = date => {
    const selectedDate = new Date(date);
    var formatDate =
      selectedDate.getDate() +
      ' ' +
      selectedDate.toString().substr(4, 3) +
      ' ' +
      selectedDate.getFullYear();
    timeLineData[0].roomStartDate = formatDate;
    const updatedProjectEndDate =
      selectedDate.getFullYear() +
      '-' +
      (selectedDate.getMonth() + 1) +
      '-' +
      selectedDate.getDate();
    setTimeLineData(timeLineData);
    setProjectEndDate(updatedProjectEndDate);
    setPopup(undefined);
  };

  const showCalendar = index => {
    if (index === 0) {
      setPopup({type: POPUP_CONSTANTS.SHOW_END_DATE_CALENDAR});
    } else if (index === timeLineData.length - 1) {
      setPopup({type: POPUP_CONSTANTS.SHOW_START_DATE_CALENDAR});
    }
  };

  const renderItem = data => {
    const {item, drag} = data;
    const {totalTime = 0} = item;
    const index = data.getIndex();
    return (
      <TouchableOpacity style={styles.item} onLongPress={drag}>
        <View style={styles.projectLine}>
          <Image source={ellipse} style={styles.ellipse} resizeMode="contain" />
          <View style={styles.straightLine} />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.heading, styles.roomHeading, styles.noMargin]}>
            {item.Name}
          </Text>
          <View style={styles.dateContainer}>
            <Image
              source={flagImg}
              style={styles.flagImg}
              resizeMode="contain"
            />
            <Text
              onPress={() => showCalendar(index)}
              style={
                index === 0 || index === timeLineData.length - 1
                  ? [styles.startDate, styles.highlight]
                  : styles.startDate
              }>
              {item.roomStartDate}
            </Text>
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
    );
  };
  const showSpinner = () => {
    setPopup({type: POPUP_CONSTANTS.SPINNER_POPUP});
  };
  const updateProjectPlan = () => {
    const request = [
      {
        StartDate: '2022-11-28',
        EndDate: '2022-11-29',
        RoomList: null,
      },
    ];
    showSpinner();
    SFDC_API.updateDatesWithoutRoomSequence('a061y000000EvVzAAK', request)
      .then(response => {
        setPopup(undefined);
        const {data} = response;
        console.info('data...', data);
      })
      .catch(error => {
        setPopup(undefined);
        console.log('send otp error', error);
      });
  };

  const recalculateProjectPlan = () => {};

  const setTimelineSequence = data => {
    const updatedSequence = getCalculatedTimelineSequence(data);
    setTimeLineData(updatedSequence.reverse());
  };

  const callCustomer = () => {
    UTIL.connectThroughCall('9876543210');
  };

  const getPopupContent = () => {
    if (!popup) {
      return null;
    }
    switch (popup.type) {
      case POPUP_CONSTANTS.SHOW_START_DATE_CALENDAR:
        return (
          <CalendarPicker
            onDateChange={date => onStartDateChange(date)}
            previousComponent={getPreviousComponent()}
            nextComponent={getNextComponent()}
            startFromMonday={true}
            showDayStragglers={true}
            selectedDayColor="#2C4DAE"
            textStyle={styles.textStyle}
            weekdays={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
            minDate={new Date()}
          />
        );
      case POPUP_CONSTANTS.SHOW_END_DATE_CALENDAR:
        return (
          <CalendarPicker
            onDateChange={date => onEndDateChange(date)}
            previousComponent={getPreviousComponent()}
            nextComponent={getNextComponent()}
            startFromMonday={true}
            showDayStragglers={true}
            selectedDayColor="#2C4DAE"
            textStyle={styles.textStyle}
            weekdays={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
            minDate={new Date(projectStartDate)}
          />
        );
      case POPUP_CONSTANTS.SPINNER_POPUP:
        return (
          <ActivityIndicator size="large" color={colors.primary} animating />
        );
    }
  };

  const getPreviousComponent = () => {
    return (
      <View style={styles.buttonStyle}>
        <Image source={ellipse} style={styles.imgStyle} resizeMode="contain" />
      </View>
    );
  };

  const getNextComponent = () => {
    return (
      <View style={styles.buttonStyle}>
        <Image source={ellipse} style={styles.imgStyle} resizeMode="contain" />
      </View>
    );
  };

  const getPopupStyle = () => {
    let popupStyle = {};
    if (
      popup &&
      (popup.type === POPUP_CONSTANTS.SHOW_START_DATE_CALENDAR ||
        popup.type === POPUP_CONSTANTS.SHOW_END_DATE_CALENDAR)
    ) {
      popupStyle = styles.calendarStyle;
    }
    return popupStyle;
  };

  return (
    <View style={styles.container}>   
      <Popup visible={!!popup} popupStyle={getPopupStyle()}>
        {getPopupContent()}
      </Popup>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>{strings.reorderText}</Text>
        <View style={styles.listStyle}>
          <DraggableFlatList
            data={timeLineData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            onDragEnd={({data}) => {
              setTimelineSequence(data);
            }}
            // containerStyle={styles.listStyle}
          />
        </View>
        {roleKey === ROLES.TEAM_LEAD ? (
          <CustomButton
            title={strings.recalculateProjectPlan}
            textStyle={styles.recalculateButtonText}
            style={styles.recalculateButton}
            onPress={recalculateProjectPlan}
          />
        ) : null}
      </View>
      {roleKey === ROLES.TEAM_LEAD ? (
        +order === 3 ? (
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Call Customer"
              onPress={callCustomer}
              style={styles.callButton}
              textStyle={styles.recalculateButtonText}
            />
            <CustomButton
              title="Update Project"
              style={styles.updateButton}
              textStyle={styles.buttonText}
              onPress={updateProjectPlan}
            />
          </View>
        ) : (
          <CustomButton
            title={strings.updateProjectPlan}
            textStyle={styles.buttonText}
            style={styles.button}
            onPress={updateProjectPlan}
          />
        )
      ) : null}
    </View>
  );
};

function mapStateToProps(state) {
  return {myDay: state.myDay};
}

export default connect(mapStateToProps, null)(Timeline);

// Submitted By TL
// Confirmed By Consumer
// Confirmed By TL
