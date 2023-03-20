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
import multipleImg from '../../assets/images/multiple/image.png';
import { API } from '../../requests';
import colors from '../../constants/colors.js';
import Popup from '../../components/Popup/index.js';
import { Checkbox, FlatList, Image, ScrollView } from 'native-base';
import Moment from 'moment';
import ProgressPercentage from '../../components/ProgressPercentage/index.js';
import groupIcon from '../../assets/images/splash/paint_logo.png';
import closeIcon from '../../assets/images/close/image.png';
import CustomButton from '../../components/Button';
import Slideshow from 'react-native-image-slider-show';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import ViewPort from '../../constants/view-port';
const { vh, vw } = ViewPort;

export interface Props {
  props: String;
}

class Approve extends React.Component<Props, State> {
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
        images: [groupIcon],
        wallIndex: 1,
        showRetakeIcon: false,
      },
      {
        wallName: 'Wall2',
        images: [bellImg, bellImg],
        wallIndex: 2,
        showRetakeIcon: false,
      },
      {
        wallName: 'Wall3',
        images: [bellImg],
        wallIndex: 3,
        showRetakeIcon: false,
      },
      {
        wallName: 'Wall4',
        images: [bellImg],
        wallIndex: 4,
        showRetakeIcon: false,
      },
      {
        wallName: 'Ceiling',
        images: [bellImg],
        wallIndex: 5,
        showRetakeIcon: false,
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
      images: [
        { url: bellImg },
        { url: groupIcon },
        { url: bellImg },
        { url: bellImg },
      ],
      position: 1,
      showGallery: false,
      buttonLabel: 'Approve',
    };
  }

  componentDidMount() { }

  showSpinner = () => {
    this.setState({
      popup: { type: POPUP_CONSTANTS.SPINNER_POPUP },
    });
  };

  closePopup = () => {
    this.setState({ popup: undefined });
  };
  updateImage = () => {
    console.info('updateImage');
  };

  onPositionChange = index => {
    this.setState({ position: index });
  };

  showgallery = wallPics => {
    this.setState({
      showGallery: true,
      popup: { type: POPUP_CONSTANTS.SHOW_GALLERY },
      position: 0,
      images: wallPics.map(img => {
        return {
          url: img,
        };
      }),
    });
  };

  getPopupContent = () => {
    const { popup } = this.state;
    const { images, position } = this.state;
    const count = position + 1 + '/' + images.length;
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
          <View style={styles.sliderView}>
            <Text style={styles.imageCount}>{count}</Text>
            <TouchableOpacity
              style={styles.clossIcon}
              onPress={this.closePopup}>
              <Image
                source={closeIcon}
                style={styles.clossIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <ImagesGallery
              images={images}
              position={position}
              onPositionChange={this.onPositionChange}
            />
          </View>
        );
    }
  };

  //NOTE: change buttonLabel values based on logpressed wall images count.
  onImageLongPress = wallIndex => {
    const { roomInfo, buttonLabel } = this.state;
    const { gallery } = roomInfo;
    console.info('onImageLongPress wallIndex...', wallIndex);
    const updatedGallery = gallery.map(img => {
      const { showRetakeIcon } = img;
      if (img.wallIndex === wallIndex) {
        return {
          ...img,
          showRetakeIcon: !showRetakeIcon,
        };
      } else {
        return img;
      }
    });
    roomInfo.gallery = updatedGallery;
    this.setState({
      roomInfo,
      buttonLabel:
        buttonLabel === 'Ask for Retake' ? 'Approve' : 'Ask for Retake',
    });
  };

  render() {
    const { roomInfo, popup, resendInfo, buttonLabel } = this.state;
    const { gallery, activity } = roomInfo;
    return (
      <ScrollView style={styles.container}>
        <Popup visible={!!popup}>{this.getPopupContent()}</Popup>
        <ProgressInfo roomInfo={roomInfo} resendInfo={resendInfo} />
        <ActivityInfo
          gallery={gallery}
          onPress={this.showgallery}
          onLongPress={this.onImageLongPress}
          buttonLabel={buttonLabel}
          activity={activity}
        />
        <ActivityInfo
          gallery={gallery}
          onPress={this.showgallery}
          onLongPress={this.onImageLongPress}
          buttonLabel={buttonLabel}
          activity={activity}
        />
        <ActivityInfo
          gallery={gallery}
          onPress={this.showgallery}
          onLongPress={this.onImageLongPress}
          buttonLabel={buttonLabel}
          activity={activity}
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

      <View style={styles.progressWrapper}>
        <View style={styles.leftView}>
          <View style={styles.dateView}>
            <Image
              source={bellImg}
              style={styles.flagIcon}
              resizeMode="contain"
            />
            <Text style={styles.date}>{dateStr}</Text>
          </View>
          <View style={styles.updatedBy}>
            <Text style={styles.progressInfo}>{'updates by'}</Text>
            <Text style={styles.progressInfo}>{updatedBy}</Text>
          </View>
        </View>
        <View style={styles.circularProgress}>
          <AnimatedCircularProgress
            size={70 * vh}
            width={8 * vw}
            fill={75}
            rotation={-360}
            tintColor="#3C58B5"
            lineCap="round"
            backgroundColor="#D5DFFF">
            {() => <Text style={styles.percentage}>{'75 %'}</Text>}
          </AnimatedCircularProgress>
        </View>
      </View>
      <View style={styles.resendView}>
        <Image source={bellImg} style={styles.infoIcon} resizeMode="contain" />
        <Text style={styles.resendInfo}>{resendInfo}</Text>
      </View>
      {/* <Text style={styles.activityLabel}>{'Activity'}</Text>
      <Text style={styles.activityInfo}>{activity}</Text>

      <Text style={styles.activityProressLabel}>{'Activity Progress'}</Text>
      <ProgressPercentage value={42} /> */}
    </View>
  );
};

const ImagesGallery = ({ images, position = 1, onPositionChange }) => {
  return (
    <Slideshow
      dataSource={images}
      position={position}
      indicatorColor="red"
      indicatorSize={0}
      arrowLeft={
        <Image
          source={bellImg}
          style={styles.countIcon}
          resizeMode="contain"
          alt=""
        />
      }
      arrowRight={
        <Image
          source={bellImg}
          style={styles.countIcon}
          resizeMode="contain"
          alt=""
        />
      }
      onPositionChanged={index => {
        onPositionChange(index);
      }}
    />
  );
};
const ActivityInfo = ({
  gallery,
  onPress,
  onLongPress,
  buttonLabel,
  activity,
}) => {
  return (
    <SafeAreaView style={styles.tabView}>
      <View style={styles.activity}>
        <Text style={styles.activityLabel}>{'Activity'}</Text>
        <Text style={styles.activityInfo}>{activity}</Text>
        <Text style={styles.activityProressLabel}>{'Activity Progress'}</Text>
        <ProgressPercentage value={42} />
      </View>
      <FlatList
        data={gallery}
        contentContainerStyle={styles.wallImages}
        numColumns={3}
        keyExtractor={(item, index) => item.key}
        renderItem={({ item }) => {
          const wallImgCount = item.images.length;
          const showRetakeIcon = item.showRetakeIcon;
          return (
            <TouchableOpacity
              style={styles.navitem}
              onPress={() => onPress(item.images)}
              onLongPress={() => onLongPress(item.wallIndex)}>
              <Image
                source={item.images[0]}
                style={styles.wallImg}
                resizeMode="contain"
                alt=""
              />
              <View style={styles.wallImgCount}>
                {wallImgCount > 1 ? (
                  <Image
                    source={multipleImg}
                    style={styles.countIcon}
                    resizeMode="contain"
                    alt=""
                  />
                ) : null}
              </View>
              <View style={styles.retakeView}>
                {showRetakeIcon ? <Checkbox checked={showRetakeIcon} /> : null}
              </View>
              <Text style={styles.wallName}>{item.wallName}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <CustomButton
        title={buttonLabel}
        textStyle={[styles.btnTxt]}
        style={[styles.button]}
        onPress={() => this.onClick('approve')}
      />
    </SafeAreaView>
  );
};

export default Approve;
