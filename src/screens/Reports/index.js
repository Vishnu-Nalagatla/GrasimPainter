import {ScrollView} from 'native-base';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import SwithcButtons from '../../components/SwithcButtons';

import styles from './styles';

const Reports = () => {
  const buttons = [
    {
      label: 'Project Report',
      status: true,
      id: 1,
    },
    {
      id: 2,
      label: 'QC Report',
      status: false,
    },
  ];

  const [state, setTabState] = useState(buttons);
  const onClick = event => {
    const buttonsChanged = state.map(button => {
      const {id} = button;
      if (event.id === id && !event.status) {
        button.status = true;
      } else {
        button.status = false;
      }
      return button;
    });
    setTabState(buttonsChanged);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.bodyContainer}>
        <SwithcButtons buttons={state} onClick={onClick} />
        <View style={styles.accordionContainer}>
          <Text> {''}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Reports;
