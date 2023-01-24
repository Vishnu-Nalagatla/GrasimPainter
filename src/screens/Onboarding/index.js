import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Image, Dimensions, Text } from "react-native";
import onboardingIcon from '../../assets/images/onboarding/onboardingIcon.png';
import Onboarding from 'react-native-onboarding-swiper';
import rightArrow from '../../assets/images/onboarding/arrow-right.png';
import styles from "./styles";
import ViewPort from '../../constants/view-port';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setLoginData } from '../../store/actions';

const { width } = Dimensions.get("window");
const { vh } = ViewPort;

class OnboardingScreen extends React.Component {

    onDone = () => {
        const { dispatchSetLoginData } = this.props;
        const date = new Date();
        const currentDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        AsyncStorage.getItem('currentUser_' + currentDate)
            .then(user => {
                AsyncStorage.getItem('loggedInUser_' + currentDate)
                    .then(users => {
                        const loggedInUsers = JSON.parse(users);
                        const updatedUsers = {
                            ...loggedInUsers,
                            [user]: false,
                        }
                        AsyncStorage.setItem('loggedInUser_' + currentDate, JSON.stringify(updatedUsers))
                            .then(res => {
                                dispatchSetLoginData({ userName: user, showOnboarding: false });
                            });
                    })
            });
    };

    render() {
        return (
            <Onboarding
                showSkip={false}
                bottomBarHeight={750 * vh}
                bottomBarColor='#2c4dae'
                onDone={this.onDone}
                nextLabel={(
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Next</Text>
                        <Image source={rightArrow} style={styles.rightArrowStyle} />
                    </View>
                )}
                pages={[
                    {
                        backgroundColor: '#2c4dae',
                        image: (
                            <View key={1} style={{ width: width }}>
                                <Image resizeMode="contain"
                                    key={1}
                                    source={onboardingIcon}
                                    style={styles.sliderImage} />
                            </View>
                        ),
                        title: (
                            <View style={[styles.padding32, styles.titleContainer]}>
                                <Text style={styles.title}>Hi Snigdha</Text>
                                <Text style={styles.title}>Welcome to Paint Craft</Text>
                            </View>
                        ),
                        subtitle: (
                            <View style={[styles.padding32, styles.subtitleContainer]}>
                                <Text style={styles.descriptionText}>Manage and track all your projects and project updates.</Text>
                            </View>
                        ),
                    },
                    {
                        backgroundColor: '#2c4dae',
                        image: (
                            <View key={1} style={{ width: width }}>
                                <Image resizeMode="contain"
                                    key={1}
                                    source={onboardingIcon}
                                    style={styles.sliderImage} />
                            </View>
                        ),
                        title: (
                            <View style={[styles.padding32, styles.titleContainer]}>
                                <Text style={styles.title}>Hi Snigdha</Text>
                                <Text style={styles.title}>Welcome to Paint Craft</Text>
                            </View>
                        ),
                        subtitle: (
                            <View style={[styles.padding32, styles.subtitleContainer]}>
                                <Text style={styles.descriptionText}>See project insights and performance, manage your teams.</Text>
                            </View>
                        ),
                    },
                    {
                        backgroundColor: '#2c4dae',
                        image: (
                            <View key={1} style={{ width: width }}>
                                <Image resizeMode="contain"
                                    key={1}
                                    source={onboardingIcon}
                                    style={styles.sliderImage} />
                            </View>
                        ),
                        title: (
                            <View style={[styles.padding32, styles.titleContainer]}>
                                <Text style={styles.title}>Hi Snigdha</Text>
                                <Text style={styles.title}>Welcome to Paint Craft</Text>
                            </View>
                        ),
                        subtitle: (
                            <View style={[styles.padding32, styles.subtitleContainer]}>
                                <Text style={styles.descriptionText}>Apply attendance, view profile, see HR related documents.</Text>
                            </View>
                        ),
                    },
                ]}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatchSetLoginData: (payload) => {
        dispatch(setLoginData(payload));
    },
});

export default connect(null, mapDispatchToProps)(OnboardingScreen);

