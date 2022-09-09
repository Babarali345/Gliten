import { StyleSheet, Text, View ,FlatList,Image} from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, STYLES } from '../../constants/them'
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import ShortListEmptyComponanat from '../../compnanat/ShortListedEpmtyComponanat';
export default function FilterSearchList() {
  const rendorActivity = ({item}) => {
    return (
      <View style={styles.Container2}>
        <View style={[STYLES.shadow]}>
          <Image
            source={{
              uri: item.image,
            }}
            style={[styles.images, STYLES.shadow]}
          />
        </View>
        <View style={styles.itemDetailContainer}>
          <Text style={styles.txtApartment}>Apartment</Text>
          <Text style={styles.txt1}>3 BHK Apartment in Shivpur</Text>
          <View style={styles.squreDetail}>
            <Text style={styles.txtsquire}>₹4000/sq.ft.</Text>
            <Text style={[styles.txtsquire, {color: COLORS.black}]}>
              1,265
              <Text style={[styles.txtsquire, {color: COLORS.Greyscale}]}>
                sq.ft.
              </Text>
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
          data={Data}
          renderItem={rendorActivity}
          contentContainerStyle={{
            paddingHorizontal: wp('2%'),
            paddingBottom: hp('5%'),
          }}
          ListEmptyComponent={ShortListEmptyComponanat}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: hp(0.1),
                  backgroundColor: COLORS.Greyscale,
                  marginTop: hp('1.5%'),
                }}
              />
            );
          }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white
  },
  Container2: {
    flexDirection: 'row',
    marginTop: hp('2%'),
  },
  images: {
    height: hp('12%'),
    width: wp('30%'),
    borderRadius: wp('3%'),
  },
  itemDetailContainer: {
    flex: 1,
    marginTop: hp('1%'),
    marginStart: wp('2%'),
    paddingHorizontal: wp('2%'),
  },
  txtApartment: {
    color: COLORS.golden,
    fontSize: rf(1.1),
    fontFamily: FONTFAMILY.Medium,

    // width: wp('50%'),
  },
  txt1: {
    color: COLORS.black,
    fontSize: rf(1.4),
    marginTop: hp('0.5%'),
    fontFamily: FONTFAMILY.Bold,
  },
  txtsquire: {
    color: COLORS.Greyscale,
    fontSize: rf(1.4),
    marginTop: hp('0.5%'),
    fontFamily: FONTFAMILY.SemiBold,
  },
  squreDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp('1%'),
  },
})


const Data = [
  {
    id: 1,
    name: '3 BHK APARTMENT IN SHIVPUR',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDxB0SgyZMjTFIZK_qHPL0WaJOyeaD38oU539lhDauKrbhonEoNhMTpHw__emeDFjlS8&usqp=CAU',
  },
  {
    id: 2,
    name: '3 BHK APARTMENT IN SHIVPUR',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyUmEfByOAMkaxe3RfG2N9k0kQ1tPLqLZ43w&usqp=CAU',
  },
  {
    id: 3,
    name: '3 BHK APARTMENT IN SHIVPUR',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qaZbFUZ-vE9Os6vP94SZ9qN0TazcOiFRug&usqp=CAU',
  },
  {
    id: 4,
    name: '3 BHK APARTMENT IN SHIVPUR',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-n68hEA1xSXYjwPpEyN_PMmneCpdaa7VDQ&usqp=CAU',
  },
  {
    id: 5,
    name: '3 BHK APARTMENT IN SHIVPUR',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUW_K53FbdKSfV6xAyYyCS1ow6DbFQsZXfXg&usqp=CAU',
  },
  {
    id: 6,
    name: '3 BHK APARTMENT IN SHIVPUR',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJM-zBPtjTo7aL_4NAU_qHylNwJ5Q-4A9yGQ&usqp=CAU',
  },
  {
    id: 7,
    name: '3 BHK APARTMENT IN SHIVPUR',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJM-zBPtjTo7aL_4NAU_qHylNwJ5Q-4A9yGQ&usqp=CAU',
  },
  {
    id: 8,
    name: '3 BHK APARTMENT IN SHIVPUR',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJM-zBPtjTo7aL_4NAU_qHylNwJ5Q-4A9yGQ&usqp=CAU',
  },
  {
    id: 9,
    name: '3 BHK APARTMENT IN SHIVPUR',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJM-zBPtjTo7aL_4NAU_qHylNwJ5Q-4A9yGQ&usqp=CAU',
  },
];