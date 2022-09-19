import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, responsiveFontSize as rf, widthPercentageToDP as wp} from '../common/responsiveFunction'
import { COLORS } from '../constants/them'


export default function SeperatorEmpty(props) {
  return (

<View style={{flexDirection: 'row', alignItems: 'center', paddingBottom:12,paddingTop:12}}>
 <View style={{flex: 1, height: hp(0.1), backgroundColor: COLORS.seperator}} />  
  <View style={{flex: 1, height: hp(0.1), backgroundColor: COLORS.seperator}} />
</View>
     

  )
}

const styles = StyleSheet.create({


 }

)