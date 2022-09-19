import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY } from '../constants/them'
import {heightPercentageToDP as hp,responsiveFontSize as rf, widthPercentageToDP as wp,} from '../common/responsiveFunction';

export default function PropertyDetail(props) {
  return (
    <View style={styles.DetailView}>
    <View style={styles.DetailProperty}><Text style={{fontFamily:FONTFAMILY.SemiBold,color:COLORS.Config,fontSize:rf(1.5)}}>{props.title}<Text style={{color:COLORS.black, fontFamily:FONTFAMILY.Medium}}>{props.desc}</Text></Text>
    </View>
    <View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
DetailView:{
paddingVertical:hp(0.5)

},

DetailProperty:{

}


})