import {Platform, Linking} from 'react-native';
export const connectThroughCall = (number: number) => {
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

export const getBase64FromUrl = async (url: any) => {
  let data = await fetch(url)
    .then(async res => {
      const blob = await res.blob();
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader?.result;
          resolve(base64data);
        };
      });
    })
    .then(responseJson => {
      return responseJson;
    })
    .catch(err => console.log('err', err));
  return data;
};
// format dates here
