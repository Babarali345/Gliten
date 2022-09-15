import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, responsiveFontSize as rf, widthPercentageToDP as wp} from '../common/responsiveFunction'
import {COLORS, FONTFAMILY, IMAGES, width} from '../constants/them';

export default function OwnerName(props) {
  return (
    <View>
      <Text style={{fontFamily:FONTFAMILY.SemiBold,fontSize:rf(1.7),color:COLORS.black}}>{props.name}</Text>
      <Text style={{fontFamily:FONTFAMILY.Medium,fontSize:rf(1.4),color:COLORS.Config,paddingBottom:hp(2)}}>{props.who}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})