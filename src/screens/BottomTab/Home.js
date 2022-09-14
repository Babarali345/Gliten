import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import {COLORS, FONTFAMILY, IMAGES, SCREENS} from '../../constants/them';
import SearchBar from '../../compnanat/SearchBar';
import GetStartedList from '../../compnanat/GetStartedList';
import Recently_Added_Property from '../../compnanat/Recently_Added_Property';
import Buying_Home_List from '../../compnanat/Buying_Home_List';
import Top_Articals from '../../compnanat/Top_Articals';
import HandPicked_ResidentianalList from '../../compnanat/HandPicked_ResidentianalList';
export default function Home({navigation}) {
  return (
    <ScrollView
      style={styles.Container}
      contentContainerStyle={{paddingBottom: hp('5%')}}>
      <ImageBackground
        style={styles.image}
        source={IMAGES.BackImage}
        resizeMode="cover">
        <LinearGradient
          colors={['rgba(9,76,145,0.1)', 'rgba(9,76,145,1)']}
          style={styles.linearGradient}>
          <View style={styles.menueContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.openDrawer();
              }}>
              <Ionicons
                name="menu-sharp"
                color={COLORS.white}
                style={styles.menueIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.postProperty}
              onPress={() => {
                navigation.navigate(SCREENS.AddProperty1);
              }}>
              <Text
                style={[
                  styles.postPropert,
                  {
                    fontSize: rf(1.1),
                    alignSelf: 'flex-end',
                    position: 'absolute',
                    right:13,
                    top:0,
                    fontFamily:FONTFAMILY.Medium
                  },
                ]}>
                Free
              </Text>
              <Text style={styles.postPropert}>Post Property</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
          <SearchBar
            style={{
              marginHorizontal: wp('4%'),
              position: 'absolute',
              bottom: hp(-3),
              left:0,
              right:0

            }}
          />
      </ImageBackground>
      <GetStartedList />
      <Recently_Added_Property />
      <Buying_Home_List />
      <Top_Articals />
      <HandPicked_ResidentianalList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  image: {
    height: hp('30%'),
    backgroundColor:'red'

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
    fontSize: rf(3),
  },
  postPropert: {
    fontSize: rf(1.5),
    color: COLORS.white,
    fontFamily: FONTFAMILY.SemiBold,
  },
  txt: {
    color: COLORS.black,
    fontSize: rf(2.2),
    marginTop: hp('4%'),
    fontFamily: FONTFAMILY.Bold,
  },

  txt2: {
    color: COLORS.placeHolderColor,
    fontSize: rf(1.3),
    fontFamily: FONTFAMILY.Medium,
    marginVertical: hp('1%'),
  },

  txtSeeAll: {
    color: COLORS.primary,
  },
  postProperty: {
    backgroundColor: COLORS.golden,
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('0.8%'),
    borderRadius: wp('4%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
