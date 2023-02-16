/**
 * @flow
 */

import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import CustomButton from '../Button';
// import strings from '../../constants/english';

export interface Button {
  title: strings;
  onPress: Function;
}

export interface Props {
  onPress: Function;
  message: string;
  buttons: Array<Button>;
}

const StandardPopup = ({
  message = 'Something went wrong. Please try  opening the app again.',
  heading,
  headingImage,
  buttons,
  popupStyle,
  messageStyle,
}: Props) => {
  let buttonViews = null;
  buttonViews =
    buttons &&
    buttons.map((button, index) => (
      <CustomButton
        key={`button-${index}`}
        title={button.title}
        textStyle={[styles.btnTxt, button.textStyle]}
        style={[styles.button, button.style]}
        onPress={button.onPress}
      />
    ));

  return (
    <View style={[styles.popup, popupStyle]}>
      {headingImage ? (
        <Image
          source={headingImage}
          style={styles.errorIcon}
          resizeMode="contain"
        />
      ) : null}
      {heading ? (
        <Text style={styles.errorHeading}>{heading}</Text>
      ) : (
        <Text style={styles.errorHeading} />
      )}

      <Text style={[styles.errorTxt, messageStyle]}>{message}</Text>
      {buttons ? (
        <View style={styles.buttonContainer}>{buttonViews}</View>
      ) : null}
    </View>
  );
};

export default StandardPopup;
