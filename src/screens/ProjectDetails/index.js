import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import colors from '../../constants/colors';
import ProjectProgress from '../ProjectProgress';
import Material from '../Material';
import ViewPort from '../../constants/view-port';
import SiteCheckList from '../SiteCheckList';
import Reports from '../Reports';
const {vh, vw} = ViewPort;
import Timeline from '../Timeline';
import ProjectInfo from '../ProjectInfo';

const ProjectDetails = props => {
  const {route, navigation} = props;
  const {params} = route;
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(params.index);
  console.log('ProjectDetails params--->', params);
  const [routes] = useState([
    {key: 'progress', title: 'Progress'},
    {key: 'timeline', title: 'Timeline'},
    {key: 'material', title: 'Material'},
    {key: 'reports', title: 'Reports'},
    {key: 'siteCheckList', title: 'Site Checklist'},
    {key: 'info', title: 'Info'},
  ]);
  const progressRoute = () => (
    <ProjectProgress
      project={params.ProjectDetailsData}
      onTabChange={onTabChange}
      {...props}
    />
  );
  const onTabChange = index => {
    setIndex(index);
  };
  const materialRoute = () => (
    <Material project={params.ProjectDetailsData} onTabChange={onTabChange} />
  );
  const siteCheckListRoute = () => (
    <SiteCheckList
      project={params.ProjectDetailsData}
      onTabChange={onTabChange}
    />
  );
  const reportsRoute = () => (
    <Reports project={params.ProjectDetailsData} onTabChange={onTabChange} />
  );
  const infoRoute = () => (
    <ProjectInfo
      project={params.ProjectDetailsData}
      onTabChange={onTabChange}
    />
  );
  const timeLineRoute = () => (
    <Timeline
      project={params.ProjectDetailsData}
      onTabChange={onTabChange}
      navigation={navigation}
    />
  );

  const renderScene = SceneMap({
    progress: progressRoute,
    timeline: timeLineRoute,
    material: materialRoute,
    reports: reportsRoute,
    siteCheckList: siteCheckListRoute,
    info: infoRoute,
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
      swipeEnabled={false}
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default ProjectDetails;
