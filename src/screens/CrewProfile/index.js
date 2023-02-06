import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {API} from '../../requests';
import POPUP_CONSTANTS from '../../enums/popup';
import colors from '../../constants/colors';
import StandardPopup from '../../components/Common/StandardPopup';
import styles from './styles';
import Popup from '../../components/Popup';
import errorIcon from '../../assets/images/naColor/image.png';
import {Image, ScrollView} from 'native-base';
import groupIcon from '../../assets/images/splash/paint_logo.png';
import mobileBlack from '../../assets/images/mobileBlack/image.png';
import calendar from '../../assets/images/calendar/image.png';
import data from './data.json';

class CrewProfile extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      popup: undefined,
    };
  }
  infoList = [
    {
      key: 'PaintCraft ID',
      value: 'MUM1002',
    },
    {
      key: 'NPS Score',
      value: '110',
    },
    {
      key: 'Experience as a painter',
      value: '4 years',
    },
    {
      key: 'Area of operation',
      value: 'Mumbai',
    },
    {
      key: 'Associated Service Partner',
      value: 'Partner name',
    },
    {
      key: 'Products Trained On',
      value: '--',
    },
  ];
  iinsightsList = [
    {
      key: 'NPS Score',
      value: '200',
    },
    {
      key: 'Quality Score',
      value: '200',
    },
    {
      key: 'Total Sites Done',
      value: '34',
    },
    {
      key: 'Sites this month',
      value: '4',
    },
  ];
  available = 'Available';
  occupied = 'Occupied';
  crewCalendar = 'Crew Calendar';

  componentDidMount() {
    // this.fetchMyDayInfo();
  }

  showSpinner = () => {
    this.setState({
      popup: {type: POPUP_CONSTANTS.SPINNER_POPUP},
    });
  };

  closePopup = () => {
    this.setState({popup: undefined});
  };

  fetchMyTeamInfo = () => {
    const request = {
      userId: '0051y000000NpxWAAS',
      role: 'TeamLeadId',
    };
    this.showSpinner();
    API.getMyDayInfo(request)
      .then(response => {
        const {data} = response;
        const myDayInfo = data.response;
        this.closePopup();
        this.setState({
          myDayInfo,
        });
      })
      .catch(error => {
        this.setState({
          validationMsg: 'Error invoking Send OTP API',
          popup: undefined,
        });
        console.log('send otp error', error);
      });
  };

  onClick = event => {
    const {buttons} = this.state;
    const activeTabIndex = event.index;
    const buttonsChanged = buttons.map(button => {
      const {index} = button;
      if (event.index === index && !event.status) {
        button.status = true;
      } else {
        button.status = false;
      }
      return button;
    });
    this.setState({
      buttons: buttonsChanged,
      activeTabIndex,
    });
    // this.fetchMyDayInfo();
  };

  requestForQualityCheck = project => {
    console.info('project...', project);
    this.setState({
      popup: {type: POPUP_CONSTANTS.SPINNER_POPUP},
    });
    const request = {
      organizationId: 'organizationID',
      scheduleId: 'scheduleID',
    };
    API.requestForQualityCheck(request)
      .then(res => {
        console.info('res', res);
        this.setState({
          popup: undefined,
        });
      })
      .catch(error => {
        this.setState({
          popup: {
            type: POPUP_CONSTANTS.ERROR_POPUP,
            heading: 'Network Error',
            message: error.message,
            headingImage: errorIcon,
            buttons: [
              {
                title: 'TryAgain',
                onPress: () => this.closePopup(),
              },
            ],
          },
        });
      });
  };

  getPopupContent = () => {
    const {popup} = this.state;

    if (!popup) {
      return null;
    }
    switch (popup.type) {
      case POPUP_CONSTANTS.SPINNER_POPUP:
        return (
          <ActivityIndicator size="large" color={colors.primary} animating />
        );
      case POPUP_CONSTANTS.ERROR_POPUP:
        return <StandardPopup {...popup} />;
    }
  };

  render() {
    const {reduxProps} = this.props;
    const {login} = reduxProps;
    const {loginInfo = {}} = login;
    const {firstName = ''} = loginInfo;
    console.info('firstName...', firstName);
    const {popup} = this.state;
    const {style = {}} = popup || {};
    const skills = ['Wall artist', 'Skill two', 'Skill three'];

    return (
      <ScrollView style={styles.container}>
        <Popup popupStyle={style} visible={!!popup}>
          {this.getPopupContent()}
        </Popup>
        <View style={styles.profileInfo}>
          <View style={styles.header}>
            <View style={styles.headerWrapper}>
              <Image
                source={groupIcon}
                style={styles.profilePic}
                resizeMode="contain"
              />
              <View style={styles.info}>
                <Text style={styles.employeeName}> {'Vikas Sharma'}</Text>
                <Text style={styles.status}> {'ON LEAVE'}</Text>
              </View>
            </View>
            <Image
              source={mobileBlack}
              style={styles.mobileBlack}
              resizeMode="contain"
            />
          </View>
          <View style={styles.skillsWrapper}>
            {skills.map(skill => {
              return <Text style={styles.skill}> {skill}</Text>;
            })}
          </View>
          <View style={styles.crewInfo}>
            {this.infoList.map((info, index) => {
              const styleRow =
                index % 2 === 0 ? styles.infoRow : styles.infoRowOdd;
              const {key, value} = info;
              return (
                <View style={styleRow}>
                  <Text style={styles.key}>{key}</Text>
                  <Text style={styles.value}>{value}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.insights}>
          <Text style={styles.insightsLabel}>{'General Insights'}</Text>
          <View style={styles.insightsWrapper}>
            {this.iinsightsList.map((insight, index) => {
              const {key, value} = insight;
              return (
                <View style={styles.insightCard}>
                  <Text style={styles.insightKey}>{key}</Text>
                  <Text style={styles.insightValue}>{value}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default CrewProfile;
