import React from 'react';
import { Text, Image } from 'react-native';
import { View, FlatList } from 'native-base';
import styles from './styles';
import flagImg from '../../assets/images/profileColor/flag.png';
import timeImg from '../../assets/images/myProjects/time.png';
import data from './data.json';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ViewPort from '../../constants/view-port';
import SwitchButtons from '../../components/SwitchButtons';
import { SFDC_API } from '../../requests';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import util from '../../util';
import moment from 'moment';

const { vh, vw } = ViewPort;

class Trainings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainings: [],
      filteredData: [],
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

  componentDidMount() {
    const currentDate = util.currentDate();
    AsyncStorage.getItem('loggedInUser' + currentDate).then(user => {
      this.setState(() => {
        this.fetchTrainingInfo(JSON.parse(user));
      });
    });
  }
  fetchTrainingInfo = user => {
    const loggedInUser = JSON.parse(user);
    const { Id, Territory__c, roleKey = 'TeamLeadId', role } = loggedInUser || {};
    if (role?.toLowerCase() == 'team lead') {
      SFDC_API.getTrainingsInfo(Id)
        .then(resp => {
          if (resp?.status == 200) {
            this.setState({
              trainings: resp?.data?.records,
              filteredData: resp?.data?.records
            });
          }
        })
        .catch(er => console.log(er, 'er'));
    } else {
      SFDC_API.getCrewTrainingInfo(Id)
        .then(resp => {
          if (resp?.status == 200) {
            this.setState({
              trainings: resp?.data?.records,
              filteredData: resp?.data?.records
            });
          }
        })
        .catch(er => console.log(er, 'er'));
    }

  };
  onClick = event => {
    let updatedTrainings = [];
    const { buttons } = this.state;
    const activeTabIndex = event.index;
    const buttonsChanged = buttons.map(button => {
      const { index } = button;
      if (event.index === index && !event.status) {
        if (event.index === 1) {
          updatedTrainings = this.state.trainings;
        } else {
          updatedTrainings = this.state.trainings.filter(
            obj => {
              const currentDate = moment(new Date()).format('YYYY-MM-DD');
              return event.index == 2 ? currentDate <= obj?.End_Date__c : currentDate > obj?.End_Date__c;
            },
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
      filteredData: updatedTrainings,
    });
  };

  // eslint-disable-next-line prettier/prettier
  renderItem = item => {
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
              <Text style={styles.startDateText}> {item?.Start_Date__c} </Text>
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
              <Text style={styles.startDateText}> {item?.End_Date__c} </Text>
            </View>
          </View>
        </View>
        <View style={styles.circularProgress}>
          <AnimatedCircularProgress
            size={50 * vh}
            width={4 * vw}
            fill={item.Training_Score__c}
            rotation={-360}
            tintColor="#3C58B5"
            lineCap="round"
            backgroundColor="#D5DFFF">
            {() => (
              <Text style={styles.percentage}>{item?.Training_Score__c}</Text>
            )}
          </AnimatedCircularProgress>
        </View>
      </View>
    );
  };

  render() {
    const { trainings, buttons, filteredData } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <SwitchButtons
            buttons={buttons}
            onClick={button => this.onClick(button)}
          />
        </View>
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return filteredData?.length > 0 ? this.renderItem(item) : <Text>{'no data'}</Text>
          }}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    userInfo: state.loginReducer.loginInfo,
  };
};
export default connect(mapStateToProps)(Trainings);
