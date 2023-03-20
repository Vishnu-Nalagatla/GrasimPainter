import { Platform, Linking } from 'react-native';

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
  currentDate = () => {
    const date = new Date();
    return (
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    );
  };
  prevDate = () => {
    const date = new Date();
    return (
      date.getFullYear() +
      '-' +
      (date.getMonth() + 1) +
      '-' +
      date.getDate() -
      1
    );
  };
}

export default new UTIL();
