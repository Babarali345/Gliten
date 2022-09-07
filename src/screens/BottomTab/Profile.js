import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTFAMILY, IMAGES} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import EditText from '../../compnanat/EditText';
import EditButton from '../../compnanat/Button';

import {EditProfileIcon, ProfilTickIcon} from '../../compnanat/svg';
import ImageUploadModal from '../../compnanat/ImageUploadModal';

export default function Profile() {
  const [picture, setUpdatedPicture] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: hp('5%'),
      }}>
      <View style={{alignSelf: 'center', marginTop: hp('2%')}}>
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU',
          }}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.editIcon}
          onPress={() => setModalVisible(true)}>
          <EditProfileIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.UserNameContainer}>
        <Text
          style={[
            styles.txt,
            {
              fontSize: rf(2.3),
              marginTop: hp('1%'),
              fontFamily: FONTFAMILY.SemiBold,
              marginRight: wp('1%'),
            },
          ]}>
          William Corner
        </Text>
        <ProfilTickIcon />
      </View>
      <Text
        style={[
          styles.txt,
          {
            fontSize: rf(1.8),
            textAlign: 'center',
            fontFamily: FONTFAMILY.Medium,
          },
        ]}>
        Solo, Indonesia
      </Text>
      <EditText placeholder={'William Corner'} />
      <EditText placeholder={'(+91)-825378995-12'} />
      <EditText placeholder={'Mumbai,Malda,India'} />
      <EditText placeholder={'India'} />
      <EditText placeholder={'ZipCode'} />

      <EditButton title="Update now" style={{marginTop: hp('2%')}} />

      <ImageUploadModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('3%'),
    backgroundColor: COLORS.white,
  },
  txt: {
    color: COLORS.black,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  UserNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: wp('25%'),
    height: wp('25%'),
    borderRadius: wp('25%'),
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 5,
  },
});
