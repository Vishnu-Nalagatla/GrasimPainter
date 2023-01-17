import React, {useState} from 'react';
import {Container, Content} from 'native-base';
import {Image, View, Text, useWindowDimensions} from 'react-native';
import styles from './styles';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import colors from '../../constants/colors';
import ProjectProgress from '../ProjectProgress';
import Material from '../Material';
import ViewPort from '../../constants/view-port';
import SiteCheckList from '../SiteCheckList';
import Reports from '../Reports';
const {vh, vw} = ViewPort;
import Timeline from '../Timeline';

const ProjectDetails = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'progress', title: 'Progress'},
    {key: 'timeline', title: 'Timeline'},
    {key: 'material', title: 'Material'},
    {key: 'reports', title: 'Reports'},
    {key: 'siteCheckList', title: 'Site Checklist'},
    {key: 'info', title: 'Info'},
  ]);
  const progressRoute = () => <ProjectProgress />;
  const materialRoute = () => <Material />;
  const siteCheckListRoute = () => <SiteCheckList />;
  const reportsRoute = () => <Reports />;

  const SecondRoute = () => (
    // eslint-disable-next-line react-native/no-inline-styles
    // <View style={{flex: 1, backgroundColor: '#673ab7'}} />
    <Timeline />
  );

  const renderScene = SceneMap({
    progress: progressRoute,
    timeline: SecondRoute,
    material: materialRoute,
    reports: reportsRoute,
    siteCheckList: siteCheckListRoute,
    info: SecondRoute,
  });
  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={colors.primary}
      inactiveColor={colors.black}
      scrollEnabled={true}
      labelStyle={{
        textTransform: 'capitalize',
        fontSize: 16,
        fontWeight: '700',
        width: 'auto',
        paddingLeft: 20 * vw,
      }}
      tabStyle={{backgroundColor: colors.sliderTrack, width: 'auto'}}
    />
  );

  // ScrollView
  return (
    <TabView
      scrollEnabled={true}
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default ProjectDetails;
