import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY} from '../constants/them';
export default function Top_Articals() {
  const renderItem = ({item, index}) => {
    return (
      <Pressable
        onPress={() => {
          // setIsloading(!isLoading)
        }}
        style={({pressed}) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
          {marginStart: index === 0 ? 0 : wp('2%')},
          styles.itemContainer,
        ]}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.images}
        />
        <View style={styles.txtContainer}>
          <Text style={styles.itemTitle}>Top 5 waterfront investments in Mumbai</Text>
          <Text style={styles.txt2}>
          Aug 08, 2022
        </Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.recentylTxt}>Top articles on home buying</Text>
      <FlatList
        data={Data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={{
          paddingHorizontal: wp('2%'),
          paddingVertical: hp('1%'),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp('2%'),
    marginTop:hp('1%')
  },
  itemContainer:{
flexDirection:'row',
  },
  itemTitle: {
    color: COLORS.black,
    fontSize: rf(1.5),
    fontFamily: FONTFAMILY.SemiBold,
    width:wp('40%'),
   
  },
  txtContainer:{
    marginStart:wp('2%')
  },
  recentylTxt: {
    color: COLORS.black,
    fontSize: rf(2),
    fontFamily: FONTFAMILY.Bold,
  },
  images: {
    height: hp('13%'),
    width: wp('35%'),
    borderRadius: wp('3%'),
  },
  txt2: {
    color: COLORS.Greyscale,
    fontSize: rf(1.3),
    fontFamily: FONTFAMILY.Medium,
    marginTop: hp('4%'),
  },
  
});

const Data = [
  {
    id: 1,
    name: '3 BHK APARTMENT IN SHIVPUR',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1jct6rwkeE9-G4pgXxHXTNvEQ-hbz0VFsfA&usqp=CAU',
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
];
