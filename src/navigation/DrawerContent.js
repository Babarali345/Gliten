import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY, SCREENS} from '../constants/them';
import Login, {
  AboutUs,
  DrawerContentHomeIcon,
  EditProfileIcon,
  PrivacyPolicy,
  ProfilTickIcon,
  SignUp,
} from '../compnanat/svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SignUpDropDown from '../compnanat/SignUpDropDown';

export default function DrawerContent({navigation}) {
  const Svg = title => {
    switch (title) {
      case 'Home':
        return <DrawerContentHomeIcon />;
      case 'About Us':
        return <AboutUs />;
      case 'Pricy Policy':
        return <PrivacyPolicy />;
      case 'Login':
        return <Login />;
      case 'Sign Up':
        return <SignUp />;
    }
  };
  const NavOption = ({title, onPress, iconPress}) => {
    return (
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
          styles.naveOptionContainer,
        ]}
        onPress={onPress}>
        {Svg(title)}
        <Text style={[styles.txtnavTitle]}>{title}</Text>
      </Pressable>
    );
  };
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vGNp0RJxy8o1b_KKaehr6kXf8zxQZugdQg&usqp=CAU',
          }}
        />
        <Pressable
          style={({pressed}) => [
            {
              opacity: pressed ? 0.8 : 1,
            },
            styles.editIconContainer,
          ]}
          onPress={() => {
            navigation.navigate(SCREENS.Profile);
          }}>
          <EditProfileIcon />
        </Pressable>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.txtTitle}>William Corner</Text>

        <ProfilTickIcon />
      </View>
      <Text style={styles.txt2}>Solo, Indonesia</Text>
      <View style={styles.ScreenContainer}>
        <NavOption
          title="Home"
          onPress={() => {
            navigation.navigate(SCREENS.Home);
          }}
        />
        <NavOption title="About Us" />
        <NavOption title="Pricy Policy" />
        <Text style={styles.txtAccount}>Account</Text>
        <NavOption
          title="Login"
          onPress={() => {
            navigation.navigate(SCREENS.SignIn);
          }}
        />
       <SignUpDropDown/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: wp('20%'),
    width: wp('20%'),
    borderRadius: wp('20%'),
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 2,
    right: 5,
  },
  imageContainer: {
    alignSelf: 'center',
    marginTop: hp('5%'),
  },
  txtTitle: {
    color: COLORS.black,
    fontSize: rf(2),
    fontFamily: FONTFAMILY.Bold,
    alignSelf: 'center',
    marginRight: wp('1%'),
  },
  txtnavTitle: {
    color: COLORS.black,
    fontSize: rf(1.5),
    fontFamily: FONTFAMILY.SemiBold,
    alignSelf: 'center',
    marginStart: wp('2%'),
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt2: {
    color: COLORS.placeHolderColor,
    fontSize: rf(1.5),
    fontFamily: FONTFAMILY.Medium,
    textAlign: 'center',
  },
  naveOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  ScreenContainer: {
    paddingLeft: wp('2%'),
  },
  txtAccount: {
    color: COLORS.placeHolderColor,
    fontSize: rf(1.7),
    fontFamily: FONTFAMILY.SemiBold,
    marginTop: hp('1%'),
  },
  icon: {
    fontSize: rf(2.3),
    color: COLORS.Greyscale,
  },
});
