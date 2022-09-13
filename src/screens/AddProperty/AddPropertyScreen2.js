import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS, FONTFAMILY, STYLES} from '../../constants/them';
import EditText from '../../compnanat/EditText';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import DropDownModal from '../../compnanat/DropDownModal';
export default function AddPropertyScreen2() {
  const rendorItem = () => {
    return (
      <View>
        <View
          style={{
            height: wp('3%'),
            width: wp('3%'),
            borderRadius: wp('3%'),
            borderColor: COLORS.primary,
            borderWidth: 1,
          }}
        />
        <Text style={styles.txt1}>I'm</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <EditText placeholder={'Property Name'} />
      <EditText placeholder={'Land, floor, Building Area'} />
      <DropDownModal Data={Data} />
      <Text style={styles.txt1}>I'm</Text>
      <FlatList data={[1, 3, 3, 4]} renderItem={rendorItem} horizontal />
    </View>
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
    fontSize: rf(2),
    marginTop: hp('2%'),
  },
});

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
