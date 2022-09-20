import {FlatList, StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY, SCREENS} from '../constants/them';
import { useNavigation } from '@react-navigation/native';
export default function Buying_Home_List() {
  const [isLoading, setIsloading] = useState(false);
  const navigation=useNavigation()
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <Pressable
          onPress={() => {
            navigation.navigate(SCREENS.PropertyDetailScreen)
          }}
          style={({pressed}) => [
            {
              opacity: pressed ? 0.7 : 1,
            },
            {marginHorizontal: wp('2.5%'), alignSelf: 'center'},
          ]}
          
          >
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.images}
          />
          <Text style={styles.txt}>Explore All Home buying Options</Text>
          <Text style={styles.txt2}>Over 5,47,000 properties</Text>
        </Pressable>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.listContainer}>
        <Text style={styles.txtTitle}>Buying a home</Text>
        <Text style={styles.txt2}>Appartments, land, builder floors, villas and more        </Text>
      </View>
      <FlatList
        data={Data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{paddingHorizontal: wp('2%')}}
        scrollEventThrottle={16}
        pagingEnabled
        maxToRenderPerBatch={5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
  },
  images: {
    height: hp('30%'),
    width: wp('95%'),
    borderRadius: wp('2%'),
  },
  txt: {
    color: COLORS.black,
    fontSize: rf(1.5),
    marginTop: hp('0.5%'),
    fontFamily: FONTFAMILY.Medium,
  },
  txtTitle: {
    color: COLORS.black,
    fontSize: rf(2.3),
    fontFamily: FONTFAMILY.Bold,
  },
  recentlyTxtContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp('2%'),
    justifyContent: 'space-between',
    marginVertical: hp('2%'),
    

  },
  txt2: {
    color: COLORS.Greyscale,
    fontSize: rf(1.3),
    fontFamily: FONTFAMILY.Medium,
    marginVertical: hp('0.2%'),
    paddingBottom:10
  },
  listContainer: {
    paddingHorizontal: wp('2%'),
    marginTop:hp('1%'),

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
