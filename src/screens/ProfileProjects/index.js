import {View, FlatList} from 'native-base';
import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import data from './data.json';
import {Dropdown} from 'react-native-element-dropdown';
import checkImg from '../../assets/images/myProjects/check.png';
import flagImg from '../../assets/images/timeline/flag.png';
import projectImg from '../../assets/images/myProjects/projectImg.png';
import flaskImg from '../../assets/images/flask/image.png';
import RouteConfig from '../../constants/route-config';

const statuses = [
  {label: 'All', value: 'All'},
  {label: 'Completed', value: 'Completed'},
  {label: 'New', value: 'New'},
  {label: 'On Hold', value: 'On Hold'},
  {label: 'Conflict', value: 'Conflict'},
  {label: 'QC Visit', value: 'QC Visit'},
  {label: 'Paid', value: 'Paid'},
  {label: 'In Progress', value: 'In Progress'},
];

class ProfileProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      projectsList: data,
    };
  }

  setStatus = status => {
    const {projectsList} = this.state;
    const filteredList = projectsList.filter(each => each.Status === status);
    this.setState({status: status, projectsList: filteredList});
  };

  renderItem = item => {
    console.log('render item', item);
    const {status} = this.state;
    if (status === item.value) {
      return (
        <View style={styles.item}>
          <Text style={styles.textStyle}>{item.value}</Text>
          <Image source={checkImg} style={styles.checkImg} />
        </View>
      );
    }
    return (
      <View style={styles.item}>
        <Text style={styles.textStyle}>{item.value}</Text>
      </View>
    );
  };

  navigateToDetails = project => {
    const {navigation} = this.props;
    navigation.navigate(RouteConfig.ProfileProjectDetails, {
      project: project,
    });
  };

  render() {
    const {projectsList} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.totalProjects}>Total Projects {data.length}</Text>
          <Dropdown
            style={styles.dropdown}
            selectedTextStyle={styles.placeholder}
            data={statuses}
            labelField="label"
            valueField="value"
            onChange={item => {
              this.setStatus(item.value);
            }}
            renderRightIcon={() => {
              return <Image
              source={flaskImg}
              style={styles.flaskImg}
              resizeMode="contain"
            />;
            }}
            value={() => {
              return <Text>Filter</Text>;
            }}
            placeholder="Filter"
            placeholderStyle={styles.placeholder}
            renderItem={this.renderItem}
          />
        </View>

        <FlatList
          data={projectsList}
          keyExtractor={(item, index) => item.Id}
          renderItem={({item, index}) => (
            <ProjectCard project={item} onPress={this.navigateToDetails} />
          )}
        />
      </View>
    );
  }
}

const ProjectCard = props => {
  const {project, onPress} = props;

  const getStatusColor = () => {
    let statusColor = '';
    const status = project.Status;
    if (status === 'Completed') {
      statusColor = '#70B39D';
    } else if (
      status === 'New' ||
      status === 'On Hold' ||
      status === 'QC Visit' ||
      status === '1st Payment'
    ) {
      statusColor = '#F3D467';
    } else if (status === 'Conflict') {
      statusColor = '#F36C7C';
    } else if (status === 'In Progress') {
      statusColor = '#2C4DAE';
    }
    return statusColor;
  };

  var date = new Date(project.ProjectEndDate);
  var formattedDate =
    date.getDate() +
    ' ' +
    date.toString().substr(4, 3) +
    ' ' +
    date.getFullYear();
  const statusColor = getStatusColor();
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => onPress(project)}>
      <Image
        source={projectImg}
        style={styles.projectImg}
        resizeMode="contain"
      />
      <View>
        <View style={styles.header}>
          <Text style={styles.textStyle}>{project.Name}</Text>
          <View
            style={[styles.statusContainer, {backgroundColor: statusColor}]}>
            <Text style={styles.status}>{project.Status}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image source={flagImg} style={styles.flagImg} resizeMode="contain" />
          <Text style={styles.endText}>Ended on {formattedDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileProjects;
