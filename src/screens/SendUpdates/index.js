import {
    View,
    ActivityIndicator,
    Text,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles.js';
import POPUP_CONSTANTS from '../../enums/popup';
import RouteConfig from '../../constants/route-config.js';
import bellImg from '../../assets/images/group/image.png';
import { API } from '../../requests';
import colors from '../../constants/colors.js';
import Popup from '../../components/Popup/index.js';
import { FlatList, Image, ScrollView } from 'native-base';
import Moment from 'moment';
import CustomButton from '../../components/Button';
import Slideshow from 'react-native-image-slider-show';
import uploadImg from '../../assets/images/approve/plus.png';
import {
    Camera,
} from 'react-native-vision-camera';

export interface Props {
    props: String;
}

class SendUpdates extends React.Component<Props, State> {
    roomInfo = {
        roomName: 'Namita’s Living Room',
        date: new Date(),
        updatedBy: 'HeadPainter Ram Prakash',
        upateProgress: 75,
        activity: 'White washing and painting are done',
        activityProgress: 62,
        gallery: [
            {
                wallName: 'Wall1',
                images: [],
                wallIndex: 1,
                showRightIcon: false,
            },
            {
                wallName: 'Wall2',
                images: [],
                wallIndex: 2,
                showRightIcon: false,
            },
            {
                wallName: 'Wall3',
                images: [],
                wallIndex: 3,
                showRightIcon: false,
            },
            {
                wallName: 'Wall4',
                images: [],
                wallIndex: 4,
                showRightIcon: false,
            },
            {
                wallName: 'Ceiling',
                images: [],
                wallIndex: 5,
                showRightIcon: false,
            },
        ],
    };
    resendInfo =
        'Long press images to request Ram Prakash to resend the images incase of poor quality.';
    constructor(props) {
        super(props);
        this.state = {
            popup: undefined,
            roomInfo: this.roomInfo,
            resendInfo: this.resendInfo,
            // images: [
            //     { url: bellImg },
            //     { url: groupIcon },
            //     { url: bellImg },
            //     { url: bellImg },
            // ],
            position: 0,
            // showGallery: false,
            hasPermission: false,
        };
    }

    componentDidMount = async () => {
        const status = await Camera.requestCameraPermission();
        console.log(status, 'status');
        this.setState({
            hasPermission: status === 'authorized'
        });
    }

    showSpinner = () => {
        this.setState({
            popup: { type: POPUP_CONSTANTS.SPINNER_POPUP },
        });
    };

    closePopup = () => {
        this.setState({ popup: undefined });
    };

    onPositionChange = index => {
        this.setState({ position: index });
    };

    updateImageList = (data, wallIndex) => {
        console.log('updateImageList data', data, wallIndex);
        const { roomInfo } = this.state;
        const { gallery } = roomInfo;
        const updatedGallery = gallery.map(wall => {
            if (wall.wallIndex === wallIndex) {
                return {
                    ...wall,
                    images: data,
                    // showRightIcon: !showRightIcon,
                };
            } else {
                return wall;
            }
        });
        roomInfo.gallery = updatedGallery;
        this.setState({
            roomInfo,
        });
    }

    capturePhoto = (wallIndex) => {
        const { navigation } = this.props;
        console.log('routing to capture pics screen', wallIndex);
        navigation.navigate(RouteConfig.CapturePics, {
            id: wallIndex,
            updateImageList: this.updateImageList,
        })
    }

    showGallery = wallPics => {
        this.setState({
            // showGallery: true,
            popup: { type: POPUP_CONSTANTS.SHOW_GALLERY },
            images: wallPics.map(imgPath => {
                console.log('imagePath while viewing in gallery', imgPath);
                return {
                    url: { uri: `file://${imgPath}` },
                };
            }),
        });
    };

    onImageClick = wall => {
        if (wall && wall.images && wall.images.length > 0) {
            this.showGallery(wall.images);
        } else {
            this.capturePhoto(wall.wallIndex);
        }
    }

    sendUpdates = () => {
        const { roomInfo } = this.state;
        console.log('Send room updates', roomInfo);
    }

    getPopupContent = () => {
        const { popup } = this.state;
        const { roomInfo, images } = this.state;
        // const { gallery } = roomInfo;

        if (!popup) {
            return null;
        }
        switch (popup.type) {
            case POPUP_CONSTANTS.SPINNER_POPUP:
                return (
                    <ActivityIndicator size="large" color={colors.primary} animating />
                );
            case POPUP_CONSTANTS.SHOW_GALLERY:
                return (
                    <ImagesGallery
                        // gallery={gallery}
                        images={images}
                        onPositionChange={this.onPositionChange}
                    />
                );
        }
    };

    render() {
        const { roomInfo, popup, resendInfo } = this.state;
        const { gallery } = roomInfo;
        return (
            <ScrollView style={styles.container}>
                <Popup onPress={this.closePopup} visible={!!popup}>
                    {this.getPopupContent()}
                </Popup>
                <ProgressInfo roomInfo={roomInfo} resendInfo={resendInfo} />
                <ImagesInfo
                    gallery={gallery}
                    onPress={this.onImageClick}
                    sendUpdates={this.sendUpdates}
                />
            </ScrollView>
        );
    }
}

const ProgressInfo = ({ roomInfo, resendInfo }) => {
    const { roomName, date, updatedBy, activity } = roomInfo;
    const dateStr = Moment(date).format('DD MMM YYYY');
    return (
        <View style={styles.infoWrapper}>
            <Text style={styles.roomName}>{roomName}</Text>
            <View style={styles.dateView}>
                <Image source={bellImg} style={styles.flagIcon} resizeMode="contain" />
                <Text style={styles.date}>{dateStr}</Text>
            </View>
            <View style={styles.progressWrapper}>
                <View>
                    <Text style={styles.progressInfo}>{'updates by'}</Text>
                    <Text style={styles.progressInfo}>{updatedBy}</Text>
                </View>
            </View>
            <View style={styles.resendView}>
                <Image source={bellImg} style={styles.infoIcon} resizeMode="contain" />
                <Text style={styles.resendInfo}>{resendInfo}</Text>
            </View>
        </View>
    );
};

const ImagesGallery = ({ images, position = 0, onPositionChange }) => {
    return (
        <Slideshow
            dataSource={images}
            position={position}
            indicatorColor="red"
            indicatorSize={0}
            arrowLeft={
                <Image source={bellImg} style={styles.countIcon} resizeMode="contain" />
            }
            arrowRight={
                <Image source={bellImg} style={styles.countIcon} resizeMode="contain" />
            }
            onPositionChanged={index => onPositionChange(index)}
        />
    );
};
const ImagesInfo = ({ gallery, onPress, sendUpdates }) => {
    return (
        <SafeAreaView style={styles.tabView}>
            <FlatList
                data={gallery}
                contentContainerStyle={styles.wallImages}
                keyExtractor={(item, index) => item.key}
                renderItem={({ item }) => {
                    const wallImgs = item.images;
                    // const showRightIcon = item.showRightIcon;
                    console.info('wallImgs....', wallImgs);
                    return (
                        <TouchableOpacity
                            style={styles.navitem}
                            onPress={() => onPress(item)}>
                            <Image
                                source={wallImgs.length > 0 ? { uri: `file://${wallImgs[0]}` } : uploadImg}
                                style={styles.wallImg}
                                resizeMode="contain"
                                alt="plus"
                            />
                            <Text style={styles.wallName}>{item.wallName}</Text>
                        </TouchableOpacity>
                    );
                }}
            />
            <CustomButton
                title={'Send Update'}
                textStyle={[styles.btnTxt]}
                style={[styles.button]}
                onPress={sendUpdates}
            />
        </SafeAreaView>
    );
};

export default SendUpdates;
