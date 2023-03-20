import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import { View, FlatList } from 'native-base';
import styles from './styles';
import data from './data.json';
import { Dropdown } from 'react-native-element-dropdown';
import RNFetchBlob from 'rn-fetch-blob';

const crewData = [
  {
    label: 'January 2023',
    value: 'jan2023',
  },
  {
    label: 'February 2023',
    value: 'feb2023',
  },
  {
    label: 'March 2023',
    value: 'march2023',
  },
  {
    label: 'April 2023',
    value: 'april2023',
  },
  {
    label: 'May 2023',
    value: 'may2023',
  },
  {
    label: 'June 2023',
    value: 'june2023',
  },
  {
    label: 'July 2023',
    value: 'july2023',
  },
  {
    label: 'August 2023',
    value: 'august2023',
  },
  {
    label: 'September 2023',
    value: 'september2023',
  },
  {
    label: 'October 2023',
    value: 'october2023',
  },
  {
    label: 'November 2023',
    value: 'november2023',
  },
  {
    label: 'December 2023',
    value: 'December2023',
  },
];

class Benefits extends React.Component {
  renderItem = (item: any) => {
    const { value } = item;
    return (
      <View style={styles.renderItem}>
        <Text style={styles.renderName}>{value}</Text>
      </View>
    );
  };
  async downloadHistory() {
    const { config, fs } = RNFetchBlob;
    let DownloadDir = fs.dirs.DownloadDir;
    let date = new Date();
    const path =
      DownloadDir +
      '/Report_Download' +
      Math.floor(date.getTime() + date.getSeconds() / 2) +
      '.pdf';
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path,
        description: 'Report Download',
      },
    };
    config(options)
      .fetch('GET', 'https://www.clickdimensions.com/links/TestPDFfile.pdf')
      .then(res => {
        console.log('res -> ', JSON.stringify(res));
        alert('Report Downloaded Successfully.');
      });
  }

  downLoadSalary = () => {
    console.info('downLoadSalary...');
    if (Platform.OS === 'ios') {
      this.downloadHistory();
    } else {
      try {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'storage title',
            message: 'storage_permission',
          },
        ).then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //Once user grant the permission start downloading
            console.log('Storage Permission Granted.');
            this.downloadHistory();
          } else {
            //If permission denied then show alert 'Storage Permission
            // Not Granted'
            Alert.alert('storage_permission');
          }
        });
      } catch (err) {
        //To handle permission related issue
        console.log('error', err);
      }
    }
  };

  render() {
    const { insurance } = data;
    const { insurer, policyNumber, membersCovered } = insurance;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.assetsContainer}>
          <Text style={styles.assetsText}>Capital Assets Allocated</Text>
          {data.assets.map((asset, index) => {
            const styleRow = index % 2 === 0 ? styles.odd : styles.even;
            return (
              <View style={styleRow}>
                <Text style={styles.asset}>{asset}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.insuranceContainer}>
          <Text style={styles.assetsText}>Insurance</Text>
          <View style={styles.odd}>
            <Text style={styles.key}>Insurer</Text>
            <Text style={styles.value}>{insurer}</Text>
          </View>
          <View style={styles.even}>
            <Text style={styles.key}>Policy Number</Text>
            <Text style={styles.value}>{policyNumber}</Text>
          </View>
          <View style={styles.odd}>
            <Text style={styles.asset}>Members Covered</Text>
            <Text style={styles.value}>{membersCovered}</Text>
          </View>
          <TouchableOpacity
            style={styles.downLoad}
            onPress={this.downLoadSalary}>
            <Text style={styles.downLoadText}>Download Health Card</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.SalarySlipContainer}>
          <Text style={styles.assetsText}>Salary slip</Text>
          <View style={styles.dropdownWrapper}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              labelField="label"
              valueField="value"
              data={crewData}
              value={''}
              placeholder="Select Month"
              onChange={item => {
                console.info('item...', item);
                // setCrew(item);
              }}
              maxHeight={250}
              renderItem={this.renderItem}
              selectedStyle={styles.selectedStyle}
            />
            <TouchableOpacity
              style={styles.downLoad}
              onPress={this.downLoadSalary}>
              <Text style={styles.downLoadText}>Download Salary Slip</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.claimsContainer}>
          <Text style={styles.assetsText}>Claims & Allowance</Text>
          {data.claims.map((claim, index) => {
            const styleRow = index % 2 === 0 ? styles.odd : styles.even;
            return (
              <View style={styleRow}>
                <Text style={styles.key}>{claim.key}</Text>
                <Text style={styles.value}>{claim.value}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

export default Benefits;
