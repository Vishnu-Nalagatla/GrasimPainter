import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Platform, Appearance } from 'react-native';
import { View, Text, Icon, Button } from 'native-base';
import DatePicker from 'react-native-date-picker';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

const { vw, vh } = ViewPort;

const styles = StyleSheet.create({
  viewContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 252 * vw,
    height: 262 * vh,
  },
  heading: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 16 * vh,
  },
  headingText: {
    color: colors.black,
    fontSize: 16 * vh,
    fontWeight: '600',
    width: '100%',
  },
  close: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    position: 'absolute',
    right: 10,
    top: 5,
  },
  closeIcon: { color: '#fff' },
  arrowIcon: { color: '#000' },
  btnStyle: {
    height: 35 * vh,
    backgroundColor: 'white',
    marginBottom: 38 * vh,
  },
  hrLine: {
    borderColor: colors.sliderTrack,
    borderBottomWidth: 1 * vh,
    width: '100%',
    marginTop: 16 * vh,
  },
  btnText: {
    color: colors.primary,
    fontSize: 12 * vh,
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
  },
  btnTextErr: {
    color: colors.error,
    fontSize: 12 * vh,
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 16 * vh,
    marginTop: 16 * vh,
  },
  datePicker: {
    // backgroundColor: 'red',
    // borderRadius: 5,
    // borderColor: '#C5C5C5',
    // borderWidth: 1,
    marginVertical: -10 * vh,
    height: 165 * vh,
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
  const { onChange, hours: hr, minutes: min, meridian: mer, onClose } = props;
  console.info('props....', props);
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
        <Text style={styles.headingText}>Select the visit time</Text>
      </View>
      <View style={styles.hrLine} />
      <View style={styles.datePicker}>
        <DatePicker
          date={new Date(new Date().setHours(hours, minutes, 0, 0))}
          mode="time"
          textColor="#000"
          onDateChange={value => {
            const selectedMinutes = value.getMinutes();
            const dateHours = value.getHours();
            const ampm = dateHours >= MAX_12_HOURS ? 'PM' : 'AM';
            setHours(dateHours);
            setMinutes(selectedMinutes);
            setMeridian(ampm);
          }}
          androidVariant="nativeAndroid"
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button onPress={onClose} style={styles.btnStyle}>
          <Text style={styles.btnTextErr}>CANCEL</Text>
        </Button>
        <Button onPress={onHandleOk} style={styles.btnStyle}>
          <Text style={styles.btnText}>OK</Text>
        </Button>
      </View>
    </View>
  );
}
