import React from 'react';
import { Container, Content } from 'native-base';
import { Image, View, Text } from 'react-native';
import paintIcon from '../../assets/images/splash/paint_logo.png';
import starIcon from '../../assets/images/splash/star_logo.png';
import paintCraftIcon from '../../assets/images/splash/paint_logo.png';
import painterIcon from '../../assets/images/splash/paint_logo.png';
import styles from './styles';


const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={paintIcon} style={styles.paintIcon} resizeMode="contain" />
            <Image source={starIcon} style={styles.starIcon} resizeMode="contain" />
            {/* <Image source={paintCraftIcon} style={styles.paintCraftIcon} resizeMode="contain" />
            <Image source={painterIcon} style={styles.painterIcon} resizeMode="contain" /> */}
        </View>
    );
};

export default SplashScreen;
