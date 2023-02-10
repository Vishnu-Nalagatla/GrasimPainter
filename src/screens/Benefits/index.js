import React from 'react';
import {Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {View, FlatList} from 'native-base';
import styles from './styles';
import data from './data.json';

class Benefits extends React.Component {
  render() {
    const {insurance} = data;
    const {insurer, policyNumber, membersCovered} = insurance;
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
          <TouchableOpacity style={styles.downLoad}>
            <Text style={styles.downLoadText}>Download Health Card</Text>
          </TouchableOpacity>
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
