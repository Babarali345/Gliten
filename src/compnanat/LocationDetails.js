import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY } from '../constants/them'
import {heightPercentageToDP as hp,responsiveFontSize as rf, widthPercentageToDP as wp,} from '../common/responsiveFunction';

export default function PropertyDetail(props) {
  return (
    <View style={styles.DetailView}>
    <View style={styles.DetailProperty}><Text style={{fontFamily:FONTFAMILY.Bold,color:COLORS.black,fontSize:rf(2.3)}}>{props.distance}<Text style={{color:COLORS.Config, fontFamily:FONTFAMILY.Medium,fontSize:rf(1.5)}}>{props.building}</Text></Text>
    <Text style={{color:COLORS.Config, fontFamily:FONTFAMILY.Medium,fontSize:rf(1.5),paddingTop:hp(0.1),paddingBottom:hp(1)}}>{props.nearby}</Text>
    </View>
    <View>
     
    
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
DetailView:{
paddingVertical:hp(0.1)

},

DetailProperty:{

}


})