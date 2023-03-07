import {ScrollView, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import CustomButton from '../../components/Button';

import styles from './styles';
import {API} from '../../requests';

const SiteCheckList = props => {
  const {project} = props;
  const [projectData, setProjectData] = useState({});
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
  useEffect(() => {
    console.log('project---->', project);
    setProjectData(project);
  }, []);
  const lable1 = 'Ensure following items are right';
  const lable2 = 'Let’s check few more items';
  const btnlabel = 'Save Checklist';
  // const checkList1 = [
  //   {
  //     question:
  //       'Will customer vacate the space and move personal items for job execution?',
  //     status: false,
  //     index: 1,
  //   },
  //   {
  //     question: 'Does the site have sample storage space for material?',
  //     status: SiteMaterialStorage == 'Yes' ? true : false,
  //     index: 2,
  //   },
  //   {
  //     question:
  //       'Confirmation on accesability for material and asset movement (Service lifts, size of lift etc.)',
  //     status: true,
  //     index: 3,
  //   },
  //   {
  //     question: 'Availability of electricity',
  //     status: SitePowerAvailability == 'Yes' ? true : false,
  //     index: 4,
  //   },
  //   {
  //     question: 'Availability of changing area for crew',
  //     status: true,
  //     index: 5,
  //   },
  //   {
  //     question: 'Availability of washroom facility for painting crew',
  //     status: SiteWashroomFacility == 'Yes' ? true : false,
  //     index: 6,
  //   },
  // ];

  // const moreCheckList1 = [
  //   {
  //     question: 'Is the customer aligned with the current project start date?',
  //     status: true,
  //     index: 100,
  //   },
  //   {
  //     question: 'Availability of lighting for night time, if required',
  //     status: true,
  //     index: 101,
  //   },
  //   {
  //     question: 'Any work permit required from premisis?',
  //     status: SiteWorkPermit == 'Yes' ? true : false,
  //     index: 102,
  //   },
  //   {
  //     question: 'Any ID cards/permits required for painting crew?',
  //     status: true,
  //     index: 103,
  //   },
  // ];
  const [checkList, setCheckList] = useState();
  const [moreCheckList, setMoreCheckList] = useState();

  const onToggle = (index, entity, status) => {
    console.info('onToggle..', index, status);
    let tempObj = {...projectData};
    tempObj[entity.key] = status == true ? 'Yes' : 'No';
    setProjectData(tempObj);
  };
  const saveChecklist = () => {
    const reqObj = checkList?.data.map((item, index) => {
      const {key, value} = item;
      return {
        key: key,
        value:
          projectData[key] == true || projectData[key] == 'Yes' ? 'Yes' : 'No',
      };
    });
    console.log('saveChecklist reqObj--->', reqObj);
  };
  const Item = ({entity, index, isLast}) => {
    return (
      <View style={isLast ? styles.itemNoHr : styles.item}>
        <Text style={styles.question}>{entity.value}</Text>
        <ToggleSwitch
          isOn={projectData[entity.key] == 'Yes' ? true : false}
          onColor="#2C4DAE"
          offColor="#DCE3F8"
          size="small"
          onToggle={isOn => onToggle(index, entity, isOn)}
        />
      </View>
    );
  };

  useEffect(() => {
    API.getSiteCheckListData().then(response => {
      setCheckList(response);
    });
  }, []);

  useEffect(() => {
    console.log('checkList====>', checkList);
  }, [checkList]);
  const CheckList = ({data, lable}) => {
    console.log('CheckList data tttt ----->', data);
    return (
      <View style={styles.checkList}>
        <Text style={styles.lable}>{lable}</Text>
        {data.map((entity, index) => {
          const isLast = index === data.length - 1;
          console.log(entity.key, '------> ', projectData[entity.key]);
          return <Item entity={entity} index={index} isLast={isLast} />;
          // return (
          //   <View style={isLast ? styles.itemNoHr : styles.item}>
          //     <Text style={styles.question}>{entity.value}</Text>
          //     <ToggleSwitch
          //       isOn={projectData[entity.key] == 'Yes' ? true : false}
          //       onColor="#2C4DAE"
          //       offColor="#DCE3F8"
          //       size="small"
          //       onToggle={isOn => onToggle(index, entity, isOn)}
          //     />
          //   </View>
          // );
        })}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!!checkList && checkList?.data.length > 0 ? (
        <CheckList data={checkList?.data} lable={lable1} />
      ) : null}
      {/* <CheckList data={moreCheckList} lable={lable2} /> */}
      <CustomButton
        title={btnlabel}
        textStyle={[styles.btnTxt]}
        style={[styles.button]}
        onPress={saveChecklist}
      />
    </ScrollView>
  );
};

export default SiteCheckList;
