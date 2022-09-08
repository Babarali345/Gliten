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
  Dimensions,
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
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from '../../compnanat/CustomModal';
export default function Profile() {
  const [picture, setUpdatedPicture] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [visible,   setVisible] = useState(false);

  const handleVisibleModal = () => {
    setVisible(true);
  }
  return (
    <>
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: hp('5%'),
      }}>
       
      <View style={{alignSelf: 'center', marginTop: hp('3%')}}>
        <Image
          style={styles.profileImage}
          source={{
            uri:picture?picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU',
          }}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.editIcon}
          onPress={handleVisibleModal}
          >
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

      {/* <ImageUploadModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      /> */}
      
     
    </ScrollView>
    <Modal
    visible={visible}
    setVisible={setVisible}
    options={{ type: 'slide', from: 'bottom' }}
    handleImageData={(res)=>{
      setUpdatedPicture(res.path)
    }}
  />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('3%'),
    backgroundColor:COLORS.white
  },
  background:{
    position:'absolute',
    right:0,
    left:0,
  top:0,
  bottom:0,
  alignItems:'center',
  justifyContent:'center',
 
  },

  modalView: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: wp('3%'),
    borderTopRightRadius: wp('3%'),
    padding: wp(3),
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  txt: {
    color: COLORS.black,
  },
  txt1: {
    fontSize: rf(2),
    color: COLORS.black,
    fontFamily: FONTFAMILY.Bold,
  },
  txt2: {
    fontSize: rf(1.5),
    color: COLORS.black,
    fontFamily: FONTFAMILY.Bold,
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
  closeIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: wp('5%'),
    marginVertical: hp('2%'),
  },
});
