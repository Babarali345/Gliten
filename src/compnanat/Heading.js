import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, responsiveFontSize as rf, widthPercentageToDP as wp} from '../common/responsiveFunction'
import {COLORS, FONTFAMILY, IMAGES, width} from '../constants/them';


export default function Heading(props) {


  return (
<View style={styles.bulletView}>
<View style={styles.bullet}>
<Text style={styles.bulletHeading}>{props.title}</Text>
</View>
</View>
     

  )
}



const styles = StyleSheet.create({
 
  bulletView:{
  },
  bullet:{
    flexDirection:'row',
    alignItems:'center',
    
  },
  bulletHeading:{
    color:COLORS.black,
    fontFamily:FONTFAMILY.Medium,
    fontSize:rf(2),
  },
  bulletContent:{
    color:COLORS.Config,
    fontFamily:FONTFAMILY.Medium,
    fontSize:rf(1.9),
    paddingTop:hp(0.5)
  },
  bulletDesc:{
color:COLORS.Config,
    fontFamily:FONTFAMILY.Medium,
    fontSize:rf(1.2),
  }
});