import {StyleSheet, Text, TextInput, View,TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY} from '../constants/them';
import { FilterSearchIcon } from './svg';
export default function FilterSearchBar({onPress}) {
  return (
    <View>
    <View style={styles.container}>
      <Ionicons name="ios-search-outline" size={rf(2.5)} color={COLORS.Greyscale} />
      <TextInput style={styles.inputtxt} 
      placeholder='Search Locality,Projects,landmarks....'
      placeholderTextColor={COLORS.Greyscale}
      />
      <FilterSearchIcon />
    </View>
      <TouchableOpacity style={styles.moreContainer}
           activeOpacity={0.8}
           onPress={onPress}
           >
            <Text style={styles.moreTxt}>+ 3 More</Text>
            </TouchableOpacity>
            
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
   borderBottomWidth:0.5,
   borderColor:COLORS.Greyscale,
   marginTop:hp('1%'),
 
  },
  inputtxt: {
    flex: 1,
    color:COLORS.primary
  },
  txt1: {
    fontSize: rf(2),
    color: COLORS.black,
    fontFamily: FONTFAMILY.SemiBold,
    marginTop: hp('2%'),
  },
  moreTxt:{
    color:COLORS.primary,
    alignSelf:'flex-end',
    fontFamily:FONTFAMILY.Bold
  },
  moreContainer:{
    alignSelf:'flex-end',
    marginTop:hp('1%')
  }
});
