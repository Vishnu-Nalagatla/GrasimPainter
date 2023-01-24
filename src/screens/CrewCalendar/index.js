import {Text} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {Image} from 'native-base';
import ellipse from '../../assets/images/ellipse/image.png';

import styles from './styles';

const CrewCalendar = () => {
  const weekData = [
    {
      date: 'Today',
      index: 1,
      crew: [
        {c1: 'occupied'},
        {c2: 'leave'},
        {c3: 'notOccupied'},
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
  ];
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
          <Text>{date}</Text>
        </View>
        <View style={styles.crewWrapper}>
          {crew.map((crewDay, index) => {
            const cIndex = index + 1;
            // console.info('crewDay', crewDay, cIndex);
            const onLeave = crewDay['c' + cIndex] === 'leave';
            const occupied = crewDay['c' + cIndex] === 'occupied';
            console.info('crewDay', crewDay, onLeave);
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

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.header}>
          <View style={styles.dayWrapper}>
            <Image
              source={ellipse}
              style={styles.ellipse}
              alt=""
              resizeMode="contain"
            />
            <Text>{'Date'}</Text>
          </View>
          <View style={styles.crewWrapper}>
            <Text style={styles.crewName}>{'C1'}</Text>
            <Text style={styles.crewName}>{'C2'}</Text>
            <Text style={styles.crewName}>{'C3'}</Text>
            <Text style={styles.crewName}>{'C4'}</Text>
            <Text style={styles.crewName}>{'C5'}</Text>
          </View>
        </View>
        <View style={styles.timeLineContainer}>
          {weekData.map(item => (
            <TimeLine item={item} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default CrewCalendar;
