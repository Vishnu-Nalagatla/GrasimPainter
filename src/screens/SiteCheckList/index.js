import { ScrollView, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import CustomButton from '../../components/Button';
import colors from '../../constants/colors';
import styles from './styles';
import { AEM_API, SFDC_API } from '../../requests';

const SiteCheckList = props => {
  const { project } = props;
  const [projectData, setProjectData] = useState({});
  const [popup, setPopup] = useState(false);
  const lable1 = 'Ensure following items are right';
  const lable2 = 'Let’s check few more items';
  const btnlabel = 'Save Checklist';
  const [checkList, setCheckList] = useState();
  const [moreCheckList, setMoreCheckList] = useState();

  const onToggle = (index, entity, status) => {
    if (projectData && projectData?.SitePreJobStatus != '') {
      setPopup(true);
      console.info('onToggle..', index, status);
      let tempObj = { ...projectData };
      tempObj[entity.key] = status == true ? 'Yes' : 'No';
      setProjectData(tempObj);
      setPopup(false);
    }
  };
  const saveChecklist = () => {
    const checkListReqObj = {
      Prejob_Status__c: 'Completed',
      Site_Occupancy__c:
        projectData.SiteOccupancy == true || projectData.SiteOccupancy == 'Yes'
          ? 'Yes'
          : 'No',
      Power_Availability__c:
        projectData.SitePowerAvailability == true ||
          projectData.SitePowerAvailability == 'Yes'
          ? 'Yes'
          : 'No',
      Water_Availability__c:
        projectData.SiteWaterAvailability == true ||
          projectData.SiteWaterAvailability == 'Yes'
          ? 'Yes'
          : 'No',
      Cleaning_Changing_Area__c:
        projectData.SiteCleaningChangingArea == true ||
          projectData.SiteCleaningChangingArea == 'Yes'
          ? 'Yes'
          : 'No',
      Washroom_Facility__c:
        projectData.SiteWashroomFacility == true ||
          projectData.SiteWashroomFacility == 'Yes'
          ? 'Yes'
          : 'No',
      Material_Storage__c:
        projectData.SiteMaterialStorage == true ||
          projectData.SiteMaterialStorage == 'Yes'
          ? 'Yes'
          : 'No',
      Service_Lift__c:
        projectData.SiteServiceLift == true ||
          projectData.SiteServiceLift == 'Yes'
          ? 'Yes'
          : 'No',
      Lighting__c:
        projectData.SiteLighting == true || projectData.SiteLighting == 'Yes'
          ? 'Yes'
          : 'No',
      ID_Requirement__c:
        projectData.SiteIDRequirement == true ||
          projectData.SiteIDRequirement == 'Yes'
          ? 'Yes'
          : 'No',
      Work_Permit__c:
        projectData.SiteWorkPermit == true ||
          projectData.SiteWorkPermit == 'Yes'
          ? 'Yes'
          : 'No',
      Start_Date_Alignment__c:
        projectData.SiteStartDateAlignment == true ||
          projectData.SiteStartDateAlignment == 'Yes'
          ? 'Yes'
          : 'No',
    };
    setPopup(true);
    // setPopup(
    //   {type: POPUP_CONSTANTS.SPINNER_POPUP});
    SFDC_API.updateSiteChecklist(projectData?.SiteId, checkListReqObj)
      .then(res => {
        console.log('updateSiteChecklist--->', res);
        setPopup(false);
      })
      .catch(error => {
        // setPopup({
        //   type: POPUP_CONSTANTS.ERROR_POPUP,
        // });
      });
  };
  const Item = ({ entity, index, isLast }) => {
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
    AEM_API.getSiteCheckListData().then(response => {
      setPopup(true);
      setCheckList(response);
      setPopup(false);
    });
    setProjectData(project);
  }, []);

  const CheckList = ({ data, lable }) => {
    return (
      <View style={styles.checkList}>
        {/* {popup ? (
          <ActivityIndicator
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            size="large"
            color={colors.primary}
            animating
          />
        ) : null} */}
        <Text style={styles.lable}>{lable}</Text>
        {data.map((entity, index) => {
          const isLast = index === data.length - 1;
          return <Item entity={entity} index={index} isLast={isLast} />;
        })}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!popup ? (
        !!checkList && checkList?.data.length > 0 ? (
          <>
            <CheckList data={checkList?.data} lable={lable1} />
            {projectData && projectData?.SitePreJobStatus != '' ? (
              <CustomButton
                title={btnlabel}
                textStyle={[styles.btnTxt]}
                style={[styles.button]}
                onPress={saveChecklist}
              />
            ) : null}
          </>
        ) : null
      ) : (
        <ActivityIndicator
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          size="large"
          color={colors.primary}
          animating
        />
      )}
      {/* <CheckList data={moreCheckList} lable={lable2} /> */}
    </ScrollView>
  );
};

export default SiteCheckList;
