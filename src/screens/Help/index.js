import React from 'react';
import { Text, Image } from 'react-native';
import { View } from 'native-base';
import strings from '../../constants/strings';
import styles from './styles';
import CustomButton from '../../components/Button';
import paintIcon from '../../assets/images/splash/paint_logo.png';
import UTIL from '../../util';

class Help extends React.Component {

    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    callContactCenter = () => {
        UTIL.connectThroughCall('9876543210');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.helpCenterText}>{strings.helpCenter}</Text>
                    <Image source={paintIcon} style={styles.supportIcon} resizeMode="contain" />
                    <Text style={styles.userText}>Connect with contact center to resolve your</Text>
                    <Text style={styles.userText}>login issues</Text>
                    <CustomButton
                        title={strings.contactCenter}
                        textStyle={styles.nextBtnText}
                        style={styles.nextBtn}
                        onPress={this.callContactCenter}
                    />
                    <View style={styles.row} onPress={this.goBack}>
                        <Text style={styles.goBack} onPress={this.goBack}>{strings.goBackLogin}</Text>
                    </View>
                </View>
            </View >
        );
    }
}

export default Help;
