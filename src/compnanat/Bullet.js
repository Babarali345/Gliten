import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, responsiveFontSize as rf, widthPercentageToDP as wp} from '../common/responsiveFunction'
import {COLORS, FONTFAMILY, IMAGES, width} from '../constants/them';
import {AreaSVG ,InfoSVG,ConfigSVG,PriceSVG,LocationSVG,AgeSVG,FloorSVG}from '../assets/Images/svg'


export default function Bullet(props) {

  function switchSvg () {

    switch (props.title) {
    case "Area":
      return  <AreaSVG/>
      
      case "Configuration":
        return  <ConfigSVG/>;

        case "Price":
          return  <PriceSVG/>;

          case "Address":
          return  <LocationSVG/>;
  
          case "Total Floors":
            return  <FloorSVG/>;
            case "Property Age":
              return  <AgeSVG/>;
            
    }
  }

  return (
<View style={styles.bulletView}>
<View style={styles.bullet}>
{switchSvg()}
<Text style={styles.bulletHeading}>{props.title}</Text>
</View>
<View>
  <Text style={styles.bulletContent}>
  {props.content}</Text>
  <Text style={styles.bulletDesc}>
  {props.desc}
    </Text>

</View>
</View>
     

  )
}



const styles = StyleSheet.create({
 
  bulletView:{
    paddingVertical:hp(1),
  },
  bullet:{
    flexDirection:'row',
    alignItems:'center',
    
  },
  bulletHeading:{
    paddingHorizontal:wp(2),
    color:COLORS.Config,
    fontFamily:FONTFAMILY.Medium,
    fontSize:rf(1.4),
  },
  bulletContent:{
    paddingTop:4,
    color:COLORS.black,
    fontFamily:FONTFAMILY.Medium,
    fontSize:rf(2),
  },
  bulletDesc:{
color:COLORS.Config,
    fontFamily:FONTFAMILY.Medium,
    fontSize:rf(1.2),
  }
});