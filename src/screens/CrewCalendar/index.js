import {Text} from 'native-base';
import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Image} from 'native-base';
import ellipse from '../../assets/images/ellipse/image.png';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import ViewPort from '../../constants/view-port';
const {vh, vw} = ViewPort;

import styles from './styles';
import colors from '../../constants/colors';

const CrewCalendar = () => {
  const weekData = [
    {
      date: 'Today',
      index: 1,
      crew: [
        {c1: 'occupied'},
        {c2: 'leave'},
        {c3: 'occupied'},
        {c4: 'occupied'},
        {c5: 'occupied'},
      ],
    },
    {
      date: '02 Sep',
      index: 2,
      crew: [
        {c1: 'occupied'},
        {c2: 'notOccupied'},
        {c3: 'leave'},
        {c4: 'notOccupied'},
        {c5: 'occupied'},
      ],
    },
    {
      date: '03 Sep',
      index: 3,
      crew: [
        {c1: 'notOccupied'},
        {c2: 'notOccupied'},
        {c3: 'leave'},
        {c4: 'occupied'},
        {c5: 'occupied'},
      ],
    },
    {
      date: '04 Sep',
      index: 4,
      crew: [
        {c1: 'occupied'},
        {c2: 'leave'},
        {c3: 'notOccupied'},
        {c4: 'occupied'},
        {c5: 'notOccupied'},
      ],
    },
    {
      date: '05 Sep',
      index: 5,
      crew: [
        {c1: 'notOccupied'},
        {c2: 'notOccupied'},
        {c3: 'notOccupied'},
        {c4: 'notOccupied'},
        {c5: 'leave'},
      ],
    },
    {
      date: '06 Sep',
      index: 6,
      crew: [
        {c1: 'leave'},
        {c2: 'notOccupied'},
        {c3: 'notOccupied'},
        {c4: 'notOccupied'},
        {c5: 'notOccupied'},
      ],
    },
    {
      date: '07 Sep',
      index: 4,
      crew: [
        {c1: 'occupied'},
        {c2: 'leave'},
        {c3: 'notOccupied'},
        {c4: 'occupied'},
        {c5: 'notOccupied'},
      ],
    },
    {
      date: '08 Sep',
      index: 5,
      crew: [
        {c1: 'notOccupied'},
        {c2: 'notOccupied'},
        {c3: 'notOccupied'},
        {c4: 'notOccupied'},
        {c5: 'leave'},
      ],
    },
    {
      date: '09 Sep',
      index: 6,
      crew: [
        {c1: 'leave'},
        {c2: 'notOccupied'},
        {c3: 'notOccupied'},
        {c4: 'notOccupied'},
        {c5: 'notOccupied'},
      ],
    },
  ];

  const [index, setIndex] = useState(1);

  const onSwipeLeft = gestureState => {
    console.info('onSwipeLeft...');
    setIndex(index + 1);
  };

  const onSwipeRight = gestureState => {
    console.info('onSwipeRight');
    setIndex(index - 1);
  };

  const showCrewRow = () => {
    return (
      <View style={styles.crewWrapper}>
        <Text style={styles.crewName}>{'C' + index}</Text>
        <Text style={styles.crewName}>{'C' + (index + 1)}</Text>
        <Text style={styles.crewName}>{'C' + (index + 2)}</Text>
        <Text style={styles.crewName}>{'C' + (index + 3)}</Text>
        <Text style={styles.crewName}>{'C' + (index + 4)}</Text>
      </View>
    );
  };

  const TimeLine = ({item}) => {
    const {date, crew} = item;
    return (
      <View style={styles.crewTimeLine}>
        <View style={styles.dayWrapper}>
          <Image
            source={ellipse}
            style={styles.ellipse}
            alt=""
            resizeMode="contain"
          />
          <View style={styles.sraitLine} />
          <Text>{date}</Text>
        </View>
        <View style={styles.crewWrapper}>
          {crew.map((crewDay, index) => {
            const cIndex = index + 1;
            const onLeave = crewDay['c' + cIndex] === 'leave';
            const occupied = crewDay['c' + cIndex] === 'occupied';
            // console.info('crewDay', crewDay, onLeave);
            return (
              <View style={styles.timeLineView}>
                {onLeave ? (
                  <View style={styles.timeLineRowInActive}>
                    <Text style={styles.timeLineRowLeave} />
                  </View>
                ) : (
                  <Text
                    style={
                      occupied ? styles.timeLineRow : styles.timeLineNotOccupied
                    }
                  />
                )}
              </View>
            );
          })}
        </View>
      </View>
    );
  };


  const config = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 30,
  };
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.gestureWrapper}>
          <View style={styles.header}>
            <Image
              source={ellipse}
              style={styles.ellipse}
              alt=""
              resizeMode="contain"
            />
            <Text style={styles.date}>{'Date'}</Text>
          </View>
          <View>
            <GestureRecognizer
              onSwipeLeft={state => onSwipeLeft(state)}
              onSwipeRight={state => onSwipeRight(state)}
              config={config}
              style={{
                backgroundColor: colors.white,
                height: 38 * vh,
                width: 200 * vw,
              }}>
              {showCrewRow()}
            </GestureRecognizer>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.timeLineContainer}>
          {weekData.map(item => (
            <TimeLine item={item} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default CrewCalendar;
