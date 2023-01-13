import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles.js';
import SwithcButtons from '../../components/SwithcButtons';
import ProjectTimeLine from '../../components/Common/ProjectTimeLine/index.js';
import data from './data.json';

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

  const getProjects = () => {
    const {response} = data;
    const {crewList, today, tomorrow} = response;
    const projects = [];
    return (
      <SafeAreaView style={styles.projectsWrapper}>
        <FlatList
          data={today}
          renderItem={({item}) => <ProjectTimeLine data={item} />}
          keyExtractor={item => item.id}
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
