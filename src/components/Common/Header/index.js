import React, { useState } from 'react';
import {StackHeaderProps} from '@react-navigation/stack';
import styles from './styles.js';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import bellImg from '../../../assets/images/bell/image.png';
import menuImg from '../../../assets/images/menu/image.png';
import RouteConfig from '../../../constants/route-config.js';
import Popup from '../../Popup';
import POPUP_CONSTANTS from '../../../enums/popup';
import Drawer from '../../../components/Drawer';

const Header = (props: StackHeaderProps) => {
  const {options, navigation, toggleDrawer} = props;
  const {title = undefined, showBackIcon = true} = options;
  const [popup, setPopup] = useState(undefined);

  const getPopupStyle = () => {
    let popupStyle = {};
    if (popup && popup.type === POPUP_CONSTANTS.TOGGLE_DRAWER) {
      popupStyle = styles.toggleDrawerStyle;
    }
    return popupStyle;
  };

  const closePopup = () => {
      setPopup(undefined);
  };

  const getPopupContent = () => {
    if (!popup) {
      return null;
    }
    switch (popup.type) {
      case POPUP_CONSTANTS.TOGGLE_DRAWER:
        return <Drawer />;
      default:
        break;
    }
  };
  const style = styles.popupStyle;
  return (
    <View style={styles.container}>
      <Popup popupStyle={style} visible={!!popup} onPress={closePopup}>
        {getPopupContent()}
      </Popup>
      <View style={styles.headerTitle}>
        {showBackIcon ? (
          <TouchableOpacity
            style={styles.menuImg}
            onPress={() => {
              // setPopup({type: POPUP_CONSTANTS.TOGGLE_DRAWER});
              if (toggleDrawer) {
                toggleDrawer();
              } else {
                // setPopup({type: POPUP_CONSTANTS.TOGGLE_DRAWER});
              }
              navigation.goBack();
            }}>
            <Image
              source={menuImg}
              style={styles.menuImg}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : null}
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.bellContainer}>
        <TouchableOpacity
          style={styles.bellIcon}
          onPress={() => {
            return navigation.navigate(RouteConfig.Notifications);
          }}>
          <Image source={bellImg} style={styles.bellImg} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
