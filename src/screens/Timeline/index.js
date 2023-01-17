import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Moment from 'moment';
import ellipse from '../../assets/images/ellipse/image.png';
import hamburger from '../../assets/images/myDay/hamburger.png';
import styles from './styles';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {SafeAreaView} from 'react-native-safe-area-context';
import strings from '../../constants/strings';

const initialData = {
  projectStartDate: '2022-08-19',
  roomSequence: [
    {
      name: 'Bedroom',
      timeTaken: 2,
      startDate: '3 Nov 2022',
    },
    {
      name: 'Kitchen',
      timeTaken: 1,
      startDate: '2 Nov 2022',
    },
    {
      name: 'Living Room',
      timeTaken: 3,
      startDate: '30 Oct 2022',
    },
    {
      name: 'Balcony',
      timeTaken: 1,
      startDate: '29 Oct 2022',
    },
    {
      name: 'Bedroom',
      timeTaken: 1,
      startDate: '28 Oct 2022',
    },

    // {
    //     name: 'Bedroom',
    //     timeTaken: 2,
    //     startDate: '3 Nov 2022',
    // },
    // {
    //     name: 'Kitchen',
    //     timeTaken: 1,
    //     startDate: '2 Nov 2022',
    // },
    // {
    //     name: 'Living Room',
    //     timeTaken: 3,
    //     startDate: '30 Oct 2022',
    // },
    // {
    //     name: 'Balcony',
    //     timeTaken: 1,
    //     startDate: '29 Oct 2022',
    // },
    // {
    //     name: 'Bedroom',
    //     timeTaken: 1,
    //     startDate: '28 Oct 2022',
    // },
  ],
};

const Timeline = () => {
  const [timeLineData, setTimeLineData] = useState(initialData.roomSequence);

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

  const renderItem = ({item, index, drag}) => {
    const {totalTime = 0} = item;
    console.log('renderItem data', item, totalTime);
    return (
      <TouchableOpacity onLongPress={drag} style={styles.item}>
        <View style={styles.projectLine}>
          <Image source={ellipse} style={styles.ellipse} resizeMode="contain" />
          <View style={styles.straightLine} />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.heading, styles.noMargin]}>{item.name}</Text>
          <View style={styles.dateContainer}>
            <Image
              source={ellipse}
              style={styles.flagImg}
              resizeMode="contain"
            />
            <Text style={styles.startDate}>{item.startDate}</Text>
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

  const resetPriority = data => {
    console.log('resetPriority data', data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>{strings.reorderText}</Text>
        <View style={styles.listStyle}>
          <DraggableFlatList
            data={timeLineData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            onDragEnd={({data}) => setTimeLineData(data)}
            // containerStyle={styles.listStyle}
          />
        </View>
        {/* </SafeAreaView> */}
      </View>
    </View>
  );
};

export default Timeline;
