import React from 'react';
import {Text, Image} from 'react-native';
import {View, FlatList} from 'native-base';
import styles from './styles';
import flagImg from '../../assets/images/profileColor/flag.png';
import timeImg from '../../assets/images/myProjects/time.png';
import data from './data.json';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import ViewPort from '../../constants/view-port';
import SwitchButtons from '../../components/SwitchButtons';

const {vh, vw} = ViewPort;

class Trainings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainings: data,
      buttons: [
        {
          label: 'All',
          status: true,
          index: 1,
        },
        {
          index: 2,
          label: 'Assigned',
          status: false,
        },
        {
          index: 3,
          label: 'Completed',
          status: false,
        },
      ],
    };
    this.initialTrainings = data;
  }

  onClick = event => {
    let updatedTrainings = [];
    const {buttons} = this.state;
    const activeTabIndex = event.index;
    const buttonsChanged = buttons.map(button => {
      const {index} = button;
      if (event.index === index && !event.status) {
        if (event.index === 1) {
          updatedTrainings = this.initialTrainings;
        } else {
          updatedTrainings = this.initialTrainings.filter(
            each => each.Status === event.label,
          );
        }
        button.status = true;
      } else {
        button.status = false;
      }
      return button;
    });
    this.setState({
      buttons: buttonsChanged,
      activeTabIndex,
      trainings: updatedTrainings,
    });
  };

  // eslint-disable-next-line prettier/prettier
  renderItem = (item) => {
    return (
      <View style={styles.innerContainer}>
        <View style={styles.container1}>
          <Text style={styles.name}>{item.Name}</Text>
          <View style={styles.duration}>
            <View style={styles.startDate}>
              <Image
                source={timeImg}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.startDateText}> {item.StartDate} </Text>
            </View>
            <Text style={styles.dotted}> </Text>
            <Text style={styles.dotted}> </Text>
            <Text style={styles.dotted}> </Text>
            <View style={styles.endDate}>
              <Image
                source={flagImg}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.startDateText}> {item.EndDate} </Text>
            </View>
          </View>
        </View>
        <View style={styles.circularProgress}>
          <AnimatedCircularProgress
            size={55 * vh}
            width={8 * vw}
            fill={75}
            rotation={-360}
            tintColor="#3C58B5"
            lineCap="round"
            backgroundColor="#D5DFFF">
            {() => (
              <Text style={styles.percentage}>{item.PercentageCompletion}</Text>
            )}
          </AnimatedCircularProgress>
        </View>
      </View>
    );
  };

  render() {
    const {trainings, buttons} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <SwitchButtons
            buttons={buttons}
            onClick={button => this.onClick(button)}
          />
        </View>
        <FlatList
          data={trainings}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => this.renderItem(item)}
        />
      </View>
    );
  }
}

export default Trainings;

