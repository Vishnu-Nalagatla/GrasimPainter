import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {Text, View} from 'native-base';
import packageImg from '../../assets/images/drawer/package.png';
import shieldImg from '../../assets/images/drawer/shield.png';
import paintRollerImg from '../../assets/images/drawer/paintRoller.png';
import closeImg from '../../assets/images/drawer/x.png';
import zapImg from '../../assets/images/drawer/zap.png';
import styles from './styles';
import RouteConfig from '../../constants/route-config';

const Drawer = props => {
  const {navigation, firstName, lastName, role, closePopup} = props;
  const onMyProfile = () => {
    navigation.navigate(RouteConfig.Profile);
  };

  const onLogout = () => {};

  const onMyProjects = () => {
    navigation.navigate(RouteConfig.MyProjectsList);
  };

  const onMyTrainings = () => {
    navigation.navigate(RouteConfig.Trainings);
  };

  const onBenefits = () => {
    navigation.navigate(RouteConfig.Benefits);
  };

  const onHelpSupport = () => {
    navigation.navigate(RouteConfig.HelpSupport);
  };

  const onAppFeatures = () => {
    closePopup && closePopup();
    navigation.navigate(RouteConfig.Onboarding);
  };

  const onClose = () => {
    closePopup && closePopup();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose}>
        <Image source={closeImg} style={styles.itemIconStyle} />
      </TouchableOpacity>
      <View style={styles.initContainer} onPress={onMyProfile}>
        <View style={styles.initalsWrapper}>
          <Image source={shieldImg} styles={styles.profileIcon} />
        </View>
        <View>
          <Text style={styles.name}>{`${firstName} \n ${lastName}`}</Text>
          <Text style={styles.phone}>{`${role}`}</Text>
        </View>
      </View>

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
