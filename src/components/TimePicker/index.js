import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {View, Text, Icon, Button} from 'native-base';
import DatePicker from 'react-native-date-picker';
import ViewPort from '../../constants/view-port';
import colors from '../../constants/colors';

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
    width: '90%',
    // height: Platform.OS === 'ios' ? 1000 * vh : 1000 * vh,
    padding: 40 * vh,
  },
  heading: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    padding: Platform.OS === 'ios' ? 25 * vh : 15 * vh,
  },
  headingText: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    color: colors.black,
    fontSize: 50 * vh,
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
  closeIcon: {color: '#fff'},
  arrowIcon: {color: '#000'},
  btnStyle: {
    height: 200 * vh,
    backgroundColor: 'white',
  },
  hrLine: {
    borderColor: '#E7EBF6',
    borderBottomWidth: 6 * vh,
    marginTop: 60 * vh,
    width: '100%',
  },
  btnText: {
    color: colors.primary,
    fontSize: 42 * vh,
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
  },
  btnTextErr: {
    color: colors.error,
    fontSize: 42 * vh,
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
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
  const {onChange, hours: hr, minutes: min, meridian: mer, onClose} = props;
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
        <View style={styles.hrLine} />
      </View>
      <View style={{width: '90%', height: 240}}>
        <DatePicker
          date={new Date(new Date().setHours(hours, minutes, 0, 0))}
          mode="time"
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
        <View style={styles.buttonWrapper}>
          <Button onPress={onClose} style={styles.btnStyle}>
            <Text style={styles.btnTextErr}>CANCEL</Text>
          </Button>
          <Button onPress={onHandleOk} style={styles.btnStyle}>
            <Text style={styles.btnText}>OK</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
