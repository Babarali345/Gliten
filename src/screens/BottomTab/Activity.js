import {FlatList, Image, Pressable, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../compnanat/Header';
import {COLORS, FONTFAMILY, SCREENS, STYLES} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import {ListEmptySvg} from '../../compnanat/svg';
import ActivityListEmptyComponanat from '../../compnanat/ActivityListEmptyComponanat';
export default function Activity({navigation}) {
  const [tabPressed, setTabPresed] = useState();
  const [data,setData]=useState(Data)

  const rendorTab = ({item, index}) => {
    return (
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
          styles.itemContainer,
          {
            backgroundColor:
              tabPressed === index ? COLORS.skyBlueLight : COLORS.skyBlueDark,
            borderColor:
              tabPressed === index ? COLORS.lightBlue : COLORS.Greyscale,
          },
        ]}
        onPress={() => {
          setTabPresed(index);
          if(index===1){
            setData([])
          }
          if(index===3){
            setData([])
          }
          if(index===0){
            setData(Data)
          }
          if(index===2){
            setData(Data)
          }
        }}>
        <Text style={styles.itemTxt}>{item.name}</Text>
      </Pressable>
    );
  };

  const rendorActivity = ({item}) => {
    return (
      <TouchableOpacity style={styles.Container2}
      activeOpacity={0.8}
      onPress={()=>{
        navigation.navigate(SCREENS.PropertyDetailScreen)
      }}
      >
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
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Header title={'Recent Activity'} style={{marginTop: hp('2%')}} />
      <View>
        <FlatList
          data={TabData}
          renderItem={rendorTab}
          horizontal
          contentContainerStyle={{
            paddingVertical: hp('1.5%'),
            marginTop: hp('3%'),
            paddingHorizontal: wp('2%'),
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={rendorActivity}
          contentContainerStyle={{
            paddingHorizontal: wp('2%'),
            paddingBottom: hp('5%'),
          }}
          ListEmptyComponent={ActivityListEmptyComponanat}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('2%'),
    backgroundColor: COLORS.white,
  },
  itemContainer: {
    backgroundColor: COLORS.skyBlueLight,
    padding: wp('1.3%'),
    borderWidth: 0.5,
    marginRight: wp('2%'),
    borderRadius: wp('5%'),
  },
  itemTxt: {
    color: COLORS.lightBlue,
    fontFamily: FONTFAMILY.Medium,
    fontSize: rf(1.6),
  },
  images: {
    height: hp('12%'),
    width: wp('30%'),
    borderRadius: wp('3%'),
  },
  Container2: {
    flexDirection: 'row',
    marginTop: hp('2%'),
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
  itemDetailContainer: {
    flex: 1,
    marginTop: hp('1%'),
    marginStart: wp('2%'),
    paddingHorizontal: wp('2%'),
  },
  squreDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp('1%'),
  },
});

const TabData = [
  {
    id: 1,
    name: 'Searches (10)',
  },
  {
    id: 2,
    name: 'Views (0)',
  },
  {
    id: 3,
    name: 'Shortlist(5)',
  },
  {
    id: 4,
    name: 'Contact (0)',
  },
];
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
