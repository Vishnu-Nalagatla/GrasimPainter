import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './styles.js';
import SwithcButtons from '../../components/SwithcButtons';

export interface Props {
  props: String;
}

const MyDay = (props: Props) => {
  const {name = 'Mukesh1'} = props;
  const buttons = [
    {
      label: 'Today',
      status: true,
      id: 1,
    },
    {
      id: 2,
      label: 'Tomorrow',
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
    <View style={styles.container}>
      <View style={styles.welcomeMessage}>
        <Text style={styles.welcomeText}>
          Hi {name}, Good Morning! Here is the list of things that needs to be
          done in your day{''}
        </Text>
      </View>
      <SwithcButtons buttons={state} onClick={onClick} />
    </View>
  );
};

export default MyDay;
