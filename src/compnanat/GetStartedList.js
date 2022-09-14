import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY} from '../constants/them';

export default function GetStartedList() {
  const [isLoading,setIsloading]=useState(false)
  const renderItem = ({item, index}) => {
    return (
      <Pressable
      onPress={() => {
        setIsloading(true)
      }}
      style={({pressed}) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
        {marginStart:index===0?0:wp('2%')},
        
      ]}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.images}
        />
        <Text style={styles.txt}>{item.name}</Text>
      </Pressable>
    );
  };
  return (
    <View>
       <View style={styles.listContainer}>
        <Text style={styles.txtTitle}>Get Started With</Text>
        <Text style={styles.txt2}>
          Exploring real estate options in top cities
        </Text>
      </View>
      <FlatList
        data={Data}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={{paddingHorizontal: wp('2%')}}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {

  },
  images: {
    height: hp('10%'),
    width: wp('29%'),
  },
  txt: {
    color: COLORS.black,
    fontSize: rf(1.5),
    marginTop: hp('0.5%'),
    fontFamily: FONTFAMILY.Regular,
    width: wp('30%'),
  },
  txtTitle: {
    color: COLORS.black,
    fontSize: rf(2.3),
    marginTop: hp('5%'),
    fontFamily: FONTFAMILY.Bold,
  },
 
  txt2: {
    color: COLORS.placeHolderColor,
    fontSize: rf(1.5),
    fontFamily: FONTFAMILY.Medium,
    marginVertical: hp('0.45%'),
    marginBottom:hp('1.5%')
  },
  listContainer: {
    paddingHorizontal: wp('2%'),
  },
});

const Data = [
  {
    id: 1,
    name: 'Buying a Home',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztwpHnsGkLDTDPZ8xnagR4_99FT6rAeesqg&usqp=CAU',
  },
  {
    id: 2,
    name: 'Renting a Home',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyUmEfByOAMkaxe3RfG2N9k0kQ1tPLqLZ43w&usqp=CAU',
  },
  {
    id: 3,
    name: 'Sell/Rent your Property',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qaZbFUZ-vE9Os6vP94SZ9qN0TazcOiFRug&usqp=CAU',
  },
  {
    id: 4,
    name: 'Buying a Home',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-n68hEA1xSXYjwPpEyN_PMmneCpdaa7VDQ&usqp=CAU',
  },
  {
    id: 5,
    name: 'Buying a Home',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUW_K53FbdKSfV6xAyYyCS1ow6DbFQsZXfXg&usqp=CAU',
  },
  {
    id: 6,
    name: 'Buying a Home',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJM-zBPtjTo7aL_4NAU_qHylNwJ5Q-4A9yGQ&usqp=CAU',
  },
];
