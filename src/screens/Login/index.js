import React from 'react';
import { Image, Text, ActivityIndicator } from 'react-native';
import { Input, View } from 'native-base';
import strings from '../../constants/strings';
import POPUP_CONSTANTS from '../../enums/popup';
import styles from './styles';
import RouteConfig from '../../constants/route-config';
import CustomButton from '../../components/Button';
import Popup from '../../components/Popup';
import { API } from '../../requests';
import paintIcon from '../../assets/images/splash/paint_logo.png';
import starIcon from '../../assets/images/splash/star_logo.png';
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
            validationMsg: ''
        };
    }

    showSpinner = () => {
        this.setState({
            popup: { type: POPUP_CONSTANTS.SPINNER_POPUP },
        });
    };

    closePopup = () => {
        this.setState({ popup: undefined });
    };

    onUserNameChange = (value) => {
        this.setState({ userName: value });
    }

    validateUser = async () => {
        API.setHeaders();
        const { userName } = this.state;
        const { navigation } = this.props;
        if (userName.length === 0) {
            this.setState({ validationMsg: strings.emptyUserName });
            return;
        }
        const request = {
            mobileNumber: userName,
            appType: "Team Lead"
        };
        this.showSpinner();
        API.validateUser(request)
            .then((response) => {
                const { data } = response;
                if (data && data.code && data.code === 401) {
                    this.setState({ validationMsg: data.message, popup: undefined })
                } else if (data.code && data.code === 1701) {
                    API.sendOTP({
                        msisdn: userName
                    }).then(() => { })
                        .catch(() => { });
                    this.closePopup();
                    navigation.navigate(RouteConfig.Otp, {
                        userName: userName,
                        firstName: '',
                    });
                }
            })
            .catch((error) => {
                this.setState({ validationMsg: 'Error invoking validate user API', popup: undefined });
                console.log('validateUser error', error);
            });
    }

    invokeHelp = () => {
        const { navigation } = this.props;
        navigation.navigate(RouteConfig.Help);
    }

    getPopupContent = () => {
        const { popup } = this.state;

        if (!popup) {
            return null;
        }
        switch (popup.type) {
            case POPUP_CONSTANTS.SPINNER_POPUP:
                return <ActivityIndicator size="large" color={colors.primary} animating />;
        }
    };

    render() {
        const { popup, userName, validationMsg } = this.state;
        return (
            <View style={styles.container}>
                <Popup visible={!!popup}>
                    {this.getPopupContent()}
                </Popup>
                <View style={styles.imageContainer}>
                    <Image source={paintIcon} style={styles.paintIcon} resizeMode="contain" />
                    <Image source={starIcon} style={styles.starIcon} resizeMode="contain" />
                </View>
                <View style={styles.inputWrapper}>
                    <Input
                        value={userName}
                        placeholder={strings.usernamePlaceholder}
                        onChangeText={this.onUserNameChange}
                        style={validationMsg ? [styles.input, styles.errorBorder] : styles.input}
                    />
                    {validationMsg ? <Text style={styles.errorText}>{validationMsg}</Text> : null}
                    <CustomButton
                        title={strings.next}
                        textStyle={styles.nextBtnText}
                        style={styles.nextBtn}
                        onPress={this.validateUser}
                    />
                </View>
                <Text style={styles.helpText} onPress={this.invokeHelp}>{strings.needHelp}</Text>
            </View>
        );
    }
}

export default Login;
