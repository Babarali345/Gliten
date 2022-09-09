import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {heightPercentageToDP as hp, responsiveFontSize as rf, widthPercentageToDP as wp} from '../common/responsiveFunction';
import { COLORS, FONTFAMILY } from '../constants/them';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default function Budget() {
  const [multiSliderValue, setMultiSliderValue] = React.useState([3, 7]);

  return (
    <View>
      <Text style={[styles.txt1, {marginTop: hp('2%')}]}>Budget</Text>
              <View style={styles.budgetContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.txt1}>₹31.1 </Text>
                  <Text
                    style={[styles.txt3, {color: COLORS.Greyscale, fontSize: rf(1.3)}]}>
                    lacs
                  </Text>
                </View>
                <Text
                  style={[
                    styles.txt3,
                    {marginHorizontal: wp('3%'), color: COLORS.Greyscale},
                  ]}>
                  to
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.txt1}>₹100+ </Text>
                  <Text
                    style={[styles.txt3, {color: COLORS.Greyscale, fontSize: rf(1.3)}]}>
                    Crores
                  </Text>
                </View>
              </View>
              <MultiSlider
                values={[multiSliderValue[0], multiSliderValue[1]]}
                // sliderLength={'100%'}
                onValuesChange={() => {}}
                selectedStyle={{
                  backgroundColor: COLORS.golden,
                }}
                markerStyle={{
                  backgroundColor: COLORS.golden,
                }}
                min={0}
                max={10}
                step={1}
                allowOverlap
                snapped
                sliderLength={wp(94)}
                // customLabel={CustomLabel}
              />
    </View>
  )
}

const styles = StyleSheet.create({
    budgetContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: hp('1%'),
      },
      txt1: {
        fontSize: rf(1.6),
        color: COLORS.black,
        fontFamily: FONTFAMILY.Bold,
      },
      txt3: {
        fontSize: rf(1.5),
        color: COLORS.black,
        fontFamily: FONTFAMILY.Medium,
      },
})