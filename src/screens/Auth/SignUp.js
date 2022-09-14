import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {COLORS, FONTFAMILY} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import EditText from '../../compnanat/EditText';
import Button from '../../compnanat/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Seperator from '../../compnanat/Seperator';
import SocialButtons from '../../compnanat/SocialButtons';

export default function SignUp() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.txt]}>Get Started</Text>

      <Text style={[styles.txt1]}>Create an account to continue.</Text>

      <EditText placeholder={'Username'} />
      <EditText placeholder={'Email'} />
      <EditText placeholder={'Password'} password icon />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: hp(1),
        }}></View>

      <Button title="Sign up" style={{marginTop: hp('2%'),}}/>

      <Seperator />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <SocialButtons google />
        <SocialButtons facebook />
      </View>

      <View style={styles.alreadyAccountContainer}>
        <Text style={styles.txt2}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={{color: '#2972FF', fontWeight: '700'}}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: wp('3%'),
  },
  txt: {
    color: COLORS.black,
    fontSize: rf(2),
    fontFamily: FONTFAMILY.Bold,
  },
  txt1: {
    color: COLORS.Greyscale,
    fontSize: rf(1.8),
    fontFamily: FONTFAMILY.Medium,
  },
  txt2: {
    color: COLORS.Greyscale,
    fontSize: rf(1.5),
    fontFamily: FONTFAMILY.Medium,
  },
  alreadyAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    flex:1,
  },
});
