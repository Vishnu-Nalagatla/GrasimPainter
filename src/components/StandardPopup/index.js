/**
 * @flow
 */

import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from './styles';
import CustomButton from '../Button';
import strings from '../../constants/strings';

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
	message,
	heading,
	headingImage,
	buttons,
	popupStyle = {},
	messageStyle = {},
}: Props) => {
	let buttonViews = null;
	buttonViews =
		buttons &&
		buttons.map((button, index) => (
			<CustomButton
				key={`button-${index}`}
				title={button.title}
				textStyle={[styles.btnText, button.textStyle]}
				style={[styles.errorBtn, button.style]}
				onPress={button.onPress}
			/>
		));

	return (
		<ScrollView contentContainerStyle={[styles.popup, popupStyle]}>
			{headingImage ? (
				<Image source={headingImage} style={styles.errorIcon} resizeMode="contain" />
			) : null}
			{heading ? (
				<Text style={styles.errorHeading}>{heading}</Text>
			) : (
				<Text style={styles.errorHeading} />
			)}
			<Text style={[styles.errorTxt, messageStyle]}>{message || strings.somethingWentWrong}</Text>
			{buttons ? <View style={styles.buttonContainer}>{buttonViews}</View> : null}
		</ScrollView>
	);
};

export default StandardPopup;
