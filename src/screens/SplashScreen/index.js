import React from 'react';
import {Image, View} from 'react-native';
import paintLogo from '../../assets/images/splash/paint.png';
import styles from './styles';
import {API, SFDC_API} from '../../requests';
import languages from '../../enums/languages';
import strings from '../../globalization';
import Config from 'react-native-config';
class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    strings.setLanguage('english');
  }

  componentDidMount = () => {
    API.setHeaders('');
    SFDC_API.setHeaders('d03c44ae42da46aaa7b0b63555e54477');
    SFDC_API.accessToken();
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
