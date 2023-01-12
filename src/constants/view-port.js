// import { createViewPortConfig } from 'react-native-responsive-view-port';

// const ViewPort = createViewPortConfig(2280, 1080);

// export default ViewPort;


import { Platform, Dimensions } from 'react-native';
import UTIL from 'mroads-js-utils';

const { width, height } = Dimensions.get('screen');

function createViewPortConfig(baseDeviceWidth = 2280, baseDeviceHeight = 1080) {
    let screenWidth = width;
    let screenHeight = height;
    if (height > width) {
        screenWidth = height;
        screenHeight = width;
    }
    return {
        vw: UTIL.round(screenWidth / baseDeviceWidth),
        vh: UTIL.round(screenHeight / baseDeviceHeight),
    };
}

export default createViewPortConfig(2280, Platform.OS === 'android' ? 1080 : 1200);
