import React, {useState} from 'react';
import {Container, Content} from 'native-base';
import {Image, View, Text, useWindowDimensions} from 'react-native';
import styles from './styles';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import colors from '../../constants/colors';
import ProjectProgress from '../ProjectProgress';
import Material from '../Material';

const ProjectDetails = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'progress', title: 'Progress'},
    {key: 'timeline', title: 'Timeline'},
    {key: 'material', title: 'Material'},
    {key: 'reports', title: 'Reports'},
  ]);
  const progressRoute = () => <ProjectProgress />;
  const materialRoute = () => <Material />;

  const SecondRoute = () => <View />;

  const renderScene = SceneMap({
    progress: progressRoute,
    timeline: SecondRoute,
    material: materialRoute,
    reports: SecondRoute,
  });
  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={colors.primary}
      inactiveColor={colors.black}
      labelStyle={{
        textTransform: 'capitalize',
        fontSize: 16,
        fontWeight: '700',
      }}
      tabStyle={{backgroundColor: colors.sliderTrack}}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default ProjectDetails;
