import {Platform, Linking} from 'react-native';

class UTIL {
  connectThroughCall = number => {
    if (!number) {
      return false;
    }
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt : ${number}`;
    }
    Linking.openURL(phoneNumber);
  };
}

export default new UTIL();
