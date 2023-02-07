import React, {useEffect, useState} from 'react';
import {Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {View, FlatList} from 'native-base';
import styles from './styles';
import data from './data.json';
import expandImg from '../../assets/images/insights/expand.png';
import ProgressPercentage from '../../components/ProgressPercentage';

const Insights = () => {
  const [insightsData, setInsightsData] = useState(data);
  useEffect(() => {
    const updatedInsights = data.map(each => {
      return {
        ...each,
        expand: false,
      };
    });
    setInsightsData(updatedInsights);
  }, []);

  const updateInsights = insights => {
    setInsightsData(insights);
  };
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={insightsData}
        keyExtractor={(item, index) => item.Id}
        renderItem={({item, index}) => (
          <InsightCard
            project={item}
            insightsData={insightsData}
            updateInsights={updateInsights}
          />
        )}
      />
    </ScrollView>
  );
};

const InsightCard = props => {
  const {project, insightsData, updateInsights} = props;

  const toggleExpand = eachProject => {
    const updatedInsights = insightsData.map(each => {
      if (each.Id === eachProject.Id) {
        return {
          ...each,
          expand: !each.expand,
        };
      }
      return each;
    });
    updateInsights(updatedInsights);
  };
  return (
    <View>
      {project.expand ? (
        <View style={styles.innerContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.projectName}>{project.Name}</Text>
            <Text style={styles.projectStatus}>{project.Status}</Text>
            <TouchableOpacity onPress={() => toggleExpand(project)}>
              <Image
                source={expandImg}
                style={styles.expandImgStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <ProgressPercentage value={project.Percentage} />
          <FlatList
            data={project.Insights}
            keyExtractor={(item, index) => item.Id}
            renderItem={({item, index}) => {
              return (
                <View
                  style={
                    index === project.Insights.length - 1
                      ? styles.longCard
                      : styles.card
                  }>
                  <Text style={styles.label}>{item.Name}</Text>
                  <Text style={styles.value}>{item.Value}</Text>
                </View>
              );
            }}
            numColumns={2}
            columnWrapperStyle={styles.insights}
          />
        </View>
      ) : (
        <View style={[styles.innerContainer, styles.innerContainerHeight]}>
          <View style={styles.headerContainer}>
            <Text style={styles.projectName}>{project.Name}</Text>
            <Text style={styles.projectStatus}>{project.Status}</Text>
            <TouchableOpacity onPress={eachProject => toggleExpand(project)}>
              <Image
                source={expandImg}
                style={styles.expandImgStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Insights;
