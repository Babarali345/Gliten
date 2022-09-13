import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { COLORS } from '../constants/them'
import {
    responsiveFontSize as rf,
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from '../common/responsiveFunction';
export default function SearchBarAddProperty() {
    return (
        <GooglePlacesAutocomplete
          placeholder={'Search Locality,Projects,landmarks....'}
          
          onPress={(data, details = null) => {
          
          }}
          query={{
            key: 'AIzaSyC-MPat5umkTuxfvfqe1FN1ZMSafBpPcpM',
            language: 'en',
            components: 'country:ind',
          }}
          // currentLocation={true}
          renderRow={renderRow}
          GooglePlacesSearchQuery={{rankby: 'distance'}}
          GooglePlacesDetailsQuery={{fields: ['formatted_address', 'geometry']}}
          renderDescription={row => row.description}
          currentLocationLabel="Current location"
          enablePoweredByContainer={false}
          keepResultsAfterBlur={true}
          nearbyPlacesAPI="GooglePlacesSearch"
          fetchDetails={true}
          // renderRightButton={() => (
          //   <Ionic
          //     name={'search'}
          //     style={{color: COLORS.black, fontSize: rf(2)}}
          //   />
          // )}
          textInputProps={{
              placeholderTextColor: COLORS.Greyscale,
           }}
          styles={{
              container: {
                  zIndex: 10,
                  // overflow: 'visible',
                  height: hp('10%'),
                  // flexGrow: 0,
                  // flexShrink: 0,
                  backgroundColor:COLORS.red
                 
                },
            row: {
              backgroundColor: COLORS.transparent,
            },
            textInputContainer: {
              backgroundColor: COLORS.white,
              alignItems: 'center',
              paddingHorizontal: wp('3%'),
              height: hp('8%'),
              borderColor: COLORS.black,
              borderWidth: 0.5,
              borderRadius: wp('2%'),
              overflow: 'hidden',
              marginTop: hp('2%'),
              paddingVertical:hp('2%')
            },
            textInput: [
              {
                color: COLORS.Greyscale,
                fontFamily: FONTFAMILY.Medium,
                fontSize: rf(1.3),
                textTransform: 'capitalize',
                height: hp('7%'),
                
              },
              
            ],
            listView: {
                  position: 'absolute',
                  top: 70,
                  left: 0,
                  right: 0,
                  backgroundColor: 'white',
                  borderRadius: 5,
                  flex: 1,
                  elevation: 3,
                  zIndex: 10
                
            },
            separator: {
              borderColor: COLORS.brownGrey,
              borderBottomWidth: 0.5,
              backgroundColor: COLORS.transparent,
            },
            description: {
              backgroundColor: COLORS.transparent,
            },
            
          }}
          
        />
      );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.transparent,
        borderWidth:1,
        borderColor:COLORS.lightBlue,
        marginTop: hp('2%'),
        borderRadius:wp('1%'),
        backgroundColor:'red',
        height:hp('5%')
    },
    txtInput:{
        color:COLORS.Greyscale,
        backgroundColor:'red',
        
    }
})