import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY } from '../constants/them'
import { UploadSvg } from './svg'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
    responsiveFontSize as rf,
  } from '../common/responsiveFunction';
export default function UploadDataButton({title,onPress}) {
  return (
    <TouchableOpacity style={styles.container}
    activeOpacity={0.8}
    onPress={onPress}
    >
      <UploadSvg/>
      <Text style={styles.txt1}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.white,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderColor:COLORS.primary,
        borderWidth:1,
        borderRadius:wp('2%'),
        paddingVertical:hp('1.5%'),
        marginTop: hp('2.5%'),
        
    },
    txt1:{
        color:COLORS.black,
        fontSize:rf(2),
        fontFamily:FONTFAMILY.Medium,
        marginStart:wp('2%')
    }
})