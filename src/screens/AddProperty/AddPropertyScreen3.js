import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS, FONTFAMILY, SCREENS, STYLES} from '../../constants/them';
import EditText from '../../compnanat/EditText';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import DropDownModal from '../../compnanat/DropDownModal';
import RadioButton from '../../compnanat/RadioButton';
import Button from '../../compnanat/Button';
export default function AddPropertyScreen3({navigation}) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: hp('8%'),
      }}>
      <Text style={styles.txt1}>Property Feature</Text>
      <DropDownModal Data={BedRoomData} placeHolder="Select Bedrooms" />
      <DropDownModal Data={BedRoomData} placeHolder="Select Bathrooms" />
      <Text style={styles.txt1}>Pool</Text>
      <RadioButton data={poolData} />
      <Text style={styles.txt1}>Garden</Text>
      <RadioButton data={poolData} />
      <Text style={styles.txt1}>Parking</Text>
      <RadioButton data={poolData} />
      <DropDownModal Data={FurnishigData} placeHolder="Select Furnishing" 
         dropDownStyle={{height:hp('16%')}}
      />
      <DropDownModal
        Data={DummyData}
        placeHolder="Select Property on floor"
        dropDownStyle={{height:hp('15%')}}
      />
      <DropDownModal Data={DummyData} placeHolder="Select Total Floor"
      dropDownStyle={{height:hp('15%')}}
      />
      <Button title={'Next'} style={{marginTop: hp('2%')}}
      onPress={()=>{
        navigation.navigate(SCREENS.AddPropertyScreen4)
      }}
      />
    </ScrollView>
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

const BedRoomData = [
  '1 RK/1 BHK',
  '2 BHK',

  '3 BHK ',

  '4 BHK ',

  '5 BHK ',
  '6 BHK ',
  '7 BHK ',
];
const FurnishigData = ['Semifurnished', 'Unfurnished', 'Furnished'];
const DummyData = ['Option1','Option2', 'Option3'];
