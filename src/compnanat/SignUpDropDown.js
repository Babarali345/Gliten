import React, {memo, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Pressable,
} from 'react-native';
import {COLORS, CONSTANTS, FONTFAMILY, SCREENS} from '../constants/them';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {SignUp} from './svg';
import {useNavigation} from '@react-navigation/native';

function SignUpDropDown(props) {
  const vbanimationHeight = React.useRef(new Animated.Value(0)).current;
  const [VBcollapsed, setVBCollapsed] = React.useState(true);
  const navigation = useNavigation();
  const SignUpType = ({title, onPress}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.signUpTypeContainer}
        onPress={onPress}>
        <Text style={styles.txt3}>{title}</Text>
      </TouchableOpacity>
    );
  };
  React.useEffect(() => {
    if (VBcollapsed) {
      vBcollapseView();
    } else {
      vBexpandView();
    }
  }, [VBcollapsed]);

  const vBtoggleCollapsed = () => {
    setVBCollapsed(!VBcollapsed);
  };

  const vBcollapseView = () => {
    Animated.timing(vbanimationHeight, {
      duration: 500,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  const vBexpandView = () => {
    Animated.timing(vbanimationHeight, {
      duration: 700,
      toValue: 2200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View>
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
          styles.naveOptionContainer,
        ]}
        onPress={() => {
          vBtoggleCollapsed();
        }}>
        <SignUp />
        <Text style={[styles.txtnavTitle]}>Sign Up</Text>
        <Ionicons
          name={VBcollapsed ? 'ios-chevron-forward' : 'ios-chevron-down'}
          style={styles.icon}
        />
      </Pressable>
      <Animated.View
        style={{
          maxHeight: vbanimationHeight,
        }}>
        <SignUpType
          title={'User'}
          onPress={() => {
            navigation.navigate(SCREENS.SignUp,{
              from:CONSTANTS.User
            });
          }}
        />
        <SignUpType title={'Architect'} 
          onPress={() => {
            navigation.navigate(SCREENS.SignUpMore,{
              from:CONSTANTS.Architect
            });
          }}
        />
        <SignUpType title={'Sign Board'} 
          onPress={() => {
            navigation.navigate(SCREENS.SignUpMore,{
              from:CONSTANTS.Sign_Board
            });
          }}/>
        <SignUpType title={'Builder'} 
          onPress={() => {
            navigation.navigate(SCREENS.SignUpMore,{
              from:CONSTANTS.Builder
            });
          }}/>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  naveOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  icon: {
    fontSize: rf(2),
    color: COLORS.Greyscale,
    marginStart:wp('2%')
  },
  txtnavTitle: {
    color: COLORS.black,
    fontSize: rf(1.5),
    fontFamily: FONTFAMILY.SemiBold,
    alignSelf: 'center',
    marginStart: wp('2%'),
  },
  down: {
    fontSize: rf(2),
    color: COLORS.Greyscale,
  },
  txt2: {
    marginStart: wp('2%'),
    color: COLORS.Greyscale,
    fontFamily: FONTFAMILY.Medium,
    fontSize: rf(1.4),
  },
  txt3: {
    marginStart: wp('2%'),
    color: COLORS.Greyscale,
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: rf(1.6),
  },
  signUpTypeContainer: {
    marginTop: hp('1%'),
  },
});

export default memo(SignUpDropDown);
