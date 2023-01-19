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
// import data from './data.json';
import RouteConfig from '../../constants/route-config.js';
import { API } from '../../requests';
import colors from '../../constants/colors.js';
import Popup from '../../components/Popup/index.js';

export interface Props {
  props: String;
}

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
      myDayInfo: {},
      activeTabIndex: 1,
    };
  }

  componentDidMount() {
    this.fetchMyDayInfo();
  }

  showSpinner = () => {
    this.setState({
      popup: { type: POPUP_CONSTANTS.SPINNER_POPUP },
    });
  };

  closePopup = () => {
    this.setState({ popup: undefined });
  };

  fetchMyDayInfo = () => {
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
    this.fetchMyDayInfo();
  };

  projectClick = action => {
    const { navigation } = this.props;
    navigation.navigate(RouteConfig.ProjectsDetails);
  };

  getProjects = () => {
    // const {response} = data;
    const { myDayInfo, activeTabIndex } = this.state;
    const { today, crewList, tomorrow } = myDayInfo;
    const projects = activeTabIndex === 1 ? today : tomorrow;
    return (
      <SafeAreaView style={styles.projectsWrapper}>
        <FlatList
          data={projects}
          keyExtractor={(item, index) => item.Id + index}
          renderItem={({ item }) => (
            <ProjectTimeLine data={item} onClick={this.projectClick} />
          )}
        />
      </SafeAreaView>
    );
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
    }
  };

  render() {
    const { name, buttons, popup } = this.state;
    return (
      <View style={styles.container}>
        <Popup visible={!!popup}>{this.getPopupContent()}</Popup>
        <View style={styles.welcomeMessage}>
          <Text style={styles.welcomeText}>
            Hi {name}, Good Morning! Here is the list of things that needs to be
            done in your day{''}
          </Text>
        </View>
        <View style={styles.bodyContainer}>
          <SwithcButtons
            buttons={buttons}
            onClick={button => this.onClick(button)}
          />
          {this.getProjects()}
        </View>
      </View>
    );
  }
}

export default MyDay;
