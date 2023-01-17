import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import data from './data.json';
import {FlatList, Image, ScrollView} from 'native-base';
import styles from './styles';
import bellImg from '../../assets/images/group/image.png';

const Projects = () => {
  console.log('Projects');
  const {response = {}} = data;
  const {newProjects, ongoingProjects} = response;

  const onPress = () => {
    console.info('onPress...');
  };
  const Project = ({project, label, index}) => {
    const {Name, ProjectPlanStatus} = project;
    return (
      <TouchableOpacity style={styles.projectsCard} onPress={onPress}>
        {/* {index === 0 ? <Text style={{fontSize: 20}}>{label}</Text> : null} */}
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

  const ProjectList = ({projects, label}) => {
    return (
      <SafeAreaView style={styles.projectsWrapper}>
        <Text style={{fontSize: 20}}>{label}</Text>
        <FlatList
          data={projects}
          keyExtractor={(item, index) => item.Id}
          renderItem={({item, index}) => (
            <Project project={item} label={label} index={index} />
          )}
        />
      </SafeAreaView>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProjectList projects={newProjects} label={'New'} />
      <ProjectList projects={ongoingProjects} label={'Ongoing'} />
    </ScrollView>
  );
};

export default Projects;
