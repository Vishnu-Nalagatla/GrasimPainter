import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { View } from 'native-base';
import strings from '../../constants/strings';
import styles from './styles';
import CustomButton from '../../components/Button';
import helpImg from '../../assets/images/login/headphones.png';
import phoneColor from '../../assets/images/phoneColor/image.png';
import UTIL from '../../util';

class HelpAndSupport extends React.Component {

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
                <Text style={styles.getInTouch}>{strings.getInTouch}</Text>
                <View style={styles.info}>
                    <Text style={styles.userText}>Contact Center</Text>
                    <TouchableOpacity onPress={this.callContactCenter}>
                        <Image source={phoneColor} style={styles.arrowIcon} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
                <View style={styles.info}>
                    <Text style={styles.userText}>Service Partner</Text>
                    <TouchableOpacity onPress={this.callContactCenter}>
                        <Image source={phoneColor} style={styles.arrowIcon} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
                <View style={styles.info}>
                    <Text style={styles.userText}>Area Manager</Text>
                    <TouchableOpacity onPress={this.callContactCenter}>
                        <Image source={phoneColor} style={styles.arrowIcon} resizeMode="contain" />
                    </TouchableOpacity>
                </View>

            </View >
        );
    }
}

export default HelpAndSupport;
