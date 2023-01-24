import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {View, Text, Icon, Button} from 'native-base';
import DatePicker from 'react-native-date-picker';
import ViewPort from '../../constants/view-port';
// import strings from '../../globalization';

const {vw, vh} = ViewPort;

const styles = StyleSheet.create({
  onepicker: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  OnePickerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.75,
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 350,
    height: Platform.OS === 'ios' ? 530 : 350,
  },
  heading: {
    alignItems: 'center',
    backgroundColor: '#ad0028',
    flexDirection: 'row',
    width: '100%',
    padding: Platform.OS === 'ios' ? 25 : 15,
    marginRight: 0,
  },
  headingText: {flex: 1, textAlign: 'center', color: '#fff', fontSize: 24},
  close: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    position: 'absolute',
    right: 10,
    top: 5,
  },
  closeIcon: {color: '#fff'},
  arrowIcon: {color: '#000'},
  btnStyle: {
    height: 53,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  btnText: {
    color: '#AD0028',
    fontSize: 30,
    width: '100%',
    textAlign: 'center',
  },
});

export interface Props {
  minInterval?: number;
  hourInterval?: number;
  hasMeridian?: Boolean;
  hours?: number;
  minutes?: number;
  meridian?: String;
  onChange?: Function;
}

const MAX_12_HOURS = 12;

interface NewProps {
  value: any;
  onChange: Function;
}

export default function TimePicker(props: Props) {
  const {onChange, onClose, hours: hr, minutes: min, meridian: mer} = props;
  const getHour = (selHour, format) => {
    if (format === 'PM') {
      if (Number(selHour) < MAX_12_HOURS) {
        return Number(selHour) + MAX_12_HOURS;
      }
      if (Number(selHour) > MAX_12_HOURS) {
        return Number(selHour) - MAX_12_HOURS;
      }
    }
    if (format === 'AM') {
      if (Number(selHour) === MAX_12_HOURS) {
        return Number(selHour) - MAX_12_HOURS;
      }
      if (Number(selHour) === 0) {
        return Number(selHour) + MAX_12_HOURS;
      }
    }
    return Number(selHour);
  };

  const hour = getHour(hr, mer);
  const [hours, setHours] = useState(hour);
  const [minutes, setMinutes] = useState(Number(min));
  const [meridian, setMeridian] = useState(mer);

  const onHandleOk = () => {
    const selectedHour = getHour(hours, meridian);
    const timeHour = selectedHour < 10 ? `0${selectedHour}` : selectedHour;
    const timeMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timeValue = `${timeHour}:${timeMinutes} ${meridian}`;
    onChange && onChange(timeValue, meridian);
    onClose && onClose();
  };

  return (
    <View style={styles.viewContainer}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>{'timePicker'}</Text>
        <TouchableOpacity
          style={styles.close}
          onPress={() => onClose && onClose()}>
          <Icon name="md-close" style={styles.closeIcon} type="Ionicons" />
        </TouchableOpacity>
      </View>
      {/* <DatePicker
        style={{
          flex: 1,
          width: 448  ,
        }}
        date={new Date()}
        mode="time"
        onDateChange={value => {
          const selectedMinutes = value.getMinutes();
          const dateHours = value.getHours();
          const ampm = dateHours >= MAX_12_HOURS ? 'PM' : 'AM';
          setHours(dateHours);
          setMinutes(selectedMinutes);
          setMeridian(ampm);
        }}
      /> */}
      <DatePicker
        style={{
          flex: 1,
          width: 448,
        }}
        date={new Date()}
      />
      <Button onPress={onHandleOk} style={styles.btnStyle}>
        <Text style={styles.btnText}>{'ok'}</Text>
      </Button>
    </View>
  );
}
