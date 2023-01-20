import {View, ActivityIndicator, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles.js';
import POPUP_CONSTANTS from '../../enums/popup';
import RouteConfig from '../../constants/route-config.js';
import bellImg from '../../assets/images/group/image.png';
import {API} from '../../requests';
import colors from '../../constants/colors.js';
import Popup from '../../components/Popup/index.js';
import {FlatList, Image, ScrollView} from 'native-base';
import Moment from 'moment';
import ProgressPercentage from '../../components/ProgressPercentage/index.js';
import groupIcon from '../../assets/images/splash/paint_logo.png';
import CustomButton from '../../components/Button';

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
      },
      {
        wallName: 'Wall2',
        images: [bellImg, bellImg],
      },
      {
        wallName: 'Wall3',
        images: [bellImg],
      },
      {
        wallName: 'Wall4',
        images: [bellImg],
      },
      {
        wallName: 'Ceiling',
        images: [bellImg],
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
    };
  }

  componentDidMount() {}

  showSpinner = () => {
    this.setState({
      popup: {type: POPUP_CONSTANTS.SPINNER_POPUP},
    });
  };

  closePopup = () => {
    this.setState({popup: undefined});
  };
  updateImage = () => {
    console.info('updateImage');
  };

  onClick = (event, data) => {
    console.info('onClick');
  };
  getPopupContent = () => {
    const {popup} = this.state;

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
    const {roomInfo, popup, resendInfo} = this.state;
    const {gallery} = roomInfo;
    return (
      <ScrollView style={styles.container}>
        <Popup visible={!!popup}>{this.getPopupContent()}</Popup>
        <ProgressInfo roomInfo={roomInfo} resendInfo={resendInfo} />
        <ImagesInfo gallery={gallery} onPress={this.updateImage} />
      </ScrollView>
    );
  }
}

const ProgressInfo = ({roomInfo, resendInfo}) => {
  const {roomName, date, updatedBy, activity} = roomInfo;
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
      <Text style={styles.activityLabel}>{'Activity'}</Text>
      <Text style={styles.activityInfo}>{activity}</Text>

      <Text style={styles.activityProressLabel}>{'Activity Progress'}</Text>
      <ProgressPercentage value={42} />
    </View>
  );
};

const ImagesInfo = ({gallery}) => {
  return (
    <SafeAreaView style={styles.tabView}>
      <FlatList
        data={gallery}
        contentContainerStyle={styles.wallImages}
        keyExtractor={(item, index) => item.key}
        renderItem={({item}) => {
          const wallImgCount = item.images.length;
          return (
            <View style={styles.navitem}>
              <Image
                source={item.images[0]}
                style={styles.wallImg}
                resizeMode="contain"
              />
              <Text style={styles.wallImgCount}>
                {wallImgCount > 1 ? (
                  <Image
                    source={bellImg}
                    style={styles.countIcon}
                    resizeMode="contain"
                  />
                ) : null}
              </Text>
              <Text style={styles.wallName}>{item.wallName}</Text>
            </View>
          );
        }}
      />
      <CustomButton
        title={'Approve'}
        textStyle={[styles.btnTxt]}
        style={[styles.button]}
        onPress={() => this.onClick('approve')}
      />
    </SafeAreaView>
  );
};

export default Approve;
