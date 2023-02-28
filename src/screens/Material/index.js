import {FlatList, ScrollView, Text} from 'native-base';
import React, {useState} from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import CustomButton from '../../components/Button';
import ProgressSlider from '../../components/ProgressSlider';
import {API} from '../../requests';
import POPUP_CONSTANTS from '../../enums/popup';

import errorIcon from '../../assets/images/naColor/image.png';

import styles from './styles';
import Popup from '../../components/Popup';
import StandardPopup from '../../components/Common/StandardPopup';
import colors from '../../constants/colors';
import strings from '../../globalization';

const Material = props => {
  const {project} = props;
  const {BOMList} = project || {};
  // const materialLeft = 'Let’s check quantity of material left';
  // const materialUsedLabel = 'Here is the list of material used';
  const sliderValue = '23 Ltr';
  // const leftOver = 'Leftover';
  const [popup, setPopup] = useState(undefined);
  const [putty, setPutty] = useState(0);
  const [paint, setPaint] = useState(0);

  const {
    material = [
      {
        name: 'Putty',
        totalQuantity: '10 kg',
        brand: 'Asain Paints',
      },
      {
        name: 'Paint',
        totalQuantity: '10 ltr',
        brand: 'Asain Paints',
      },
    ],
    materialUsed = {
      painting: [
        {
          name: 'Shine',
          cost: '8872',
          quantity: '22 Ltr',
        },
        {
          name: 'Royal paint',
          cost: '8872',
          quantity: '22 Ltr',
        },
      ],
      accessories: [
        {
          name: 'Paint Roller',
          value: '7 pcs',
        },
        {
          name: 'Paint Brush',
          value: '2 pcs',
        },
        {
          name: 'Ladder',
          value: '2 pcs',
        },
        {
          name: 'Paint Spray Machine',
          value: '2 pcs',
        },
      ],
    },
  } = props;

  const showSpinner = () => {
    setPopup({type: POPUP_CONSTANTS.SPINNER_POPUP});
  };

  const closePopup = () => {
    setPopup(undefined);
  };

  const updateLeftOverMaterial = () => {
    const request = {
      putty,
      paint,
    };
    showSpinner();
    API.updateLeftMaterial(request)
      .then(res => {
        console.info('res', res);
        setPopup(undefined);
      })
      .catch(error => {
        setPopup({
          type: POPUP_CONSTANTS.ERROR_POPUP,
          heading: 'Network Error',
          message: error.message,
          headingImage: errorIcon,
          buttons: [
            {
              title: 'TryAgain',
              onPress: () => closePopup(),
            },
          ],
        });
      });
  };
  const onValueChange = (MaterialName, value) => {
    if (MaterialName === 'Putty') {
      setPutty(value);
    } else {
      setPaint(value);
    }
  };
  const MaterialCard = ({item} = props) => {
    const {
      MaterialName,
      MaterialQuantity,
      LeftoverQuantity,
      CompanyName,
      MaterialCategory,
    } = item;
    const value = MaterialName === 'Putty' ? putty : paint;
    return (
      <View style={styles.materialCard}>
        <View style={styles.headerView}>
          <Text style={styles.name}>{MaterialName}</Text>
          <Text>{CompanyName}</Text>
        </View>
        <Text style={styles.totalQuantityLabel}>
          {strings.totalQuantity}
          <Text style={styles.totalQuantity}> {MaterialQuantity}</Text>
        </Text>
        <View style={styles.leftOverWrapper}>
          <Text style={styles.leftOverLabel}>{strings.leftOver}</Text>
          <View style={styles.leftOverView}>
            <Text style={styles.leftOverValue}>{LeftoverQuantity}</Text>
          </View>
        </View>
        <ProgressSlider
          value={LeftoverQuantity}
          onValueChange={sliderValue =>
            onValueChange(MaterialName, sliderValue)
          }
        />
      </View>
    );
  };

  const MaterialUsedCard = ({item, index} = props) => {
    const {MaterialName, MaterialCode, MaterialPurchaseUOM, MaterialQuantity} =
      item;
    return (
      <View
        style={
          index % 2 === 0
            ? styles.materialUsedCardEven
            : styles.materialUsedCard
        }>
        <View style={styles.usedRow}>
          <View>
            <Text style={styles.label}>{MaterialName}</Text>
          </View>
          <View style={styles.rightInfo}>
            <Text style={styles.cost}>{MaterialCode}</Text>
            <Text style={styles.label}>
              {MaterialQuantity} {MaterialPurchaseUOM}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const getPopupContent = () => {
    if (!popup) {
      return null;
    }
    switch (popup.type) {
      case POPUP_CONSTANTS.SPINNER_POPUP:
        return (
          <ActivityIndicator size="large" color={colors.primary} animating />
        );
      case POPUP_CONSTANTS.ERROR_POPUP:
        return <StandardPopup {...popup} />;
    }
  };

  return (
    <View style={styles.container}>
      <Popup visible={!!popup}>{getPopupContent()}</Popup>
      <ScrollView>
        <View style={styles.materialLeftView}>
          <Text style={styles.materialLabel}>{strings.materialLeft}</Text>
          {BOMList.map(item => (
            <MaterialCard item={item} />
          ))}
          <CustomButton
            title={strings.saveLabel}
            textStyle={[styles.btnTxt]}
            style={[styles.button]}
            onPress={updateLeftOverMaterial}
          />
        </View>
        <View style={styles.materialusedView}>
          {BOMList?.MaterialCategory == 'Material' ? (
            <>
              <Text style={styles.materialLabel2}>
                {strings.materialUsedLabel}
              </Text>
              <Text style={styles.heading}>{strings.paintingMaterial}</Text>
              <View style={styles.cardView}>
                {BOMList.map((item, index) => (
                  <MaterialUsedCard item={item} index={index} />
                ))}
              </View>
            </>
          ) : null}
          {BOMList?.MaterialCategory == 'Asset' ? (
            <>
              <Text style={styles.heading}>
                {strings.accessoriesEquipments}
              </Text>
              <View style={styles.cardView}>
                {BOMList.map((item, index) => (
                  <MaterialUsedCard item={item} index={index} />
                ))}
              </View>
            </>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default Material;
