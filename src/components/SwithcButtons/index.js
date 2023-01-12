import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

// style={activeTab === CLASS_CONSTANTS.MARKETING ? [styles.bodyContainer, styles.marketingBodyContainer] : styles.bodyContainer}
const SwithcButtons = props => {
  console.info('props..', props);
  const {buttons, onClick} = props;

  // TODO: text style review.
  return (
    <View style={styles.container}>
      {buttons.map(button => {
        const {status, label} = button;
        return (
          <TouchableOpacity
            onPress={() => (status ? '' : onClick(button))}
            style={status ? styles.activebutton : styles.button}>
            <Text style={status ? styles.activeLabel : styles.label}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SwithcButtons;
