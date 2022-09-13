import {ScrollView, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionic from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTFAMILY, SCREENS} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import SearchBarAddProperty from '../../compnanat/SearchBarAddProperty';
import Button from '../../compnanat/Button';
import {MarkerSvg} from '../../compnanat/svg';
import EditText from '../../compnanat/EditText';
export default function AddProperty({navigation}) {
  const mapref = useRef();
  const [placeHolder, setplaceHolder] = useState(
    'Search Locality,Projects,landmarks....',
  );
  const [initRegion, setinitialRegion] = useState({
    latitude: 28.56898790866434,
    longitude: 77.24261754361542,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const renderRow = (data, index) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: COLORS.transparent,
          paddingHorizontal: wp('2%'),
        }}>
        <Ionic name="location-sharp" style={{color: COLORS.Greyscale}} />
        <View style={{alignItems: 'baseline', marginLeft: wp('1%')}}>
          <Text
            style={[
              {
                color: COLORS.black,
                fontFamily: FONTFAMILY.Regular,
                fontSize: rf(1.3),
              },
            ]}>
            {data.description}
          </Text>
        </View>
      </View>
    );
  };
  const GooglePlacesInput = props => {
    return (
      <GooglePlacesAutocomplete
        placeholder={placeHolder}
        onPress={(data, details = null) => {
          setinitialRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          });
          mapref.current.animateToRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          });
          setplaceHolder(data.description);
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
            overflow: 'visible',
            height: hp('10%'),
            flexGrow: 0,
            flexShrink: 0,
            backgroundColor: COLORS.transparent,
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
            paddingVertical: hp('2%'),
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
            zIndex: 10,
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
  };
  return (
    <FlatList
      style={styles.container}
      data={null}
      renderItem={null}
      contentContainerStyle={{
        paddingBottom: hp('5%'),
      }}
      ListFooterComponent={() => {
        return (
          <>
            <Text style={styles.txt1}>Add A Property</Text>
            <Text style={styles.txt2}>Select Location On Map</Text>
            <View>
              <GooglePlacesInput />
              <Button
                title={'Set Location'}
                style={{marginTop: hp('3%'), width: wp('40%')}}
              />
              <View style={styles.mapcontainer}>
                <MapView
                  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                  style={styles.map}
                  initialRegion={initRegion}
                  ref={mapref}>
                  <Marker
                    coordinate={{
                      latitude: initRegion.latitude,
                      longitude: initRegion.longitude,
                    }}>
                    <MarkerSvg />
                  </Marker>
                </MapView>
              </View>
              <Text style={[styles.txt2, {marginTop: hp('2%')}]}>
                To point your exact location, please drag and drop maker.
              </Text>
              <EditText disable placeholder={initRegion.latitude.toString()} />
              <EditText disable placeholder={initRegion.longitude.toString()} />
              <Button title={'Next'} style={{marginTop: hp('5%')}}
              onPress={()=>{
                navigation.navigate(SCREENS.AddProperty2)
              }}
              />
            </View>
          </>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: wp('2%'),
  },
  mapcontainer: {
    height: hp('30%'),
    width: '100%',
    borderRadius: wp('3%'),
    marginTop: hp('2%'),
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  txt1: {
    fontSize: rf(2.1),
    color: COLORS.lightBlue,
    fontFamily: FONTFAMILY.Bold,
  },
  txt2: {
    fontSize: rf(1.3),
    color: COLORS.Greyscale,
    fontFamily: FONTFAMILY.Medium,
  },
});
