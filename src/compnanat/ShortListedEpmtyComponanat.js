import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ListEmptySvg} from './svg';
import {COLORS, FONTFAMILY, IMAGES} from '../constants/them';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import Button from './Button';
export default function ShortListEmptyComponanat() {
  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <Image source={IMAGES.award} style={styles.image} />
        <Text style={styles.txt1}>You Haven’t Shortlisted any Properties</Text>
        <Text style={styles.txt2}>
        Your search history will appear here. its seems you have not yet Started your Search on our portal
        </Text>
      </View>

      <Button title={'Search Now'} style={{marginTop: hp('5%')}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  svgContainer: {
    alignItems: 'center',
    marginTop: hp('3%'),
  },
  image:{
    height:hp('28%'),
    width:wp('45%')
  },
  txt1: {
    color: COLORS.black,
    fontSize: rf(2),
    fontFamily: FONTFAMILY.SemiBold,
    marginTop: hp('2%'),
  },
  txt2: {
    color: COLORS.Greyscale,
    fontSize: rf(1.5),
    marginTop: hp('1%'),
    fontFamily: FONTFAMILY.SemiBold,
    // width: wp('50%'),
  },
  buttonContainer: {},
});
