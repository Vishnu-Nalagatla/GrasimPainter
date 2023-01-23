import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import styles from './styles.js';
import POPUP_CONSTANTS from '../../enums/popup';
import SwithcButtons from '../../components/SwithcButtons';
import ProjectTimeLine from '../../components/Common/ProjectTimeLine/index.js';
import data from './data.json';
import RouteConfig from '../../constants/route-config.js';
import {API} from '../../requests';
import colors from '../../constants/colors.js';
import Popup from '../../components/Popup/index.js';
import Success from '../../components/Common/Success/index.js';

import doneColor from '../../assets/images/doneColor/image.png';
import errorIcon from '../../assets/images/naColor/image.png';

import StandardPopup from '../../components/Common/StandardPopup/index.js';

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
          label: 'Today',
          status: true,
          index: 1,
        },
        {
          index: 2,
          label: 'Tomorrow',
          status: false,
        },
      ],
      myDayInfo: data.response,
      activeTabIndex: 1,
      successScreen: undefined,
    };
  }
  // successScreen: {
  //   message: 'Request for quality check has been sent successfully',
  //   image: doneColor,
  // },

  componentDidMount() {
    // this.fetchMyDayInfo();
  }

  showSpinner = () => {
    this.setState({
      popup: {type: POPUP_CONSTANTS.SPINNER_POPUP},
    });
  };

  closePopup = () => {
    this.setState({popup: undefined});
  };

  fetchMyDayInfo = () => {
    const request = {
      userId: '0051y000000NpxWAAS',
      role: 'TeamLeadId',
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

  updateCrewDetails = project => {
    console.info('updateCrewDetails...', project);
    this.setState({
      popup: {type: POPUP_CONSTANTS.SPINNER_POPUP},
    });
    const request = {
      organizationId: 'organizationID',
      scheduleId: 'scheduleID',
    };
    API.updateCrewDetails(request)
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

  projectClick = project => {
    const {displayStatus} = project || {};
    const {order} = displayStatus || {};
    const {navigation} = this.props;
    switch (+order) {
      case Priority.CREATE_PROJECT_PLAN:
        // navigation.navigate(RouteConfig.ProjectsDetails);
        break;
      case Priority.CONFIRM_CREW_ALLOCATION:
        this.confirmCrewAllocation(project);
        break;
      case Priority.CONFIRM_UPDATED_PLAN:
        navigation.navigate(RouteConfig.ProjectsDetails, {
          index: PROJECT_DETAILS_NAVIGATION.TIMELINE,
        });
        break;
      case Priority.VISIT_PROJECT_SITE:
        navigation.navigate(RouteConfig.ProjectsDetails);
        break;
      case Priority.REQUEST_FOR_QUALITY_CHECK:
        this.requestForQualityCheck(project);
        break;
      case Priority.CHECK_UPDATES:
        navigation.navigate(RouteConfig.ProjectsDetails);
        break;
      case Priority.UPDATE_LEFTOVER_MATERIAL:
        navigation.navigate(RouteConfig.ProjectsDetails, {
          index: PROJECT_DETAILS_NAVIGATION.MATERIAL,
        });
        break;
      default:
        navigation.navigate(RouteConfig.ProjectsDetails, {
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
              onClick={this.projectClick}
              updateCrewDetails={this.updateCrewDetails}
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
    }
  };

  render() {
    const {name, buttons, popup, successScreen} = this.state;
    return (
      <View style={styles.container}>
        <Popup visible={!!popup}>{this.getPopupContent()}</Popup>

        {successScreen ? (
          <Success info={successScreen} />
        ) : (
          <View style={styles.bodyContainer}>
            <View style={styles.welcomeMessage}>
              <Text style={styles.welcomeText}>
                Hi {name}, Good Morning! Here is the list of things that needs
                to be done in your day{''}
              </Text>
            </View>
            <SwithcButtons
              buttons={buttons}
              onClick={button => this.onClick(button)}
            />
            {this.getProjects()}
          </View>
        )}
      </View>
    );
  }
}

export default MyDay;
