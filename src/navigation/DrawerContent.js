import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import EditProfileIcon from '../compnanat/svg/EditProfile';
import {COLORS, FONTFAMILY} from '../constants/them';
import ProfilTickIcon from '../compnanat/svg/ProfilTickIcon';
import DrawerContentHomeIcon from '../compnanat/svg/DrawerContentHomeIcon';

export default function DrawerContent() {

    const NavOption=({title})=>{
        return(
            <View style={styles.naveOptionContainer}>
<DrawerContentHomeIcon/>
<Text style={[styles.txtnavTitle]}>{title}</Text>


            </View>
        )
    }
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
          ]}>
          <EditProfileIcon />
        </Pressable>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.txtTitle}>William Corner</Text>
      
        <ProfilTickIcon />
      </View>
      <Text style={styles.txt2}>
      Solo, Indonesia
        </Text>
      <View style={styles.ScreenContainer}>
<NavOption title='Home'/>
<NavOption title='About Us' />
<NavOption title='Pricy Policy'/>
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
    marginTop: hp('3%'),
  },
  txtTitle: {
    color: COLORS.black,
    fontSize: rf(2),
    fontFamily: FONTFAMILY.Bold,
    alignSelf: 'center',
    marginRight:wp('1%')
  },
  txtnavTitle: {
    color: COLORS.black,
    fontSize: rf(2),
    fontFamily: FONTFAMILY.Bold,
    alignSelf: 'center',
    marginStart:wp('2%'),
    
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
    textAlign:'center'
  },
  naveOptionContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:hp('1.5%')
  }
});
