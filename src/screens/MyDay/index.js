import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles.js';
import SwithcButtons from '../../components/SwithcButtons';
import ProjectTimeLine from '../../components/Common/ProjectTimeLine/index.js';
import data from './data.json';
import {SceneMap} from 'react-native-tab-view';

export interface Props {
  props: String;
}

const MyDay = (props: Props) => {
  const {name = 'Mukesh1'} = props;
  const buttons = [
    {
      label: 'Today',
      status: true,
      id: 1,
    },
    {
      id: 2,
      label: 'Tomorrow',
      status: false,
    },
  ];
  const [state, setTabState] = useState(buttons);
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const onClick = event => {
    const buttonsChanged = state.map(button => {
      const {id} = button;
      if (event.id === id && !event.status) {
        button.status = true;
      } else {
        button.status = false;
      }
      return button;
    });
    setTabState(buttonsChanged);
  };

  const projectClick = action => {
    const {navigation} = props;
    console.info('projectClickZ123');
    navigation.navigate('Projects');
  };

  const getProjects = () => {
    const {response} = data;
    const {crewList, today, tomorrow} = response;
    const projects = [];
    return (
      <SafeAreaView style={styles.projectsWrapper}>
        <FlatList
          data={today}
          keyExtractor={(item, index) => item.Id}
          renderItem={({item}) => (
            <ProjectTimeLine data={item} onClick={projectClick} />
          )}
        />
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcomeMessage}>
        <Text style={styles.welcomeText}>
          Hi {name}, Good Morning! Here is the list of things that needs to be
          done in your day{''}
        </Text>
      </View>
      <View style={styles.bodyContainer}>
        <SwithcButtons buttons={state} onClick={onClick} />
        {getProjects()}
      </View>
    </View>
  );
};

export default MyDay;
