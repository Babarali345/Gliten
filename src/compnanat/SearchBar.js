import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTFAMILY, STYLES} from '../constants/them';
import {
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../common/responsiveFunction';

export default function SearchBar({style}) {
  return (
    <Pressable
      style={({pressed}) => [
        {
          opacity: pressed ? 0.8 : 1,
        },
        styles.container,
        style,
        STYLES.shadow,
      ]}
      onPress={()=>{
        
      }}
      >
      <TextInput
        placeholder="Search cities,localities,projects etc."
        placeholderTextColor={COLORS.placeHolderColor}
        style={styles.inputtxt}
        editable={false}
      />
      <Ionicons
        name="ios-search-outline"
        color={COLORS.Greyscale}
        style={styles.icon}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.halfpwhite,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp('4%'),
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('0.5%'),
  },
  inputtxt: {
    flex: 1,
    fontFamily: FONTFAMILY.Regular,
  },
  icon: {
    fontSize: rf(3),
  },
});
