import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {heightPercentageToDP as hp, responsiveFontSize as rf, widthPercentageToDP as wp} from '../common/responsiveFunction';
import {COLORS} from '../constants/them';
import { useNavigation } from '@react-navigation/native';
export default function BackArrow() {
  const navigation=useNavigation()
  return (
    <TouchableOpacity style={styles.container}
    onPress={()=>{
      navigation.goBack()
    }}
    >
      <AntDesign name="left" color={COLORS.black} style={styles.backArrow} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backArrow: {
    fontSize: rf(2),
  },
  container:{
    // marginTop:hp('3%')
  }
});
