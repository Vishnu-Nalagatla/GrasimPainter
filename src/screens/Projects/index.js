import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {FlatList, Image, ScrollView} from 'native-base';
import styles from './styles';
import bellImg from '../../assets/images/group/image.png';
import barchart from '../../assets/images/barchart/image.png';
import Popup from '../../components/Popup';
import POPUP_CONSTANTS from '../../enums/popup';
import colors from '../../constants/colors';
import RouteConfig from '../../constants/route-config';
import {API, SFDC_API} from '../../requests';
import StandardPopup from '../../components/Common/StandardPopup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UTIL from '../../util/index';

const PROJECT_DETAILS_NAVIGATION = {
  PROGRESS: 0,
  TIMELINE: 1,
  MATERIAL: 2,
  REPORTS: 3,
  CHECKLIST: 4,
  INFO: 5,
};

class Projects extends React.Component<Props, State> {
  constructor(props) {
    // const {response = {}} = data;
    // const {newProjects, ongoingProjects} = response;
    super(props);
    this.state = {
      popup: undefined,
      newProjects: [],
      ongoingProjects: [],
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
          // this.fetchMyDayInfo(JSON.parse(user));
          this.getMyProjects(JSON.parse(user));
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
  getMyProjects = user => {
    const loggedInUser = JSON.parse(user);
    const {Id, Territory__c, roleKey} = loggedInUser || {};
    const request = {
      TeamLeadId: Id,
    };
    this.showSpinner();
    SFDC_API.myProjectDetails(request)
      .then(response => {
        // const {data} = response;
        const ProjectList = response.data.ProjectList;
        console.log('ProjectList--->', ProjectList);
        let newProj = ProjectList.filter(item => item.Status == 'New');
        let onGoingProj = ProjectList.filter(item => item.Status != 'New');
      this.closePopup();
        this.setState({
          newProjects: newProj,
          ongoingProjects: onGoingProj,
        });
      })
      .catch(error => {
        this.setState({
          validationMsg: 'Error invoking Send OTP API',
          popup: undefined,
        });
      });
  };

  onPress = (item, index) => {
    const {navigation} = this.props;
    navigation.navigate(RouteConfig.ProjectDetails, {
      index: PROJECT_DETAILS_NAVIGATION.PROGRESS,
      ProjectDetailsData: item,
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
  insights = () => {
    const {navigation} = this.props;
    navigation.navigate(RouteConfig.Insights);
  };
  render() {
    const {ongoingProjects, newProjects, popup} = this.state;
    return (
      <ScrollView style={styles.container}>
        <Popup
          popupStyle={{
             borderRadius: 20,
          }}
          visible={!!popup}>
          {this.getPopupContent()}
        </Popup>
        {newProjects.length > 0 ? (
          <ProjectList
            projects={newProjects}
            label={'New'}
            onPress={this.onPress}
            onInsightsPress={this.insights}
          />
        ) : null}
        {ongoingProjects.length > 0 ? (
          <ProjectList
            projects={ongoingProjects}
            label={'Ongoing'}
            onPress={this.onPress}
            onInsightsPress={this.insights}
          />
        ) : null}
      </ScrollView>
    );
  }
}

export default Projects;
import Moment from 'moment';
const Project = ({project, label, index, onPress}) => {
  const {Name, ProjectPlanStatus, ProjectStartDate, ProjectEndDate} = project;
  const date = Moment(new Date()).format('DD MMM YYYY');
  const startingDiff =
    new Date(ProjectStartDate).getTime() - new Date().getTime();
  const endingDiff = new Date(ProjectEndDate).getTime() - new Date().getTime();
  const daysTill30June2035 = val => {
    return Math.floor(val / (1000 * 60 * 60 * 24));
  };
  return (
    <TouchableOpacity style={styles.projectsCard} onPress={onPress}>
      <View style={styles.headerInfo}>
        {!!Name ? <Text style={styles.name}>{Name}</Text> : null}
        {!!ProjectPlanStatus ? (
          <Text style={styles.status}>{ProjectPlanStatus}</Text>
        ) : null}
      </View>
      <View style={styles.dateInfo}>
        <Image
          source={bellImg}
          style={styles.flagImg}
          resizeMode="contain"
          alt=""
        />
        {label == 'Ongoing' ? (
          <Text style={styles.name}>{`Ending in ${daysTill30June2035(
            endingDiff,
          )} days`}</Text>
        ) : (
          <Text style={styles.name}>{`Starting in ${daysTill30June2035(
            startingDiff,
          )} days`}</Text>
        )}
      </View>
      <View style={styles.bottomInfo}>
        <Text style={styles.date}>{date}</Text>
        <Image
          source={bellImg}
          style={styles.flagImg}
          resizeMode="contain"
          alt=""
        />
      </View>
    </TouchableOpacity>
  );
};

const ProjectList = ({projects, label, onPress, onInsightsPress}) => {
  return (
    <SafeAreaView style={styles.projectsWrapper}>
      {label == 'Ongoing' ? (
        <View style={styles.onGoingStyles}>
          <Text>{label}</Text>
          <TouchableOpacity style={styles.rowStyles} onPress={onInsightsPress}>
            <Image
              source={barchart}
              style={styles.barChartImg}
              resizeMode="contain"
              alt=""
            />
            <Text style={{color: '#3C58B5'}}>Insights</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}

      <FlatList
        data={projects}
        keyExtractor={(item, index) => item.Id}
        renderItem={({item, index}) => (
          <Project
            project={item}
            label={label}
            index={index}
            onPress={() => {
              onPress(item, index);
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};
