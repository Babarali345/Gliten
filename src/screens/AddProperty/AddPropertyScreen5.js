import {StyleSheet, Text, ScrollView, ToastAndroid, Platform} from 'react-native';
import React, {useRef, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';
import {COLORS, FONTFAMILY, SCREENS} from '../../constants/them';
import EditText from '../../compnanat/EditText';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import RadioButton from '../../compnanat/RadioButton';
import Button from '../../compnanat/Button';
import UploadDataButton from '../../compnanat/UploadDataButton';
import CustomModal from '../../compnanat/CustomModal';
export default function AddPropertyScreen5({navigation}) {
  const [uploadImageModal, setUploadImageModal] = useState(false);
  const uploadVideo = () => {
    ImagePicker.openPicker({
      mediaType: 'video',
    }).then(res => {
      console.log('Upload Video===', res);
    });
  };
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Posted Succwssfull',
      text2: 'Your Property Data has been Uploaded',   
    });
    navigation.popToTop()
  }
  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          paddingBottom: hp('8%'),
        }}>
        <Text style={styles.txt1}>Negotiable</Text>
        <RadioButton data={poolData} />
        <EditText placeholder={'₹ Other Charges'} />
        <EditText placeholder={'₹ Cost'} />
        <EditText placeholder={'₹ Maintenace Charges'} />
        <Text style={styles.txt1}>Possession Status</Text>
        <RadioButton data={possesionData} boxwidth={'40%'} />
        <Text style={styles.txt1}>Transaction Type</Text>
        <RadioButton data={TransactionType} boxwidth={'40%'} />
        <UploadDataButton
          title={'Upload Photo'}
          onPress={() => setUploadImageModal(true)}
        />
        <UploadDataButton title={'Upload Video'} onPress={uploadVideo} />
        <Button
          title={'Post'}
          style={{marginTop: hp('2%')}}
          onPress={showToast}
        />
      </ScrollView>
      <CustomModal
        visible={uploadImageModal}
        setVisible={setUploadImageModal}
        options={{type: 'slide', from: 'bottom'}}
        handleImageData={res => {
          //   setUpdatedPicture(res.path);
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: wp('3%'),
  },
  txt1: {
    marginStart: wp('2%'),
    color: COLORS.black,
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: rf(1.6),
    marginTop: hp('2%'),
  },
  itemContainer: {},
});
const poolData = [
  {
    label: 'Yes',
  },
  {
    label: 'No',
  },
];
const possesionData = [
  {
    label: 'Under Contruction',
  },
  {
    label: 'Ready To More',
  },
];
const TransactionType = [
  {
    label: 'New Property',
  },
  {
    label: 'Resale',
  },
];
