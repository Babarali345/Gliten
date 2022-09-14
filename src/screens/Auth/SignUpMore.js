import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import React, {useState} from 'react';
  
  import {COLORS, FONTFAMILY, SCREENS} from '../../constants/them';
  import {
    heightPercentageToDP as hp,
    responsiveFontSize as rf,
    widthPercentageToDP as wp,
  } from '../../common/responsiveFunction';
  import EditText from '../../compnanat/EditText';
  import Button from '../../compnanat/Button';
  import Seperator from '../../compnanat/Seperator';
  import SocialButtons from '../../compnanat/SocialButtons';
  
  export default function SignUpMore({navigation, route}) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
  
    return (
      <ScrollView style={styles.container}
      contentContainerStyle={{
        paddingBottom:hp('5%')}}>
        <Text style={[styles.txt]}>Get Started As {route.params.from}!</Text>
  
        <Text style={[styles.txt1]}>Create an account to continue.</Text>
  
        <EditText placeholder={'Username'} />
        <EditText placeholder={'Email'} />
        <EditText placeholder={'Password'} password icon />
        <EditText placeholder={'Contact No'} keyBoardType="numeric" />
        <EditText placeholder={'Address'} />
        <EditText placeholder={'Location'} />
        <Button title="Sign up" style={{marginTop: hp('3%')}}
        onPress={()=>{
            navigation.navigate(SCREENS.MoreUserProfile)
        }}
        />
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
      </ScrollView>
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
      fontSize: rf(2.7),
      fontFamily: FONTFAMILY.Bold,
    },
    txt1: {
      color: COLORS.Greyscale,
      fontSize: rf(1.7),
      fontFamily: FONTFAMILY.Regular,
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
    marginTop:hp('2%')
    },
  });
  