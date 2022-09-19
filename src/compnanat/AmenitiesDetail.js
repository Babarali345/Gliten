import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, responsiveFontSize as rf, widthPercentageToDP as wp} from '../common/responsiveFunction'
import {COLORS, FONTFAMILY, IMAGES, width} from '../constants/them';
import {MainTheatre,Service ,CarWash,Swim,BarBQ,Medical,Salon,Barbeque,Restaurant}from '../assets/Images/svg'


export default function AmenitiesDetail(props) {

  function switchSvg () {

    switch (props.title) {
    case "Main Theatre":
      return  <MainTheatre/>
      
      case "Concierge Service":
        return  <Service/>;

        case "Car wash area":
          return  <CarWash/>;

          case "Swimming Pool":
          return  <Swim/>;
  
          case "Total Floors":
            return  <FloorSVG/>;

            case "Property Age":
              return  <AgeSVG/>;

              case "Chill-Out Lounge":
                return  <BarBQ/>;

                case "Medical Center":
                  return  <Medical/>;

                  case "Salon":
                    return  <Salon/>;

                    case "Barbecue":
                      return  <Barbeque/>;

                      case "Restaurent":
                        return  <Restaurant/>;
  


            
    }
  }

  return (

          <View style={styles.container}>
          <View style={styles.item}>{switchSvg()}</View>
          <View style={styles.item}><Text style={styles.itemtxt}>{props.title}</Text></View>
          </View>
     

  )
}



const styles = StyleSheet.create({
 
  container:{
    paddingBottom:hp(2)
},

item:{
paddingBottom:hp(1),
alignItems:'center',
width:80,

},
itemtxt:{
color:COLORS.Config,
fontFamily:FONTFAMILY.Medium,
fontSize:rf(1.2),

}

});




