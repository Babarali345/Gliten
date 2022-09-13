import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RadioButtonRN from 'radio-buttons-react-native';
import {
    heightPercentageToDP as hp,
    responsiveFontSize as rf,
    widthPercentageToDP as wp,
  } from '../common/responsiveFunction';
import { COLORS, FONTFAMILY } from '../constants/them';
export default function RadioButton({data,boxwidth}) {
    // console.log(boxwidth);
  return (
    <RadioButtonRN
    data={data}
    selectedBtn={(e) => {
        // console.log('=====',e)
    }}
    style={{
      alignItems: 'center',
      flexDirection: 'row',
    }}
    boxStyle={{
      borderWidth:0,
      // backgroundColor: COLORS.transparent,
      width:boxwidth?wp(boxwidth): wp('25%'),
    //   marginStart:wp('1%')
    }}
    textStyle={{
      marginStart:wp('0.3%'),
      fontSize:rf(1.3),
      fontFamily:FONTFAMILY.SemiBold,
      color:COLORS.black
    }}
    activeColor={COLORS.primary}
    circleSize={rf(0.8)}
    animationTypes={['shake']}
  />
  )
}

const styles = StyleSheet.create({})


