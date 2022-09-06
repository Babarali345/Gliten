import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY} from '../constants/them';
import { MenueIcon } from './svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
export default function Header({title, style}) {
  return (
    <View style={[styles.container,style]}>
      <Pressable style={({pressed}) => [{opacity: pressed ? 0.8 : 1}]}>
        <MenueIcon/>
      </Pressable>
      <Text style={styles.txt}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  txt: {
    flex: 1,
    color: COLORS.black,
    fontSize: rf(1.8),
    marginTop: hp('0.5%'),
    fontFamily: FONTFAMILY.SemiBold,
    textAlign: 'center',
    marginRight:wp('2%')
  },
});
