import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
import { API } from '../../requests';
import POPUP_CONSTANTS from '../../enums/popup';
import colors from '../../constants/colors';
import StandardPopup from '../../components/Common/StandardPopup';
import styles from './styles';
import Popup from '../../components/Popup';
import errorIcon from '../../assets/images/naColor/image.png';
import { Image, ScrollView } from 'native-base';
import groupIcon from '../../assets/images/splash/paint_logo.png';
import calendar from '../../assets/images/calendar/image.png';
import RouteConfig from '../../constants/route-config.js';
import data from './data.json';

class CrewDetails extends React.Component<Props, State> {
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
    // this.fetchMyDayInfo();
  }

  showSpinner = () => {
    this.setState({
      popup: { type: POPUP_CONSTANTS.SPINNER_POPUP },
    });
  };

  closePopup = () => {
    this.setState({ popup: undefined });
  };

  fetchMyTeamInfo = () => {
    const request = {
      userId: '0051y000000NpxWAAS',
      role: 'TeamLeadId',
    };
    this.showSpinner();
    API.getMyDayInfo(request)
      .then(response => {
        const { data } = response;
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
    const { buttons } = this.state;
    const activeTabIndex = event.index;
    const buttonsChanged = buttons.map(button => {
      const { index } = button;
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
      popup: { type: POPUP_CONSTANTS.SPINNER_POPUP },
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
  viewCrewProfile = () => {
    const { navigation } = this.props;

    navigation.navigate(RouteConfig.CrewProfile, {
      profile: {},
    });
  };

  render() {
    const { getLoginInfo = {} } = this.props;
    const { firstName = '' } = getLoginInfo;
    const { popup } = this.state;
    const { style = {} } = popup || {};
    const crewList = data;
    const crewName = 'Bandra Crew 1';
    const crewInfo =
      'Crew 01 is a team of skilled painter Vikas Sharma and Sunil Mali with Ram Prakash as a head painter. The team is based in Mumbai. The Team is lead by Team Lead Mukesh soni.';
    return (
      <View style={styles.container}>
        <Popup popupStyle={style} visible={!!popup}>
          {this.getPopupContent()}
        </Popup>
        <View>
          <Text style={styles.crewTitle}>{crewName}</Text>
          <Text style={styles.crewMessage}>{crewInfo}</Text>
        </View>

        <View style={styles.crewWrapper}>
          <CrewList
            title={this.available}
            crewList={crewList}
            onPress={this.viewCrewProfile}
          />
        </View>
      </View>
    );
  }
}

const CrewList = ({ title, crewList, onPress }) => {
  return (
    <ScrollView style={styles.crewContainer}>
      {crewList.map(crew => {
        return <CrewCard crew={crew} onPress={onPress} />;
      })}
    </ScrollView>
  );
};

const CrewCard = ({ crew, onPress }) => {
  const { name, profilePic = groupIcon, status, skills = [] } = crew;
  return (
    <View style={styles.crewCard}>
      <View style={styles.header}>
        <Text style={styles.role}> {'Painter'}</Text>
        <Text style={styles.status}> {'ON LEAVE'}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyWrapper}>
          <Image
            source={profilePic}
            style={styles.profilePic}
            resizeMode="contain"
            alt=""
          />
          <Text style={styles.employeeName}> {'Vikas Sharma'}</Text>
        </View>
        <Text onPress={onPress} style={styles.viewProfile}>
          {'View Profile'}
        </Text>
      </View>
      <View style={styles.skillsWrapper}>
        {skills.map(skill => {
          return <Text style={styles.skill}> {skill}</Text>;
        })}
      </View>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    getLoginInfo: state.loginReducer.loginInfo,
  };
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CrewDetails);
