import React from 'react';
import { Text, Image } from 'react-native';
import { View } from 'native-base';
import strings from '../../constants/strings';
import styles from './styles';
import CustomButton from '../../components/Button';
import UTIL from '../../util';
import OTPInputView from '@twotalltotems/react-native-otp-input';

class EnterOTP extends React.Component {

    onOtpChange = value => {
        console.info('onOtpChange...', value);
        // this.setState({otp: value});
    };


    render() {
        const validationMsg = '';
        return (
            <View style={styles.container}>
                <View  style={styles.otpWrapper}>
                    <Text style={styles.enterOTP}>{strings.enterCode}</Text>
                    <OTPInputView
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
                        autofillFromClipboard={false}
                        onCodeFilled={code => this.onOtpChange(code)}
                    />
                    <CustomButton
                        title={strings.startNow}
                        textStyle={styles.btnTxt}
                        style={styles.button}
                        onPress={this.onPress}
                    />
                </View>
            </View >
        );
    }
}

export default EnterOTP;
