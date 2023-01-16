import React, {useState} from 'react';
import {Container, Content} from 'native-base';
import {Image, View, Text, useWindowDimensions} from 'react-native';
import styles from './styles';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import colors from '../../constants/colors';
import ProjectProgress from '../ProjectProgress';

const ProjectDetails = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'progress', title: 'Progress'},
    {key: 'timeline', title: 'Timeline'},
    {key: 'material', title: 'Material'},
    {key: 'reports', title: 'Reports'},
  ]);
  const FirstRoute = () => <ProjectProgress />;

  const SecondRoute = () => (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, backgroundColor: '#673ab7'}} />
  );

  const renderScene = SceneMap({
    progress: FirstRoute,
    timeline: SecondRoute,
    material: FirstRoute,
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
