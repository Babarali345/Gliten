import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../common/responsiveFunction';
import {COLORS} from '../constants/them';

export default function EditText({style, placeholder}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={[
        styles.container,
        style,
        {borderColor: isFocused ? COLORS.primary : COLORS.Greyscale},
      ]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.Greyscale}
        style={[styles.txtInput]}
        keyboardAppearance="light"
        showSoftInputOnFocus
        onFocus={()=>{
          setIsFocused(true)
        }}
        onBlur={()=>{
          setIsFocused(false) 
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: wp('2%'),
    paddingHorizontal: wp('2%'),
    marginTop: hp('2%'),
  },
  txtInput: {
    color: COLORS.black,
    // height: hp('8%'),
    // backgroundColor:'red'
  },
});
