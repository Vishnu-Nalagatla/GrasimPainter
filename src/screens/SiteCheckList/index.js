import {ScrollView, Text} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import CustomButton from '../../components/Button';

import styles from './styles';

const SiteCheckList = () => {
  console.log('project screen');
  const lable1 = 'Ensure following items are right';
  const lable2 = 'Let’s check few more items';
  const btnlabel = 'Save Checklist';
  const onPress = () => {
    console.info('onPress..');
  };

  const onToggle = index => {
    console.info('onToggle..', index);
  };

  const response = [
    {
      question:
        'Will customer vacate the space and move personal items for job execution?',
      status: true,
      index: 1,
    },
    {
      question: 'Does the site have ample storage space for material?',
      status: true,
      index: 2,
    },
    {
      question:
        'Confirmation on accesability for material and asset movement (Service lifts, size of lift etc.)',
      status: true,
      index: 3,
    },
    {
      question: 'Availability of electricity',
      status: true,
      index: 4,
    },
    {
      question: 'Availability of changing area for crew',
      status: true,
      index: 5,
    },
    {
      question: 'Availability of washroom facility for painting crew',
      status: true,
      index: 6,
    },
  ];
  const checkList = [
    {
      question: 'Is the customer aligned with the current project start date?',
      status: true,
      index: 100,
    },
    {
      question: 'Availability of lighting for night time, if required',
      status: true,
      index: 101,
    },
    {
      question: 'Any work permit required from premisis?',
      status: true,
      index: 102,
    },
    {
      question: 'Any ID cards/permits required for painting crew?',
      status: true,
      index: 103,
    },
  ];

  const Item = ({data}) => {
    const {question, index, status} = data;
    return (
      <View style={styles.item}>
        <Text style={styles.question}> {question}</Text>
        <ToggleSwitch
          isOn={status}
          onColor="#2C4DAE"
          offColor="#DCE3F8"
          label=""
          labelStyle={{color: 'black', fontWeight: '900'}}
          size="small"
          onToggle={isOn => onToggle(index, isOn)}
        />
      </View>
    );
  };

  const CheckList = ({data, lable}) => {
    return (
      <View style={styles.checkList}>
        <Text style={styles.lable}>{lable}</Text>
        {data.map(entity => (
          <Item data={entity} />
        ))}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CheckList data={response} lable={lable1} />
      <CheckList data={checkList} lable={lable2} />
      <CustomButton
        title={btnlabel}
        textStyle={[styles.btnTxt]}
        style={[styles.button]}
        onPress={onPress}
      />
    </ScrollView>
  );
};

export default SiteCheckList;
