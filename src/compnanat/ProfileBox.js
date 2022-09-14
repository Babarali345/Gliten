import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    heightPercentageToDP as hp,
    responsiveFontSize as rf,
    widthPercentageToDP as wp,
  } from '../common/responsiveFunction';
import { COLORS, FONTFAMILY } from '../constants/them';
import Button from './Button';
export default function ProfileBox() {
  return (
    <View style={styles.container}>
     <Text style={styles.txt1}>Architects</Text>
     <View style={styles.detailContainer}>
     <Text style={styles.txt2}>Manoj Kumar</Text>
     <Text style={styles.txt3}>Mumbai,Malda</Text>
<Button title={'CONTACT NOW'}
style={{
    paddingHorizontal: wp('12%'),
    backgroundColor:COLORS.golden,
    height:hp('8%'),
    fontFamily:FONTFAMILY.Bold,
    fontSize:rf(1.5)

}}
/>

     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.veryLightPink,
        marginTop: hp('2%'),
        borderRadius:wp('2%'),
        paddingHorizontal:wp('3%'),
        paddingVertical:hp('2.5%')

    },
    txt1:{
        color:COLORS.charcoalGrey,
        fontFamily:FONTFAMILY.SemiBold,
        fontSize:rf(1.5)
    },
    txt2:{
        color:COLORS.black,
        fontFamily:FONTFAMILY.SemiBold,
        fontSize:rf(2)
    },
    txt3:{
        color:COLORS.Greyscale,
        fontFamily:FONTFAMILY.SemiBold,
        fontSize:rf(1.6),
        marginVertical:hp('1%')
    },
    detailContainer:{
        alignItems:'center'
    }
})