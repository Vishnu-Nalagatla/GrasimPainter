import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styeles';
import ellipse from '../../../assets/images/ellipse/image.png';
import calendar from '../../../assets/images/calendar/image.png';
import {Image} from 'react-native';
import Moment from 'moment';
import CustomButton from '../Button';
import DropDown from '../../DropDown';
import {Dropdown} from 'react-native-element-dropdown';
// import {Dropdown} from 'react-native-element-dropdown';

const ProjectTimeLine = (props: Props) => {
  const {data, onClick} = props;

  const {Name, AssetCheckStatus, ProjectStartDate, displayStatus} = data;
  console.info('displayStatus....: ', data);
  const {title, ctaLabel, order} = displayStatus;
  const viewDetails = 'View Details';
  const viewCrewCalendar = 'View Crew Calendar';

  const crewData = [
    {
      label: 'Crew1',
      value: {
        title: 'Crew1',
        status: 1,
        names: 'Rajesh1, Mahesh, Manohar, Javed1,  Manohar, Javed',
      },
    },
    {
      label: 'Crew 2',
      value: {
        title: 'Crew2',
        status: 2,
        names: 'Rajesh2, Mahesh, Manohar, Javed',
      },
    },
    {
      label: 'Crew 3',
      value: {
        title: 'Crew3',
        status: 3,
        names: 'Rajes3, Mahesh, Manohar, Javed1',
      },
    },
    {
      label: 'Crew 4',
      value: {
        title: 'Crew4',
        status: 4,
        names: 'Rajesh4, Mahesh, Manohar, Javed',
      },
    },
  ];

  const [value, setValue] = useState({
    label: 'Crew1',
    value: {
      title: 'Crew1',
      status: 1,
      names: 'Rajesh1, Mahesh, Manohar, Javed',
    },
  });
  const prepareDate = () => {
    const date = Moment(ProjectStartDate).format('DD MMMM YYYY');
    return `Starting on ${date}`;
  };
  const onPress = data => {
    console.info('onPress data....');
  };

  const renderItem = (item: any) => {
    const {title, names} = item.value;
    return (
      <View style={styles.crewItem}>
        <View style={styles.crewInfo}>
          <Text style={styles.crewTitle}>{title}</Text>
          <Text style={styles.crewStatus}>.</Text>
        </View>
        <Text style={styles.crewNames}>{names}</Text>
      </View>
    );
  };
  const onChangeItem = item => {
    setValue(item);
  };

  const showCewCalendar = () => {
    return (
      <View style={styles.crewWrapper}>
        <TouchableOpacity style={styles.cewCalendar}>
          <Image
            source={calendar}
            style={styles.calendar}
            resizeMode="contain"
          />
          <Text style={styles.viewCrewCalendar}>{viewCrewCalendar}</Text>
        </TouchableOpacity>
        <View style={styles.buttonWrapper}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            labelField="label"
            valueField="value"
            data={crewData}
            value={value}
            placeholder="Select Crew"
            onChange={item => {
              // setValue('Hello');
            }}
            maxHeight={250}
            renderItem={renderItem}
            selectedStyle={styles.selectedStyle}
          />
          <View>
            <CustomButton
              title={ctaLabel}
              textStyle={[styles.btnTxtPrimary]}
              style={[styles.buttonPrimary]}
              onPress={() => onClick(data)}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftWrapper}>
          <View style={styles.projectLine}>
            <Image
              source={ellipse}
              style={styles.ellipse}
              resizeMode="contain"
            />
            <View style={styles.staitLine} />
          </View>
          <Text style={styles.projectName}> {Name}</Text>
        </View>
        <TouchableOpacity
          style={styles.rightWrapper}
          onPress={() => onClick('PROJECT_DETAILS', data)}>
          <Text style={styles.viewDetailsText}> {viewDetails}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.status}> {title}</Text>
        <Text style={styles.date}> {prepareDate()}</Text>
        {+order === 4 ? (
          <Text style={styles.date}>
            <Text style={styles.viewDetailsText}> {'Call Mr. Rajesh'}</Text>
          </Text>
        ) : null}
        {+order === 2 ? (
          showCewCalendar()
        ) : (
          <View>
            <CustomButton
              title={ctaLabel}
              textStyle={[styles.btnTxt]}
              style={[styles.button]}
              onPress={() => onClick(data)}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default ProjectTimeLine;
