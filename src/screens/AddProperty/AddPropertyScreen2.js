import {StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS, FONTFAMILY, SCREENS, STYLES} from '../../constants/them';
import EditText from '../../compnanat/EditText';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import DropDownModal from '../../compnanat/DropDownModal';
import RadioButton from '../../compnanat/RadioButton';
import Button from '../../compnanat/Button';
export default function AddPropertyScreen2({navigation}) {
  return (
    <ScrollView style={styles.container}
    contentContainerStyle={{
      paddingBottom:hp('5%')
    }}
    >
      <EditText placeholder={'Property Name'} />
      <EditText placeholder={'Land, floor, Building Area'} />
      <DropDownModal Data={Data} placeHolder='Select Year of Building'/>
      <Text style={styles.txt1}>I'm</Text>
      <RadioButton data={data} />
      <Text style={styles.txt1}>Post Your Property For</Text>
      <RadioButton data={data1} />
      <Text style={styles.txt1}>Type Of Property</Text>
      <RadioButton data={data2} />
      <EditText placeholder={'Description'} description style={{}}/>
  <Button title={'Next'}
  onPress={()=>{
    navigation.navigate(SCREENS.AddPropertyScreen3)
  }}
  style={{marginTop: hp('2%'),}}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: wp('3%'),
  },
  txt1: {
    marginStart: wp('2%'),
    color: COLORS.black,
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: rf(1.6),
    marginTop: hp('2%'),
  },
  itemContainer: {},
});
const data = [
  {
    label: 'Owner',
  },
  {
    label: 'Agent',
  },
  {
    label: 'Builder',
  },
  {
    label: 'Company',
  },
];
const data1 = [
  {
    label: 'Sell',
  },
  {
    label: 'Rent',
  },
];
const data2 = [
  {
    label: 'Apartment',
  },
  {
    label: 'Villa',
  },
];

const Data = [
  '2005',
  '2006',

  '2007',

  '2010',

  '2012',

  '2014',

  '2015',

  '2018',

  `2019`,

  '2020',

  '2021',

  '2022',
];
