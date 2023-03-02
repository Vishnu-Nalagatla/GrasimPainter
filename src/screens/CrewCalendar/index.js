import { Text } from 'native-base';
import React, { useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { Image } from 'native-base';
import ellipse from '../../assets/images/ellipse/image.png';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
// import crewData from './data.json';
import POPUP_CONSTANTS from '../../enums/popup';

import ViewPort from '../../constants/view-port';
const { vh, vw } = ViewPort;

import styles from './styles';
import colors from '../../constants/colors';
import Popup from '../../components/Popup';
import StandardPopup from '../../components/Common/StandardPopup';
import { API, SFDC_API } from '../../requests';

class CrewCalendar extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      popup: undefined,
      index: 1,
      crewData: [],
    };
  }

  componentDidMount() {
    this.getCrewCalendar();
  }

  showSpinner = () => {
    this.setState({
      popup: { type: POPUP_CONSTANTS.SPINNER_POPUP },
    });
  };

  closePopup = () => {
    this.setState({ popup: undefined });
  };
  getCrewCalendar = () => {
    const request = {
      territoryid: "T1"
    }
    this.showSpinner();
    API.getCrewCalendar(request)
      .then(response => {
        const { data } = response;
        const crewInfo = data.records;
        this.setState({
          crewData: data,
        });
        this.closePopup();
      })
      .catch(error => {
        this.setState({
          validationMsg: 'Error invoking Send OTP API',
          popup: undefined,
        });
        console.log('send otp error', error);
      });
  };

  onSwipeLeft = gestureState => {
    const { crewData } = this.state;
    const crewlength = crewData[0].crew.length - 4;
    const { index } = this.state;
    if (index < crewlength) {
      let that = this;
      this.setState({
        index: index + 1,
        popup: { type: POPUP_CONSTANTS.SPINNER_POPUP },
      });
      setTimeout(function () {
        that.setState({
          popup: undefined,
        });
      }, 500);
    }
  };

  onSwipeRight = gestureState => {
    const { index } = this.state;
    if (index > 1) {
      let that = this;
      this.setState({
        index: index - 1,
        popup: { type: POPUP_CONSTANTS.SPINNER_POPUP },
      });
      setTimeout(function () {
        that.setState({
          popup: undefined,
        });
      }, 500);
    }
  };

  showCrewRow = () => {
    const { index } = this.state;
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

  config = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 30,
  };
  getPopupContent = () => {
    const { popup } = this.state;

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
    const { popup, index, crewData } = this.state;
    const { style = {} } = popup || {};
    return (
      <View style={styles.container}>
        <Popup popupStyle={style} visible={!!popup}>
          {this.getPopupContent()}
        </Popup>
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
                onSwipeLeft={state => this.onSwipeLeft(state)}
                onSwipeRight={state => this.onSwipeRight(state)}
                config={this.config}
                style={{
                  backgroundColor: colors.white,
                  height: 38 * vh,
                  width: 200 * vw,
                }}>
                {this.showCrewRow()}
              </GestureRecognizer>
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.timeLineContainer}>
            {crewData.map(item => {
              return <TimeLine item={item} index={index} />
            }
            )}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const TimeLine = ({ item, index }) => {
  const { date, crew } = item;
  const lastIndex = index + 4;
  const currentCrewData = crew.filter(cr => {
    const { Title } = cr;
    const currentIndex = Title.replace('C', '');
    if (currentIndex >= index && currentIndex <= lastIndex) {
      // console.info('currentIndex..', currentIndex, index, cr);
      return cr;
    }
  });
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
        {currentCrewData.map((crewDay, index) => {
          // console.info('crewDay...', crewDay);
          // const cIndex = index + 1;
          // const onLeave = crewDay['c' + cIndex] === 'leave';
          // const occupied = crewDay['c' + cIndex] === 'occupied';
          const onLeave = crewDay.Status === 'Leave';
          const available = crewDay.Status === 'Available';
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
                    available ? styles.timeLineNotOccupied : styles.timeLineRow
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

export default CrewCalendar;
