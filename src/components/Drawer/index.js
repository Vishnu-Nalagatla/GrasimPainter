import React, { useEffect, useState } from 'react';
import {TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import {Text, View} from 'native-base';
import packageImg from '../../assets/images/drawer/package.png';
import shieldImg from '../../assets/images/drawer/shield.png';
import paintRollerImg from '../../assets/images/drawer/paintRoller.png';
import closeImg from '../../assets/images/drawer/x.png';
import zapImg from '../../assets/images/drawer/zap.png';
import styles from './styles';
import RouteConfig from '../../constants/route-config';
import OnboardingNavigator from '../../routes/onboarding-navigator';
import { createStackNavigator } from '@react-navigation/stack';
import { API, SFDC_API } from '../../requests';
import POPUP_CONSTANTS from '../../enums/popup';
import Popup from '../Popup';
import colors from '../../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import util from '../../util';
import StandardPopup from '../Common/StandardPopup';

const Drawer = props => {
  const [popup, setPopup] = useState(undefined);
  const [userProfile, setUserProfile] = useState({});

  const RootStack = createStackNavigator();
  const {navigation, firstName='Mukesh', lastName="soni", role='Team Lead', closePopup} = props;
  useEffect(() => {
    const currentDate = util.currentDate();
    AsyncStorage.getItem('loggedInUser' + currentDate).then(user => {
      console.info('user...', user);
    });
    getUserProfile();
  }, []);

  const getUserProfile = () => {

    const phone = '7207440195';
    setPopup({ type: POPUP_CONSTANTS.SPINNER_POPUP });
    SFDC_API.getUserProfile(phone)
      .then(res => {
        const {data:{records}} =  res
      //   const {FirstName, LastName} =  records[0];
      //  console.info('res.....', FirstName, LastName);
       setUserProfile(res.data);
       setPopup(undefined);
      })
      .catch(error => {
        this.setState({
          type: POPUP_CONSTANTS.ERROR_POPUP,
          heading: 'Network Error',
          message: error.message,
          popupStyle: styles.popupStyle,
          headingImage: errorImg,
          buttons: [
            {
              title: 'TryAgain',
              onPress: () => this.closePopup(),
            },
          ],
        });
      });
  };

  const getPopupContent = () => {
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

  const onMyProfile = () => {
    navigation.navigate(RouteConfig.Profile);
  };

  const onLogout = () => {};

  const onMyProjects = () => {
    closePopup && closePopup();
    navigation.navigate(RouteConfig.ProfileProjects);
  };

  const onMyTrainings = () => {
    closePopup && closePopup();
    navigation.navigate(RouteConfig.Trainings);
  };

  const onBenefits = () => {
    closePopup && closePopup();
    navigation.navigate(RouteConfig.Benefits);
  };

  const onHelpSupport = () => {
    closePopup && closePopup();
    navigation.navigate(RouteConfig.Help);
  };

  const onAppFeatures = () => {
    closePopup && closePopup();
    navigation.navigate('OnboardingNavigator');
    // return (
    //     <RootStack.Navigator
    //       headerMode="none"
    //       screenOptions={{
    //         gestureEnabled: false,
    //       }}>
    //       <RootStack.Screen name="OnboardingNavigator" component={OnboardingNavigator} />
    //     </RootStack.Navigator>
    //   );
  };

  const onClose = () => {
    closePopup && closePopup();
  };

  return (
    <View style={styles.container}>
      <Popup visible={!!popup}>{getPopupContent()}</Popup>
      <TouchableOpacity onPress={onClose}>
        <Image source={closeImg} style={styles.closeImg} />
      </TouchableOpacity>
      <View style={styles.initContainer} onPress={onMyProfile}>
        <View style={styles.initalsWrapper}>
          <Image source={shieldImg} styles={styles.profileIcon} />
        </View>
        <View>
          <Text style={styles.name}>{`${firstName}  ${lastName}`}</Text>
          <Text style={styles.phone}>{`${role}`}</Text>
        </View>
      </View>
      <View style={styles.hrLine} />
      <TouchableOpacity style={styles.itemWrapper} onPress={onMyProjects}>
        <Image source={paintRollerImg} style={styles.itemIconStyle} />
        <Text style={styles.itemText}>My Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemWrapper} onPress={onMyTrainings}>
        <Image source={shieldImg} style={styles.itemIconStyle} />
        <Text style={styles.itemText}>Trainings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemWrapper} onPress={onBenefits}>
        <Image source={zapImg} style={styles.itemIconStyle} />
        <Text style={styles.itemText}>Sparkle Benefits</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemWrapper} onPress={onHelpSupport}>
        <Image source={paintRollerImg} style={styles.itemIconStyle} />
        <Text style={styles.itemText}>Help & Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemWrapper} onPress={onAppFeatures}>
        <Image source={packageImg} style={styles.itemIconStyle} />
        <Text style={styles.itemText}>App Features</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutWrapper} onPress={onLogout}>
        <Image source={paintRollerImg} style={styles.logoutIcon} />
        <Text style={[styles.itemText, styles.logoutText]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Drawer;
