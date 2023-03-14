import React from 'react';
import { Image, Text, ActivityIndicator, BackHandler } from 'react-native';
import { Input, View } from 'native-base';
import { connect } from 'react-redux';
import strings from '../../constants/strings';
import POPUP_CONSTANTS from '../../enums/popup';
import styles from './styles';
import RouteConfig from '../../constants/route-config';
import CustomButton from '../../components/Button';
import Popup from '../../components/Popup';
import { API } from '../../requests';
import paintIcon from '../../assets/images/login/paintLogo.png';
import colors from '../../constants/colors';
import { setLoginData } from '../../store/login/loginActions';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UTIL from '../../util/index';

export interface Props {
  navigation: Navigator;
}

export interface State {
  otp: string;
}

class Otp extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      validationMsg: '',
      count: 120,
      showResend: false,
      resendCount: 0,
      clearInput: false,
    };
  }

  componentDidMount = () => {
    this.setResendInterval();
  };
  setResendInterval = () => {
    this.setState({
      showResend: false,
    });
    const { resendCount } = this.state;
    const interval = setInterval(() => {
      this.setState(
        prevState => {
          return {
            count: prevState.count - 1,
            clearInput: false,
          };
        },
        () => {
          if (this.state.count === 1) {
            clearInterval(interval);
            if (resendCount < 3) {
              this.setState({
                showResend: true,
              });
            }
          }
        },
      );
    }, 1000);
    // this.setState({clearInput: false});
  };

  resendOtp = () => {
    this.setState({ clearInput: true });
    this.setState({ validationMsg: '' });
    this.setState({ otp: '' });
    const { route } = this.props;
    const { params } = route;
    const { userName } = params;
    const { resendCount } = this.state;
    // const userName = '6301451336';
    this.showSpinner();
    API.sendOTP({
      mobileNumber: userName,
    })
      .then(response => {
        const { data } = response;
        if (data && data.statusCode === 1701) {
          this.setState(
            {
              popup: undefined,
              count: 120,
              showResend: false,
              resendCount: resendCount + 1,
            },
            () => {
              this.setResendInterval();
            },
          );
        } else {
          this.setState(
            {
              //validationMsg: data.message,
              popup: undefined,
              count: 120,
              showResend: false,
              resendCount: resendCount + 1,
            },
            () => {
              this.setResendInterval();
            },
          );
        }
      })
      .catch(error => {
        this.setState({
          validationMsg: 'Error invoking Send OTP API',
          popup: undefined,
        });
        console.log('send otp error', error);
      });
  };

  showSpinner = () => {
    this.setState({
      popup: { type: POPUP_CONSTANTS.SPINNER_POPUP },
    });
  };

  closePopup = () => {
    this.setState({ popup: undefined });
  };

  onOtpChange = value => {
    this.setState({ otp: value });
  };

  verifyOtp = async () => {
    this.showSpinner();
    const { otp } = this.state;
    const { navigation, route, dispatchSetLoginData } = this.props;
    const { params } = route;
    const { userName, firstName, role, Id } = params;
    const userInfo = {
      firstName,
      Id,
      role,
    };
    if (otp.length === 0) {
      this.setState({ validationMsg: strings.emptyOtp });
      return;
    } else if (otp.length < 4) {
      this.setState({ validationMsg: strings.incompleteOtp });
      return;
    }
    const request = {
      msisdn: userName,
      otp: otp,
    };
    API.verifyOtp(request)
      .then(response => {
        const { data } = response;
        if (data.statusCode && data.statusCode === 200) {
          console.info('userInfo...', data.response);
          const currentDate = UTIL.currentDate();
          const prevDate = UTIL.prevDate();
          AsyncStorage.removeItem('loggedInUser_' + prevDate);
          AsyncStorage.removeItem('currentUser_' + prevDate);
          AsyncStorage.setItem('currentUser_' + currentDate, userName);
          AsyncStorage.getItem('loggedInUser_' + currentDate).then(user => {
            if (user) {
              const parsedUser = JSON.parse(user);
              if (parsedUser.hasOwnProperty(userName)) {
                const showOnboardingScreen = parsedUser[userName];
                dispatchSetLoginData({
                  userName: userName,
                  firstName: firstName,
                  showOnboarding: showOnboardingScreen,
                });
              } else {
                const updatedUser = {
                  ...parsedUser,
                  [userName]: true,
                };
                AsyncStorage.setItem(
                  'loggedInUserFirstName_' + currentDate,
                  firstName,
                );
                AsyncStorage.setItem(
                  'loggedInUser' + currentDate,
                  JSON.stringify(data.response),
                );
                AsyncStorage.setItem(
                  'loggedInUser_' + currentDate,
                  JSON.stringify(updatedUser),
                ).then(res => {
                  dispatchSetLoginData({
                    userName: userName,
                    firstName: firstName,
                    showOnboarding: true,
                  });
                });
              }
            } else {
              AsyncStorage.setItem(
                'loggedInUserFirstName_' + currentDate,
                firstName,
              );
              AsyncStorage.setItem(
                'loggedInUser' + currentDate,
                JSON.stringify(data.response),
              );
              AsyncStorage.setItem(
                'loggedInUser_' + currentDate,
                JSON.stringify({
                  [userName]: true,
                }),
              ).then(res => {
                dispatchSetLoginData({
                  userName: userName,
                  firstName: firstName,
                  showOnboarding: true,
                });
              });
            }
          });
          // AsyncStorage.setItem('loggedInUser_' + currentDate, userName)
          //     .then(() => {
          //         dispatchSetLoginData({ isLoggedIn: true, loginInfo: { userName: userName } })
          //     });
          //Here data.response has multiple records, which one to consider
          // dispatchSetLoginData(userData.records);
        } else {
          this.setState({ validationMsg: data.message });
        }
        this.closePopup();
      })
      .catch(error => {
        this.setState({ validationMsg: 'Error invoking validate user API' });
        console.log('verifyOtp error', error);
      });
  };

  invokeHelp = () => {
    const { navigation } = this.props;
    navigation.navigate(RouteConfig.Help);
  };

  getPopupContent = () => {
    const { popup } = this.state;

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
    const { popup, otp, validationMsg, count, showResend, resendCount } =
      this.state;
    const { route } = this.props;
    const { params } = route;
    const { userName, firstName } = params;
    return (
      <View style={styles.container}>
        <Popup visible={!!popup}>{this.getPopupContent()}</Popup>
        <View style={styles.innerContainer}>
          <Image
            source={paintIcon}
            style={styles.paintIcon}
            resizeMode="contain"
          />
          <View style={styles.inputWrapper}>
            <Text style={styles.userText}>
              Hi {firstName}, please enter the OTP sent to{' '}
              {userName.replace(/./g, function (character, index) {
                if (index > 1 && index < 8) return '*';
                return character;
              })}{' '}
            </Text>
            <Text style={styles.userName}>
              {userName.replace(/./g, function (character, index) {
                if (index > 1 && index < 8) return '*';
                return character;
              })}
            </Text>
            <OTPInputView
              editable
              code={this.state.otp}
              clearInputs={this.state.clearInput}
              style={styles.otpInput}
              pinCount={4}
              autoFocusOnLoad
              codeInputFieldStyle={
                validationMsg
                  ? [styles.underlineStyleBase, styles.errorField]
                  : styles.underlineStyleBase
              }
              codeInputHighlightStyle={
                validationMsg
                  ? [
                    styles.underlineStyleBase,
                    styles.underlineStyleHighLighted,
                    styles.errorField,
                  ]
                  : [
                    styles.underlineStyleBase,
                    styles.underlineStyleHighLighted,
                  ]
              }
              autofillFromClipboard={true}
              onCodeFilled={code => this.onOtpChange(code)}
              onCodeChanged={otp => {
                this.setState({ otp });
              }}
            />
            {validationMsg ? (
              <Text style={styles.errorText}>{validationMsg}</Text>
            ) : null}
            <CustomButton
              title={strings.login}
              textStyle={styles.nextBtnText}
              style={styles.nextBtn}
              onPress={this.verifyOtp}
            />
            {showResend ? (
              <View style={styles.row}>
                <Text style={[styles.resendOtpText, styles.resendOtpText]}>
                  Din't receive the code ?{' '}
                </Text>
                <Text
                  style={[
                    styles.resendOtpText,
                    styles.resendOtp,
                    styles.resendOtp,
                  ]}
                  onPress={this.resendOtp}>
                  Resend OTP
                </Text>
              </View>
            ) : resendCount < 3 ? (
              <Text style={styles.resendText}>
                Didn't receive the code ? Resend in {count} seconds
              </Text>
            ) : null}
            <Text style={styles.helpText} onPress={this.invokeHelp}>
              {strings.needHelp}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchSetLoginData: payload => {
    dispatch(setLoginData(payload));
  },
});

export default connect(null, mapDispatchToProps)(Otp);
