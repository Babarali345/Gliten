import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY, STYLES} from '../constants/them';
export default function HandPicked_ResidentianalList() {
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
        <View style={[styles.txtContainer,STYLES.shadow]}>
          <Text style={styles.itemTitle}>
          Emaar Palm Heights
          </Text>
          <Text style={styles.txt2}>3 BHK Apartment, Sector-77 , Gurgaon</Text>
          <Text style={styles.txt3}>₹31.1 L</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.recentylTxt}>Handpicked Residential Project</Text>
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
    marginTop:hp('1%'),
    
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp('18%'),
  },
    itemTitle: {
    color: COLORS.black,
    fontSize: rf(1.5),
    fontFamily: FONTFAMILY.SemiBold,
  },
  txtContainer: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    padding:wp('2%'),
    right: -70,
    alignItems:'center',
    justifyContent:'center',
    width:wp('40%'),
    borderRadius:wp('3%'),
    height:hp('11%'),
  },
  recentylTxt: {
    color: COLORS.black,
    fontSize: rf(2.3),
    fontFamily: FONTFAMILY.Bold,
  },
  images: {
    height: hp('15%'),
    width: wp('45%'),
    borderRadius: wp('3%'),
  },
  txt2: {
    color: COLORS.Greyscale,
    fontSize: rf(1.3),
    fontFamily: FONTFAMILY.Medium,
    marginVertical:hp('0.5%'),
    textAlign:'center'
  },
  txt3: {
    color: COLORS.black,
    fontSize: rf(1.5),
    fontFamily: FONTFAMILY.SemiBold,
  },
});

const Data = [
  {
    id: 1,
    name: '3 BHK APARTMENT IN SHIVPUR',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztwpHnsGkLDTDPZ8xnagR4_99FT6rAeesqg&usqp=CAU',
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
