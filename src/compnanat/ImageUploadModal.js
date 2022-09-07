import { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
 Animated,
 Easing
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY} from '../constants/them';
export default function ImageUploadModal({modalVisible, setModalVisible}) {
    const animated = new Animated.Value(0);
  const duration = 5000;
  useEffect(() => {
    
        Animated.timing(animated, {
          toValue: 255,
          duration: 2000,
          useNativeDriver: false,
        }).start();
  }, []);
  const profilePicture = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(res => {
      setUpdatedPicture(res.path);
    });
  };

  const profilePictureView = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(res => {
      setUpdatedPicture(res.path);
    });
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={[styles.centeredView,]}>
        <Animated.View style={[styles.modalView,{transform: [{translateY: animated}]}]}>
          <View style={styles.closeIconContainer}>
            <Text style={styles.txt}>Choose your action</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setModalVisible(false);
               
              }}>
              <MaterialIcons name="close" size={rf(3)} color={COLORS.black} />
            </TouchableOpacity>
          </View>

          <View style={styles.iconContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => profilePicture()}>
              <View style={{alignItems: 'center'}}>
                <Entypo name="camera" size={rf(5)} color={COLORS.primary} />
                <Text style={styles.txt2}>Camera</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => profilePictureView()}>
              <View style={{alignItems: 'center'}}>
                <MaterialIcons
                  name="photo"
                  size={rf(5)}
                  color={COLORS.primary}
                />
                <Text style={styles.txt2}>Gallery</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
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
    fontSize: rf(2),
    color: COLORS.black,
    fontFamily: FONTFAMILY.Bold,
  },
  txt2: {
    fontSize: rf(1.5),
    color: COLORS.black,
    fontFamily: FONTFAMILY.Bold,
  },
  iconContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: wp('5%'),
    marginVertical: hp('2%'),
  },
  closeIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
