import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import {COLORS, FONTFAMILY, IMAGES} from '../../constants/them';
export default function Home() {
  return (
    <View style={styles.Container}>
      <ImageBackground
        style={styles.image}
        source={IMAGES.BackImage}
        resizeMode="cover">
        <LinearGradient
          colors={['rgba(9,76,145,0.1)', 'rgba(9,76,145,1)']}
          style={styles.linearGradient}>
          <View style={styles.menueContainer}>
            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons
                name="menu-sharp"
                color={COLORS.white}
                style={styles.menueIcon}
              />
            </TouchableOpacity>
            <Text style={styles.postPropert}>Post Property</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  image: {
    height: hp('30%'),
  },
  linearGradient: {
    height: '100%',
    width: '100%',
  },
  menueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp('3%'),
  },
  menueIcon: {
    fontSize: rf(2),
  },
  postPropert: {
    fontSize: rf(1.5),
    color: COLORS.white,
    fontFamily: FONTFAMILY.SemiBold,
  },
});
