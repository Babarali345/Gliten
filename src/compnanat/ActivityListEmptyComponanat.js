import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ListEmptySvg} from './svg';
import {COLORS, FONTFAMILY} from '../constants/them';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import Button from './Button';
export default function ActivityListEmptyComponanat() {
  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <ListEmptySvg />
        <Text style={styles.txt1}>No Searches to show</Text>
        <Text style={styles.txt2}>
          Your search history will appear here. its seems you have not yet
          Started your Search on our portal
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
