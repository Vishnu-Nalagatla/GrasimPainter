import React from 'react';
import {Image, Text, ActivityIndicator} from 'react-native';
import {Input, View} from 'native-base';
import strings from '../../constants/strings';
import POPUP_CONSTANTS from '../../enums/popup';
import styles from './styles';
import RouteConfig from '../../constants/route-config';
import CustomButton from '../../components/Button';
import Popup from '../../components/Popup';
import {API} from '../../requests';
import paintLogo from '../../assets/images/login/paintLogo.png';
import colors from '../../constants/colors';

export interface Props {
  navigation: Navigator;
}

export interface State {
  userName: string;
}

class Login extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      validationMsg: '',
    };
  }

  showSpinner = () => {
    this.setState({
      popup: {type: POPUP_CONSTANTS.SPINNER_POPUP},
    });
  };

  closePopup = () => {
    this.setState({popup: undefined});
  };

  onUserNameChange = value => {
    this.setState({userName: value});
  };

  validateUser = async () => {
    const {userName} = this.state;
    const {navigation} = this.props;
    if (userName.length === 0) {
      this.setState({validationMsg: strings.emptyUserName});
      return;
    }
    const request = {
      mobileNumber: userName,
      // appType: "Colour Consultant Agent",
      // appType: 'Team Lead',
    };
    this.showSpinner();
    API.validateUser(request)
      .then(response => {
        console.info('Login response..', response);
        const {data} = response;
        if (data && data.code && data.code === 401) {
          this.setState({validationMsg: data.message, popup: undefined});
        } else if (data.code && data.code === 1701) {
          const parsedObject = JSON.parse(data.response);
          console.info('parsedObject... ', parsedObject);
          this.closePopup();
          navigation.navigate(RouteConfig.Otp, {
            userName: userName,
            firstName: parsedObject ? parsedObject.firstName : '',
            role: parsedObject ? parsedObject.role : '',
            Id: parsedObject ? parsedObject.Id : '',
            lastName: parsedObject ? parsedObject.lastName : '',
          });
        }
      })
      .catch(error => {
        this.setState({
          validationMsg: 'Error invoking validate user API',
          popup: undefined,
        });
        console.log('validateUser error', error);
      });
  };

  invokeHelp = () => {
    const {navigation} = this.props;
    navigation.navigate(RouteConfig.Help);
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
    }
  };

  render() {
    const {popup, userName, validationMsg} = this.state;
    return (
      <View style={styles.container}>
        <Popup visible={!!popup}>{this.getPopupContent()}</Popup>
        <View style={styles.innerContainer}>
          <Image
            source={paintLogo}
            style={styles.paintIcon}
            resizeMode="contain"
          />
          <View style={styles.inputWrapper}>
            <Input
              value={userName}
              placeholder={strings.usernamePlaceholder}
              onChangeText={this.onUserNameChange}
              style={
                validationMsg
                  ? [styles.input, styles.errorBorder]
                  : styles.input
              }
              isInvalid={validationMsg ? true : false}
            />
            {validationMsg ? (
              <Text style={styles.errorText}>{validationMsg}</Text>
            ) : null}
            <CustomButton
              title={strings.next}
              textStyle={styles.nextBtnText}
              style={styles.nextBtn}
              onPress={this.validateUser}
            />
          </View>
          <Text style={styles.helpText} onPress={this.invokeHelp}>
            {strings.needHelp}
          </Text>
        </View>
      </View>
    );
  }
}

export default Login;
