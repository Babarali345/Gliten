import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {COLORS} from '../../constants/them';
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
      <Text
        style={[
          styles.txt,
          {fontWeight: '700', fontSize: rf(3), paddingBottom: 10},
        ]}>
        Get Started
      </Text>

      <Text style={[styles.txt, {fontSize: rf(2), paddingBottom: 20}]}>
        Create an account to continue.
      </Text>

      <EditText placeholder={'Username'} />
      <EditText placeholder={'Email'} />
      <EditText placeholder={'Password'} secureTextEntry={true} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: hp(1),
          marginBottom: hp(2),
        }}>
        <Icon
          name={
            toggleCheckBox
              ? 'checkbox-marked-circle'
              : 'checkbox-blank-circle-outline'
          }
          size={23}
          color="#7AA8FF"
          onPress={() => {
            setToggleCheckBox(!toggleCheckBox);
          }}
        />
        <Text style={{lineHeight: rf(2.5), paddingHorizontal: hp(0.5)}}>
          <Text style={{fontSize: rf(1.7)}}>
            By creating an account, you agree to our
          </Text>{' '}
          <Text
            style={{color: '#2972FF', fontWeight: '700', fontSize: rf(1.7)}}>
            Terms and Condition
          </Text>{' '}
        </Text>
      </View>

      <View style={{marginBottom: hp(2)}}>
        <Button title="Sign up" />
      </View>
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
      <Text style={{alignSelf: 'center', paddingVertical: hp(3)}}>
        <Text>Already have an account? </Text>
        <Text style={{color: '#2972FF', fontWeight: '700'}}>Log In</Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:COLORS.white,
    paddingTop: hp(2),
    paddingHorizontal:wp('3%')
  },
  txt: {
    color: COLORS.black,
  },
});
