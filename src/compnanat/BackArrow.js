import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {heightPercentageToDP as hp, responsiveFontSize as rf, widthPercentageToDP as wp} from '../common/responsiveFunction';
import {COLORS} from '../constants/them';
export default function BackArrow() {
  return (
    <View style={styles.container}>
      <AntDesign name="left" color={COLORS.black} style={styles.backArrow} />
    </View>
  );
}

const styles = StyleSheet.create({
  backArrow: {
    fontSize: rf(2),
  },
  container:{
    marginTop:hp('3%')
  }
});
