import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTFAMILY, SCREENS, STYLES} from '../constants/them';
import {
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../common/responsiveFunction';
import { useNavigation } from '@react-navigation/native';

export default function SearchBar({style}) {
  const navigation=useNavigation()
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
        navigation.navigate(SCREENS.FilterTabs)
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
    height:hp('7%')
  },
  inputtxt: {
    flex: 1,
    fontFamily: FONTFAMILY.Regular,
  },
  icon: {
    fontSize: rf(3),
  },
});
