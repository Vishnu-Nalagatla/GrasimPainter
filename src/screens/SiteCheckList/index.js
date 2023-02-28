import {ScrollView, Text} from 'native-base';
import React, {useState} from 'react';
import {View} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import CustomButton from '../../components/Button';

import styles from './styles';

const SiteCheckList = props => {
  const {project} = props;
  const {
    SiteAddress,
    SiteCleaningChangingArea,
    SiteIDRequirement,
    SiteId,
    SiteLighting,
    SiteMaterialStorage,
    SiteName,
    SiteOccupancy,
    SitePowerAvailability,
    SitePreJobStatus,
    SiteServiceLift,
    SiteSize,
    SiteStartDateAlignment,
    SiteWaterAvailability,
    SiteWashroomFacility,
    SiteWorkPermit,
  } = project || {};

  const lable1 = 'Ensure following items are right';
  const lable2 = 'Let’s check few more items';
  const btnlabel = 'Save Checklist';
  const checkList1 = [
    {
      question:
        'Will customer vacate the space and move personal items for job execution?',
      status: false,
      index: 1,
    },
    {
      question: 'Does the site have sample storage space for material?',
      status: SiteMaterialStorage == 'Yes' ? true : false,
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
      status: SitePowerAvailability == 'Yes' ? true : false,
      index: 4,
    },
    {
      question: 'Availability of changing area for crew',
      status: true,
      index: 5,
    },
    {
      question: 'Availability of washroom facility for painting crew',
      status: SiteWashroomFacility == 'Yes' ? true : false,
      index: 6,
    },
  ];

  const moreCheckList1 = [
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
      status: SiteWorkPermit == 'Yes' ? true : false,
      index: 102,
    },
    {
      question: 'Any ID cards/permits required for painting crew?',
      status: true,
      index: 103,
    },
  ];
  const [checkList, setCheckList] = useState(checkList1);
  const [moreCheckList, setMoreCheckList] = useState(checkList1);

  const onPress = () => {
    console.info('onPress..');
  };

  const onToggle = (index, status) => {
    console.info('onToggle..', index, status);
  };

  const Item = ({data, isLast}) => {
    const {question, index, status} = data;
    console.info('status...', status);
    return (
      <View style={isLast ? styles.itemNoHr : styles.item}>
        <Text style={styles.question}>{question}</Text>
        <ToggleSwitch
          isOn={status}
          onColor="#2C4DAE"
          offColor="#DCE3F8"
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

        {data.map((entity, index) => {
          const isLast = index === data.length - 1;
          return <Item data={entity} isLast={isLast} />;
        })}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CheckList data={checkList} lable={lable1} />
      <CheckList data={moreCheckList} lable={lable2} />
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
