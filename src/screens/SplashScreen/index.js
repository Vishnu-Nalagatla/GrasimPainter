import React from 'react';
import {Image, View} from 'react-native';
import paintLogo from '../../assets/images/splash/paint.png';
import styles from './styles';
import {API, SFDC_API} from '../../requests';
import languages from '../../enums/languages';
import strings from '../../globalization';
class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    strings.setLanguage('english');
  }

  componentDidMount = () => {
    API.setHeaders('ea33876c78b146d683ea6693ef421fa9');
    API.accessToken('ea33876c78b146d683ea6693ef421fa9')
      .then(res => {
        const {access_token} = res.data;
        console.info('access_token ', access_token);
        API.setBearerToken(access_token);
      })
      .catch(err => {
        console.log('access token error', err);
      });

    SFDC_API.setHeaders('d03c44ae42da46aaa7b0b63555e54477');
    SFDC_API.accessToken('d03c44ae42da46aaa7b0b63555e54477')
      .then(res => {
        const {access_token} = res.data;
        console.info('access_token ', access_token);
        SFDC_API.setBearerToken(access_token);
      })
      .catch(err => {
        console.log('access token error', err);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={paintLogo}
          style={styles.paintIcon}
          resizeMode="contain"
        />
      </View>
    );
  }
}

export default SplashScreen;
