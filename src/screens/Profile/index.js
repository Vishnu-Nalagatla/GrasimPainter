import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {API} from '../../requests';
import POPUP_CONSTANTS from '../../enums/popup';
import colors from '../../constants/colors';
import StandardPopup from '../../components/Common/StandardPopup';
import styles from './styles';
import Popup from '../../components/Popup';
import {Image, ScrollView} from 'native-base';
import groupIcon from '../../assets/images/splash/paint_logo.png';

class Profile extends React.Component<Props, State> {
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

  showSpinner = () => {
    this.setState({
      popup: {type: POPUP_CONSTANTS.SPINNER_POPUP},
    });
  };

  closePopup = () => {
    this.setState({popup: undefined});
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
    const {firstName = '', lastName = ''} = loginInfo;
    console.info('firstName...', firstName);
    const {popup} = this.state;
    const {style = {}} = popup || {};

    return (
      <ScrollView style={styles.container}>
        <Popup popupStyle={style} visible={!!popup}>
          {this.getPopupContent()}
        </Popup>
        <View style={styles.profileInfo}>
          <View style={styles.header}>
            <Image
              source={groupIcon}
              style={styles.profilePic}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.employeeName}> {'Vikas Sharma'}</Text>
              <Text style={styles.status}> Team Lead</Text>
            </View>
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

const mapStateToProps = reduxProps => ({
  reduxProps,
});

export default connect(mapStateToProps, null)(Profile);
