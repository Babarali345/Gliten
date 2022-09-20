import {FlatList, StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, { useState } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY, SCREENS, STYLES} from '../constants/them';
import { useNavigation } from '@react-navigation/native';
export default function Recently_Added_Property() {
  const [isLoading,setIsloading]=useState(false)
  const navigation=useNavigation()
  const renderItem = ({item, index}) => {
    return (
      <Pressable
        onPress={() => {
          // setIsloading(!isLoading)
          navigation.navigate(SCREENS.PropertyDetailScreen)
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
        <Text style={[styles.txt, {color: COLORS.golden,fontFamily:FONTFAMILY.Medium, paddingLeft:5}]}>APARTMENT</Text>
        <Text style={styles.txt}>{item.name}</Text>
        <View style={styles.squirTxtContainer}>
          <Text style={[styles.txt, {}]}>
            ₹31.1 L
            <Text style={[styles.txt, {color: COLORS.Greyscale,fontSize:rf(1.2)}]}>
              {'\n'}₹4000/sq.ft.
            </Text>
          </Text>

          <Text style={styles.txt}>
            1,265<Text style={{color: COLORS.Greyscale,fontFamily:FONTFAMILY.Medium,fontSize:rf(1.2)}}> sq.ft.</Text>
          </Text>

        </View>
      </Pressable>
    );
  };
  return (
    <View>
      <View style={styles.recentlyTxtContainer}>
        <Text style={styles.recentylTxt}>Recently added Property
</Text>
        <Pressable
          onPress={() => {}}
          style={({pressed}) => [
            {
              opacity: pressed ? 0.7 : 1,
            },
            styles.button,
          ]}>
            <Text style={styles.txtSeeAll}>See all</Text>
        </Pressable>
      </View>
      <FlatList
        data={Data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: wp('2%'),
          paddingVertical: hp('1%'),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: COLORS.white,
    padding: wp('1.5%'),
    borderRadius: wp('3%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation:5,
    width: wp('53%'),
  },

  images: {
    height: hp('15%'),
    width: '100%',
    borderRadius: wp('3%'),
  },
  txt: {
    color: COLORS.black,
    fontSize: rf(1.4),
    marginTop: hp('0.5%'),
    fontFamily: FONTFAMILY.SemiBold,
    paddingLeft:5,
    
    // width: wp('50%'),
  },
  txtSeeAll: {
    color: COLORS.primary,
    fontSize: rf(1.5),
    marginTop: hp('0.5%'),
    marginRight: hp('1%'),
    fontFamily: FONTFAMILY.SemiBold,
    
  },
  recentylTxt: {
    marginTop:hp('1'),
    color: COLORS.black,
    fontSize: rf(2.3),
    fontFamily: FONTFAMILY.Bold,
    marginBottom:hp('0.5%')
  },
  recentlyTxtContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp('2%'),
    justifyContent: 'space-between',
    marginTop: hp('1%'),
  },
  squirTxtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom:hp('1%'),
  },
});

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
  ];