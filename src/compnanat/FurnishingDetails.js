import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY } from '../constants/them'
import {heightPercentageToDP as hp,responsiveFontSize as rf, widthPercentageToDP as wp,} from '../common/responsiveFunction';

export default function FurnishingDetails(props) {
  return (
    <View style={styles.container}>
    <View style={styles.item}><Text style={styles.itemtxt}>{props.titleone}</Text></View>
    <View style={styles.item}><Text style={styles.itemtxt}>{props.titletwo}</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    flex:1,
flexDirection:'row',
flexWrap:'wrap',
alignItems:'flex-start',
},

item:{
paddingBottom:hp(1),
width:wp(44),
},
itemtxt:{
color:COLORS.Config,
fontFamily:FONTFAMILY.Medium,
fontSize:rf(1.7),
textAlign:'left',

}

})