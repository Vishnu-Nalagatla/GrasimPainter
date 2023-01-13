/**
 * @flow
 */

import React from 'react';
import type { Node } from 'react';
import { View } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';

export interface Props {
	visible: boolean;
	children: Node;
	popupStyle?: any;
	onPress?: Function;
	containerStyle?: any;
}

const Popup = ({ visible, children, popupStyle, onPress, containerStyle }: Props) => {
	if (visible) {
		return (
			<View style={[styles.container, containerStyle]} onPress={onPress} disabled={!onPress}>
				<View style={[styles.popup, popupStyle]}>{children}</View>
				<TouchableOpacity
					style={{
						...StyleSheet.absoluteFillObject,
					}}
					onPress={onPress}
				/>
			</View>
		);
	}
	return null;
};

export default Popup;
