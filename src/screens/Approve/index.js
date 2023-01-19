import {View, ActivityIndicator, Text} from 'react-native';
import React from 'react';
import styles from './styles.js';
import POPUP_CONSTANTS from '../../enums/popup';
import RouteConfig from '../../constants/route-config.js';
import {API} from '../../requests';
import colors from '../../constants/colors.js';
import Popup from '../../components/Popup/index.js';
import {ScrollView} from 'native-base';

export interface Props {
  props: String;
}

class Approve extends React.Component<Props, State> {
  roomInfo = {
    roomName: 'Namita’s Living Room',
    date: new Date(),
    updatedBy: 'headPainter Ramesh',
    upateProgress: 75,
    activity: 'White washing and painting are done',
    activityProgress: 62,
    gallery: [
      {
        wallName: 'Wall1',
        images: [],
      },
      {
        wallName: 'Wall2',
        images: [],
      },
      {
        wallName: 'Wall3',
        images: [],
      },
      {
        wallName: 'Wall4',
        images: [],
      },
      {
        wallName: 'Ceiling',
        images: [],
      },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      popup: undefined,
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
    const {name, buttons, popup} = this.state;
    return (
      <ScrollView style={styles.container}>
        <Popup visible={!!popup}>{this.getPopupContent()}</Popup>
        <Text>{'hello'}</Text>
      </ScrollView>
    );
  }
}

export default Approve;
