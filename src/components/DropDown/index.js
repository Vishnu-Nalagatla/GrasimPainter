/**
 * @flow
 */

import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
  Image,
} from 'react-native';
import dropUpIcon from '../../assets/images/calendar/image.png';
import dropDownIcon from '../../assets/images/calendar/image.png';
import styles from './styles';

export interface Props {
  items: Array;
  placeholder: string;
  containerStyle: Object;
  style: Object;
  itemStyle: Object;
  onChangeItem: Function;
  zIndex: Number;
}

const renderItem = (item: any) => {
  const { title, names } = item.value;
  return (
    <View style={styles.item}>
      <Text style={styles.crewTitle}>{title}</Text>
      <Text style={styles.crewNames}>{names}</Text>
    </View>
  );
};

class DropDown extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    let choice;
    if (props.defaultValue) {
      choice = props.items.find(item => item.value === props.defaultValue);
    } else {
      choice = this.null();
    }
    this.state = {
      choice: {
        label: choice.label,
        value: choice.value,
      },
      isVisible: false,
    };
  }

  null() {
    return {
      label: null,
      value: null,
    };
  }

  toggle() {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  select(item, index) {
    this.setState({
      choice: {
        label: item.label,
        value: item.value,
      },
      isVisible: false,
    });
    this.props.onChangeItem(item, index);
  }

  getLayout(layout) {
    this.setState({
      top: layout.height - 1,
    });
  }
  user = {
    label: 'Crew 4',
    value: {
      title: 'Crew4',
      status: 4,
      names: 'Rajesh4, Mahesh, Manohar, Javed',
    }
  }

  render() {
    const { placeholder, items } = this.props;
    const isPlaceholderActive = this.state.choice.label === null;
    const label = isPlaceholderActive ? placeholder : this.state.choice.label;
    return (
      <View
        style={[
          this.props.containerStyle,
          {
            ...(Platform.OS !== 'android' && {
              zIndex: this.props.zIndex,
            }),
          },
        ]}>
        <TouchableOpacity
          onLayout={event => this.getLayout(event.nativeEvent.layout)}
          onPress={() => this.toggle()}
          activeOpacity={1}
          style={[
            styles.dropDown,
            this.props.style,
            this.state.isVisible && styles.noBottomRadius,
          ]}>
          <View style={[styles.dropDownDisplay]}>
            <Text style={[this.props.labelStyle]}>{renderItem(this.user)}</Text>
          </View>
          {
            <View style={[styles.arrow]}>
              {!this.state.isVisible ? (
                <Image source={dropDownIcon} resizeMode="contain" />
              ) : (
                <Image source={dropUpIcon} resizeMode="contain" />
              )}
            </View>
          }
        </TouchableOpacity>
        <View
          style={[
            styles.dropDown,
            styles.dropDownBox,
            this.props.dropDownStyle,
            !this.state.isVisible && styles.hidden,
            { top: this.state.top, zIndex: this.props.zIndex },
          ]}>
          <ScrollView
            style={styles.dropDownScrollView}
            nestedScrollEnabled={true}>
            {items.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => this.select(item, index)}
                style={[
                  styles.dropDownItem,
                  this.props.itemStyle,
                  this.state.choice.value === item.value &&
                  this.props.activeItemStyle,
                ]}
                disabled={item?.disabled || false === true}>
                <View style={styles.dropdownLabel}>
                  <Text
                    style={[
                      this.props.labelStyle,
                      this.state.choice.value === item.value &&
                      this.props.activeLabelStyle,
                    ]}>
                    {renderItem(item)}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default DropDown;
