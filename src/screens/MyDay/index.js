import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import styles from './styles.js';
import POPUP_CONSTANTS from '../../enums/popup';
import ProjectTimeLine from '../../components/Common/ProjectTimeLine/index.js';
import data from './data.json';
import RouteConfig from '../../constants/route-config.js';
import {API, SFDC_API} from '../../requests';
import colors from '../../constants/colors.js';
import Popup from '../../components/Popup/index.js';
import Success from '../../components/Common/Success/index.js';
import errorIcon from '../../assets/images/naColor/image.png';
import errorImg from '../../assets/images/error/image.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

import StandardPopup from '../../components/Common/StandardPopup/index.js';
import CustomButton from '../../components/Button';
import {Image} from 'native-base';
import TimePicker from '../../components/TimePicker';
import SwitchButtons from '../../components/SwitchButtons';
import {setMyDayData} from '../../store/actions';
import strings from '../../globalization';
import moment from 'moment';
import UTIL from '../../util/index';

export interface Props {
  props: String;
}

const Priority = {
  CREATE_PROJECT_PLAN: 1,
  CONFIRM_CREW_ALLOCATION: 2,
  CONFIRM_UPDATED_PLAN: 3,
  VISIT_PROJECT_SITE: 4,
  REQUEST_FOR_QUALITY_CHECK: 5,
  CHECK_UPDATES: 6,
  UPDATE_LEFTOVER_MATERIAL: 7,
  PROJECT_DETAILS: 8,
  ON_CREW_CONFIRMATION: 9,
};
const PROJECT_DETAILS_NAVIGATION = {
  PROGRESS: 0,
  TIMELINE: 1,
  MATERIAL: 2,
  REPORTS: 3,
  CHECKLIST: 4,
  INFO: 5,
};

class MyDay extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      popup: undefined,
      buttons: [
        {
          label: strings.todayLabel,
          status: true,
          index: 1,
        },
        {
          index: 2,
          label: strings.tomorrowLabel,
          status: false,
        },
      ],
      myDayInfo: data.response,
      activeTabIndex: 1,
      successScreen: undefined,
      showTime: false,
      calendarCrewIndex: 1,
      loggedInUser: {},
    };
  }

  componentDidMount() {
    const currentDate = UTIL.currentDate();
    AsyncStorage.getItem('loggedInUser' + currentDate).then(user => {
      this.setState(
        {
          loggedInUser: JSON.parse(user),
        },
        () => {
          this.fetchMyDayInfo(JSON.parse(user));
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

  fetchMyDayInfo = user => {
    const loggedInUser = JSON.parse(user);
    //FIXME:
    const {Id, Territory__c, roleKey = 'TeamLeadId'} = loggedInUser || {};
    const request = {
      userId: Id,
      role: roleKey,
      territoryid: Territory__c,
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
  };

  requestForQualityCheck = project => {
    const {Id} = project;
    this.setState({
      popup: {type: POPUP_CONSTANTS.SPINNER_POPUP},
    });
    const date = moment(new Date()).format('YYYY-MM-DD');
    const request = {
      QC_Allocated_Date__c: date,
      QC_Check_Status__c: 'Requested',
    };
    const projectId = Id;
    this.showSpinner();
    SFDC_API.requestForQualityCheck(projectId, request)
      .then(res => {
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
            popupStyle: styles.popupStyle,
            headingImage: errorImg,
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

  assignCrewToProject = project => {
    const {Id} = project;
    const {loggedInUser} = this.state;
    const {Id: userId} = loggedInUser;
    this.setState({
      popup: {
        type: POPUP_CONSTANTS.SPINNER_POPUP,
      },
    });
    const request = {
      hpId: userId,
      projectID: Id,
    };
    SFDC_API.assignCrewToProject(request)
      .then(res => {
        this.setState({
          popup: undefined,
        });
      })
      .catch(error => {
        this.setState({
          popup: {
            type: POPUP_CONSTANTS.CREW_OCCUPIED,
            style: styles.popup,
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

  scheduleSiteVisit = project => {
    const {loggedInUser} = this.state;
    const {Id: userId} = loggedInUser;
    const {Id} = project;

    this.setState(
      {
        popup: undefined,
      },
      () => {
        this.showSpinner();
      },
    );

    // 2 days before..
    //  start Date : today +  1day,
    //  EndDateTime: start Date + 30 min.
    const today = new Date();
    const StartDateTime = today.addDays(1);
    const EndDateTime = new Date(StartDateTime.getTime() + 30 * 60000);
    const request = {
      OwnerId: userId, // loggedin UserId
      WhatId: Id,
      StartDateTime,
      EndDateTime,
      Type: 'TL Visit',
      Subject: 'TL Visit',
    };
    SFDC_API.scheduleSiteVisit(request)
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
            headingImage: errorImg,
            popupStyle: styles.popupStyle,
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

  viewCrewCalendar = () => {
    const {navigation} = this.props;
    const {calendarCrewIndex, myDayInfo} = this.state;
    navigation.navigate(RouteConfig.CrewCalendar, {
      calendarCrewIndex: calendarCrewIndex,
      crewList: myDayInfo.crewList,
    });
  };

  projectClick = (project, projectData) => {
    const {displayStatus} = project || {};
    const {order} = displayStatus || {};
    const {navigation, dispatchSetMyDayData} = this.props;
    const {loggedInUser} = this.state;
    if (projectData) {
      dispatchSetMyDayData(projectData);
    }
    switch (+order) {
      case Priority.CREATE_PROJECT_PLAN:
        dispatchSetMyDayData(project);
        navigation.navigate(RouteConfig.ProjectDetails, {
          ProjectDetailsData: project,
          loggedInUser,
          index: PROJECT_DETAILS_NAVIGATION.TIMELINE,
        });
        break;
      case Priority.CONFIRM_CREW_ALLOCATION:
        this.confirmCrewAllocation(project);
        break;
      case Priority.CONFIRM_UPDATED_PLAN:
        dispatchSetMyDayData(project);
        navigation.navigate(RouteConfig.ProjectDetails, {
          ProjectDetailsData: project,
          loggedInUser,
          index: PROJECT_DETAILS_NAVIGATION.TIMELINE,
        });
        break;
      case Priority.VISIT_PROJECT_SITE:
        this.setState({
          popup: {
            type: POPUP_CONSTANTS.TIME_PICKER,
            style: styles.popup,
          },
        });
        break;
      case Priority.REQUEST_FOR_QUALITY_CHECK:
        this.requestForQualityCheck(project);
        break;
      case Priority.CHECK_UPDATES:
        navigation.navigate(RouteConfig.Approve);
        break;
      case Priority.UPDATE_LEFTOVER_MATERIAL:
        navigation.navigate(RouteConfig.ProjectDetails, {
          ProjectDetailsData: project,
          loggedInUser,
          index: PROJECT_DETAILS_NAVIGATION.MATERIAL,
        });
        break;
      default:
        navigation.navigate(RouteConfig.ProjectDetails, {
          ProjectDetailsData: project,
          loggedInUser,
          index: PROJECT_DETAILS_NAVIGATION.PROGRESS,
        });
        break;
    }
  };

  approveProject = action => {
    const {navigation} = this.props;
    navigation.navigate(RouteConfig.Approve);
  };

  getProjects = () => {
    // const {response} = data;
    const {myDayInfo, activeTabIndex} = this.state;
    const {today, crewList, tomorrow} = myDayInfo;
    const projects = activeTabIndex === 1 ? today : tomorrow;
    return (
      <SafeAreaView style={styles.projectsWrapper}>
        <FlatList
          data={projects}
          keyExtractor={(item, index) => item.Id + index}
          renderItem={({item}) => (
            <ProjectTimeLine
              data={item}
              activeTabIndex={activeTabIndex}
              onClick={this.projectClick}
              assignCrewToProject={this.assignCrewToProject}
              viewCrewCalendar={this.viewCrewCalendar}
            />
          )}
        />
      </SafeAreaView>
    );
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
      case POPUP_CONSTANTS.CREW_OCCUPIED:
        return <CrewOccupied {...popup} onPress={this.closePopup} />;
      case POPUP_CONSTANTS.TIME_PICKER:
        return (
          <TimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode={'time'}
            is24Hour={true}
            onChange={this.scheduleSiteVisit}
            onClose={this.closePopup}
            hours={12}
            minutes={12}
            meridian="AM"
            {...popup}
          />
        );
    }
  };

  render() {
    const {reduxProps} = this.props;
    const {login} = reduxProps;
    // console.info('login..', login);
    const {buttons, popup, successScreen, loggedInUser} = this.state;
    const {FirstName = ''} = loggedInUser || {};
    const {style = {}} = popup || {};

    return (
      <View style={styles.container}>
        <Popup popupStyle={style} visible={!!popup}>
          {this.getPopupContent()}
        </Popup>
        {successScreen ? (
          <Success info={successScreen} />
        ) : (
          <View style={styles.bodyContainer}>
            <View style={styles.welcomeMessage}>
              <Text style={styles.welcomeText}>
                Hi {FirstName}, {strings.goodMoringing}
              </Text>
            </View>
            <View style={styles.body}>
              <SwitchButtons
                buttons={buttons}
                onClick={button => this.onClick(button)}
              />
              {this.getProjects()}
            </View>
          </View>
        )}
      </View>
    );
  }
}

const CrewOccupied = ({onPress}) => {
  return (
    <View style={styles.crewContainer}>
      <Image
        source={errorIcon}
        style={styles.errorIcon}
        resizeMode="contain"
        alt=""
      />
      <Text style={styles.headerMessage}>{strings.crewOccupiedMessage}</Text>
      <Text style={styles.textInfo}>{strings.selectDifferentCrew}</Text>
      <CustomButton
        title={strings.selectCrew}
        textStyle={styles.btnTxt}
        style={styles.button}
        onPress={onPress}
      />
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchSetMyDayData: payload => {
    dispatch(setMyDayData(payload));
  },
});

const mapStateToProps = reduxProps => ({
  reduxProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(MyDay);
