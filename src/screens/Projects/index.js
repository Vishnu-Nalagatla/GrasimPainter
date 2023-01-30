import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import data from './data.json';
import {FlatList, Image, ScrollView} from 'native-base';
import styles from './styles';
import bellImg from '../../assets/images/group/image.png';
import Popup from '../../components/Popup';
import POPUP_CONSTANTS from '../../enums/popup';
import colors from '../../constants/colors';
import RouteConfig from '../../constants/route-config';

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
    const {response = {}} = data;
    const {newProjects, ongoingProjects} = response;
    super(props);
    this.state = {
      popup: undefined,
      newProjects: newProjects,
      ongoingProjects: ongoingProjects,
    };
  }

  componentDidMount() {
    // this.fetchMyDayInfo();
  }

  onPress = () => {
    const {navigation} = this.props;
    console.info('onPress...');
    navigation.navigate(RouteConfig.ProjectsDetails);
    navigation.navigate(RouteConfig.ProjectsDetails, {
      index: PROJECT_DETAILS_NAVIGATION.PROGRESS,
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
    }
  };

  render() {
    const {ongoingProjects, newProjects, popup} = this.state;
    return (
      <ScrollView style={styles.container}>
        <Popup visible={!!popup}>{this.getPopupContent()}</Popup>
        <ProjectList
          projects={newProjects}
          label={'New'}
          onPress={this.onPress}
        />
        <ProjectList
          projects={ongoingProjects}
          label={'Ongoing'}
          onPress={this.onPress}
        />
      </ScrollView>
    );
  }
}

export default Projects;

const Project = ({project, label, index, onPress}) => {
  const {Name, ProjectPlanStatus} = project;
  return (
    <TouchableOpacity style={styles.projectsCard} onPress={onPress}>
      <View style={styles.headerInfo}>
        <Text style={styles.name}> {Name}</Text>
        <Text style={styles.status}> {ProjectPlanStatus}</Text>
      </View>
      <View style={styles.dateInfo}>
        <Image source={bellImg} style={styles.flagImg} resizeMode="contain" />
        <Text style={styles.name}> {'Starting in 20 days'}</Text>
      </View>
      <View style={styles.bottomInfo}>
        <Text style={styles.date}> {'30 Oct 2022'}</Text>
        <Image source={bellImg} style={styles.flagImg} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );
};

const ProjectList = ({projects, label, onPress}) => {
  return (
    <SafeAreaView style={styles.projectsWrapper}>
      <Text style={styles.label}>{label}</Text>
      <FlatList
        data={projects}
        keyExtractor={(item, index) => item.Id}
        renderItem={({item, index}) => (
          <Project
            project={item}
            label={label}
            index={index}
            onPress={onPress}
          />
        )}
      />
    </SafeAreaView>
  );
};
