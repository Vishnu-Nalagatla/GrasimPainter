import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {API} from '../../requests';
import POPUP_CONSTANTS from '../../enums/popup';
import ROLES from '../../enums/roles';
import colors from '../../constants/colors';
import StandardPopup from '../../components/Common/StandardPopup';
import styles from './styles';
import Popup from '../../components/Popup';
import errorIcon from '../../assets/images/naColor/image.png';
import {Image, ScrollView} from 'native-base';
import groupIcon from '../../assets/images/splash/paint_logo.png';
import calendar from '../../assets/images/calendar/image.png';
import data from './data.json';
import RouteConfig from '../../constants/route-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import util from '../../util';

class MyTeam extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      popup: undefined,
    };
  }
  available = 'Available';
  occupied = 'Occupied';
  crewCalendar = 'Crew Calendar';

  componentDidMount() {
    const currentDate = util.currentDate();
    //FIXME: Change route logic.
    AsyncStorage.getItem('loggedInUser' + currentDate).then(user => {
      this.setState(
        {
          loggedInUser: JSON.parse(user),
        },
        () => {
          const loggedInUser = JSON.parse(user);
          const {navigation} = this.props;
          const {roleKey = 'HeadPainterId'} = loggedInUser || {};
          if (roleKey === ROLES.HEADPAINTER) {
            navigation.navigate(RouteConfig.CrewDetails, {
              data: [''],
            });
          } else {
            // this.getMyTeam(JSON.parse(user));
          }
        },
      );
    });
  }

  showSpinner = () => {
    this.setState({
      popup: {type: POPUP_CONSTANTS.SPINNER_POPUP},
    });
  };

  closePopup = () => {
    this.setState({popup: undefined});
  };

  getMyTeam = user => {
    const loggedInUser = JSON.parse(user);
    const {Id = '', roleKey = 'TeamLeadId'} = loggedInUser || {};
    const request = {
      userId: Id,
      role: roleKey,
    };
    this.showSpinner();
    API.getMyDayInfo(request)
      .then(response => {
        const {data} = response;
        const myDayInfo = data.response;
        this.closePopup();
        this.setState({
          myDayInfo,
        });
      })
      .catch(error => {
        this.setState({
          validationMsg: 'Error invoking Send OTP API',
          popup: undefined,
        });
        console.log('send otp error', error);
      });
  };

  onClick = event => {
    const {buttons} = this.state;
    const activeTabIndex = event.index;
    const buttonsChanged = buttons.map(button => {
      const {index} = button;
      if (event.index === index && !event.status) {
        button.status = true;
      } else {
        button.status = false;
      }
      return button;
    });
    this.setState({
      buttons: buttonsChanged,
      activeTabIndex,
    });
    // this.fetchMyDayInfo();
  };

  requestForQualityCheck = project => {
    console.info('project...', project);
    this.setState({
      popup: {type: POPUP_CONSTANTS.SPINNER_POPUP},
    });
    const request = {
      organizationId: 'organizationID',
      scheduleId: 'scheduleID',
    };
    API.requestForQualityCheck(request)
      .then(res => {
        console.info('res', res);
        this.setState({
          popup: undefined,
        });
      })
      .catch(error => {
        this.setState({
          popup: {
            type: POPUP_CONSTANTS.ERROR_POPUP,
            heading: 'Network Error',
            message: error.message,
            headingImage: errorIcon,
            buttons: [
              {
                title: 'TryAgain',
                onPress: () => this.closePopup(),
              },
            ],
          },
        });
      });
  };

  getPopupContent = () => {
    const {popup} = this.state;

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
  viewCrewDetails = () => {
    const {navigation} = this.props;
    navigation.navigate(RouteConfig.CrewDetails, {
      data: [''],
    });
  };

  render() {
    const {popup} = this.state;
    const {style = {}} = popup || {};
    const availableCrew = [data[0]];
    const occupiedCrew = data;
    return (
      <View style={styles.container}>
        <Popup popupStyle={style} visible={!!popup}>
          {this.getPopupContent()}
        </Popup>

        <ScrollView style={styles.crewWrapper}>
          <CrewList
            title={this.available}
            crewList={availableCrew}
            onPress={this.viewCrewDetails}
          />
          <CrewList
            title={this.occupied}
            crewList={occupiedCrew}
            onPress={this.viewCrewDetails}
          />
        </ScrollView>
      </View>
    );
  }
}

const CrewList = ({title, crewList, onPress}) => {
  const hrStyle = title === 'Available' ? styles.hrLine : styles.hrLineO;
  const showCrewCalendar = title === 'Available' ? false : true;
  return (
    <View style={styles.crewContainer}>
      <View style={styles.labelWrapper}>
        <Text style={styles.crewTitle}>{title}</Text>
        <View style={hrStyle} />
        {showCrewCalendar ? (
          <Text style={styles.crewCalendarLabel}>{'Crew Calendar'}</Text>
        ) : null}
      </View>
      {crewList.map(crew => {
        return <CrewCard crew={crew} onPress={onPress} />;
      })}
    </View>
  );
};

const CrewCard = ({crew, onPress}) => {
  const {name, img = groupIcon, status, skills} = crew;
  return (
    <TouchableOpacity onPress={onPress} style={styles.crewCard}>
      <View style={styles.crewInfo}>
        <Image
          source={groupIcon}
          style={styles.crewImg}
          resizeMode="contain"
          alt=""
        />
        <View>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.crewAvailablity}>
            <Image
              source={calendar}
              style={styles.calendarImg}
              resizeMode="contain"
              alt=""
            />
            <Text style={styles.status}>{status}</Text>
          </View>
          <Text style={styles.availablitylabel}>
            {'Available from 30 Oct 2022'}
          </Text>
        </View>
      </View>
      <View style={styles.skillsWrapper}>
        {skills.map(skill => {
          return <Text style={styles.skill}> {skill}</Text>;
        })}
      </View>
    </TouchableOpacity>
  );
};
const mapStateToProps = reduxProps => ({
  reduxProps,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MyTeam);
