/**
 * @flow
 */

import { Button, Text } from 'native-base';
import React from 'react';
import styles from './styles';

export interface Props {
	style?: ViewPropTypes.style;
	textStyle?: Object;
	title: string;
	onPress: Function;
	disabled?: Boolean;
}

export default ({ textStyle, title, style, onPress, disabled, ...buttonProps }: Props) => {

	return (
		<Button
			{...buttonProps}
			style={[styles.container, style, disabled ? styles.buttonDisabled : '']}
			onPress={onPress}
			disabled={disabled}>
			<Text style={[styles.text, textStyle]}>{title}</Text>
		</Button>
	);
};
