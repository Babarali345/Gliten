import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
  import React, {useState} from 'react';
  
  import {COLORS, FONTFAMILY} from '../../constants/them';
  import {
    heightPercentageToDP as hp,
    responsiveFontSize as rf,
    widthPercentageToDP as wp,
  } from '../../common/responsiveFunction';
  
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import Seperator from '../../compnanat/Seperator';
  import SocialButtons from '../../compnanat/SocialButtons';
  import EditText from '../../compnanat/EditText';
  import Button from '../../compnanat/Button';
  export default function SignUp() {
    const [show, setShow] = useState(true);
    return (
      <SafeAreaView style={styles.container}>
        <Text style={[styles.txt]}>Lets sign you in </Text>
  
        <Text style={styles.txt2}>Welcome Back. You've been missed </Text>
        <EditText placeholder={'Email'} />
        <EditText placeholder={'Password'} icon password/>
  
        <TouchableOpacity
          activeOpacity={0.7}
          style={{alignSelf: 'flex-end', marginVertical: hp('2%')}}>
          <Text
            style={{
              fontWeight: '700',
              color: '#2972FF',
              marginTop: hp(0.5),
              marginBottom: hp(2),
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <Button title="Log In" />
        <Seperator />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <SocialButtons />
          <SocialButtons facebook />
        </View>
  
        <View style={styles.SignUpContainer}>
          <Text style={styles.txt1}>Don't have an account? </Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={[styles.txt1, {color: COLORS.primary}]}>Sign Up</Text>
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
      fontFamily: FONTFAMILY.Bold,
      fontSize: rf(2.3),
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
    SignUpContainer: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });
  