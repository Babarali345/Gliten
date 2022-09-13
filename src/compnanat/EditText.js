import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {COLORS} from '../constants/them';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function EditText({
  style,
  placeholder,
  disable,
  icon,
  password,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View
      style={[
        styles.container,
        style,
        {borderColor: isFocused || disable ? COLORS.primary : COLORS.Greyscale},
      ]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.Greyscale}
        style={[styles.txtInput]}
        keyboardAppearance="light"
        showSoftInputOnFocus
        secureTextEntry={password ? showPassword : false}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        editable={disable ? false : true}
      />
      {icon ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setShowPassword(!showPassword);
          }}>
          <Ionicons
            name={showPassword ? 'ios-eye-off-outline' : 'eye-outline'}
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: wp('2%'),
    paddingHorizontal: wp('2%'),
    marginTop: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtInput: {
    flex: 1,
    color: COLORS.black,
    // height: hp('8%'),
    // backgroundColor:'red'
  },
  icon: {
    fontSize: rf(2.5),
    color: COLORS.Greyscale,
  },
});
