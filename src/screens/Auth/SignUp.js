import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {COLORS, IMAGES} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import EditText from '../../compnanat/EditText';
import Button from '../../compnanat/Button';

export default function SignUp() {
  return (
    <ScrollView style={styles.container}
    contentContainerStyle={{paddingBottom:hp('5%')}}
    showsVerticalScrollIndicator={false}
    >
      <Text style={styles.txt}>Get Started As Sign Board!</Text>
      <Text style={styles.txt2}>Create an account to continue.</Text>
      <EditText style={{marginTop: hp('2%')}} placeholder={'Username'} />
      <EditText style={{marginTop: hp('2%')}} placeholder={'Email'} />
      <EditText style={{marginTop: hp('2%')}} placeholder={'Contact No'} />
      <EditText style={{marginTop: hp('2%')}} placeholder={'Address'} />
      <EditText style={{marginTop: hp('2%')}} placeholder={'Location'} />
      <View style={styles.checkBoxContainer}>
        <View style={styles.checkBox} />
        <Text style={styles.checktxt1}>
          By creating an account, you agree to our{' '}
          <Text style={styles.chexboxtxt2}>Terms and Condition</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title={'Sign Up'}/>
      </View>
      <Text style={styles.or}>OR</Text>
      <View style={styles.imageContainer}>
        <Image source={IMAGES.googleLogo} style={styles.g_logo} resizeMode={'contain'} />
        <Image source={IMAGES.facebook_logo} style={styles.g_logo} resizeMode={'contain'}/>
      </View>
      <Text style={styles.alreadyLogintxt}>
      Already have an account?{' '}
          <Text style={styles.chexboxtxt2}>Log In</Text>
        </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: wp('3%'),
    backgroundColor:COLORS.white
  },
  txt: {
    color: COLORS.black,
    fontSize: rf(2.5),
    marginTop: hp('1%'),
  },
  txt2: {
    color: COLORS.brownGrey,
    fontSize: rf(1.5),
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  checkBox: {
    height: wp('5%'),
    width: wp('5%'),
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginTop: hp('1%'),
    borderRadius: wp('1%'),
  },
  checktxt1: {
    color: COLORS.placeHolderColor,
    fontSize: rf(1.5),
    width: wp('90%'),
    marginStart: wp('2%'),
    alignSelf:'center',
  },
  alreadyLogintxt: {
    color: COLORS.placeHolderColor,
    fontSize: rf(1.5),
    alignSelf:'center',
  marginTop:hp('2%')
  },
  chexboxtxt2: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: hp('5%'),
  },
  or: {
    fontSize: rf(2),
    alignSelf: 'center',
    fontWeight: '500',
    marginVertical: hp('2%'),
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:wp('15%')
  },
  g_logo: {
    height: wp('7%'),
    width: wp('7%'),
  },
});
