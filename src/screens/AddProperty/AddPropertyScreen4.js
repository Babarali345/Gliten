import {
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, SCREENS,} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import DropDownModal from '../../compnanat/DropDownModal';
import Button from '../../compnanat/Button';
import Area from '../../compnanat/Area';
import EditText from '../../compnanat/EditText';

export default function AddPropertyScreen4({navigation}) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: hp('8%'),
      }}>
      <Area />
      <Text style={styles.txt1}>Amenities</Text>
      <DropDownModal Data={Select_Amenities} placeHolder="Select Amenities" />
      <DropDownModal Data={Select_Amenities} placeHolder="Select LifeStyle" />
      <DropDownModal Data={Select_Amenities} placeHolder="Select Architecture" />
      <Text style={styles.txt1}>Distance From</Text>
      <EditText placeholder={'Distance from the Water,sea,lake,river'} />
      <Text style={styles.txt1}>Pricing</Text>
      <EditText placeholder={'₹ Property Price'} />
      <Button title={'Next'} style={{marginTop: hp('2%')}}
      onPress={()=>{
        navigation.navigate(SCREENS.AddPropertyScreen5)
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


const Select_Amenities = [
  'Parking',
  'Power Backup',
  'Security Personnel',
  'Lift ',
  'Gymnasium ',
  'Park',
  'Swimming Pool',
  'Gas PipeLine',
  'Club House',
];
const FurnishigData = ['Semifurnished', 'Unfurnished', 'Furnished'];
const DummyData = ['Option1', 'Option2', 'Option3'];
