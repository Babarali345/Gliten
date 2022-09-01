import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from '../common/responsiveFunction';
import {COLORS} from '../constants/them';

export default function EditText({style, placeholder}) {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.placeHolderColor}
        style={styles.txtInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius:wp('2%'),
    paddingHorizontal:wp('2%')
  },
  txtInput: {
    color: COLORS.black,
    height: hp('8%'),
  },
});
