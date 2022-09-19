import React, {useState} from 'react';
import MapView,{Marker}from 'react-native-maps';
import {
  View,
  useWindowDimensions,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  
} from 'react-native'
import { TabBar,TabView, SceneMap } from 'react-native-tab-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, FONTFAMILY, IMAGES, width} from '../../constants/them';
import {heightPercentageToDP as hp,responsiveFontSize as rf, widthPercentageToDP as wp,} from '../../common/responsiveFunction';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {InfoSVG,Facebook,Twitter,Message}from '../../assets/Images/svg'
import Button from '../../compnanat/Button';
import Bullet from '../../compnanat/Bullet';
import Heading from '../../compnanat/Heading';
import Headingtwo from '../../compnanat/Headingtwo';
import SeperatorEmpty from '../../compnanat/SeperatorEmpty';
import PropertyDetail from '../../compnanat/PropertyDetail';
import FurnishingDetails from '../../compnanat/FurnishingDetails';
import LocationDetail from '../../compnanat/LocationDetails';
import AmenitiesDetail from '../../compnanat/AmenitiesDetail';
import OwnerName from '../../compnanat/OwnerName';
import EditText from '../../compnanat/EditText'
const FirstRoute = () => (
<ScrollView style={{ flex: 1, backgroundColor:COLORS.white,paddingHorizontal:wp('3%') }} >

<View style={styles.container}>
      <ImageBackground style={styles.coverImage} imageStyle={{ borderRadius: 8}} source={IMAGES.coverProperty}>
        <View style={styles.textView}>
        <Text style={styles.imageTextUpper}>VERIFIED</Text>
        <Text style={styles.imageText}>Platinum</Text>
        </View>
      </ImageBackground>
</View>

<View style={{flexDirection:'row', justifyContent:'space-between',paddingVertical:hp(1)}}>
  <View>
    <Text style={{fontFamily:FONTFAMILY.Bold,fontSize:rf(1.5),color:'#252525'}}>₹
    <Text style={{fontFamily:FONTFAMILY.Bold,fontSize:rf(2.7),}}>31.1 Lac</Text>
    <Text style={{fontFamily:FONTFAMILY.Medium,fontSize:rf(1.5),color:"#8696B4"}}> @ 4000 per sq.ft.</Text>
    </Text>
    <Text style={{fontSize:rf(1.8),fontWeight:'700',color:'#01478F'}}>Estimated EMI ₹1,59,741</Text>
  </View>
  <View style={{justifyContent:'center'}}>
<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#1F975D',paddingHorizontal:28,paddingVertical:8,borderTopRightRadius:8,}}>
  <Text style={styles.statusView}>STATUS </Text>
  <InfoSVG/>
</View>
<Text style={styles.availview}>NOT AVAILABLE</Text>
</View>
</View>

<Text style={{fontSize:rf(2.3),fontWeight:"500",color:'#252525'}}>2 Bed Rooms 2 Baths</Text>
<Text style={{fontSize:rf(1.5),fontWeight:"500",color:'#8696B4'}}>Independent House/Villa for Sale</Text>
<Text style={{fontSize:rf(1.1),fontWeight:"500",color:'#8696B4',paddingVertical:hp(0.3)}}>in Mubai , Malda, West Bengal</Text>
<View style={{paddingVertical:hp(1),}}>
<Button title='Contact owner free'/>
</View>

<Bullet title='Area' content='Plot area 2160' desc='(200.67 sq.m.)'/>
<Bullet title='Price' content='₹ 31.1 Lac' desc='@ 4000 per sq.ft.(Negotiable)'/>
<Bullet title='Configuration' content='2 Bedrooms , 2 Bathrooms, 1 Balcony with Pooja Room'/>
<Bullet title='Address' content='Mumbai, Malda'/>
<Bullet title='Total Floors' content='1 Floors'/>
<Bullet title='Property Age' content='10+ Year Old' />


<SeperatorEmpty/>
<PropertyDetail title='Property Ownership: ' desc='Freehold'/>
<PropertyDetail title='Water Source: ' desc='Municipal corporation'/>
<PropertyDetail title='Flooring: ' desc='Mosaic'/>
<PropertyDetail title='Power Backup: ' desc='None'/>
<PropertyDetail title='Furnishing: ' desc='Furnished'/>
<PropertyDetail title='Property Code: ' desc='P62575374'/>
<PropertyDetail title='Parking: ' desc='Covered, Open'/>
<SeperatorEmpty/>
<Heading title='About Property'/>
<PropertyDetail title='Address: ' desc='Mumbai, Malda, West Bengal'/>
<Text style={{fontFamily:FONTFAMILY.Medium,fontSize:rf(1.1),color:'#8696B4',paddingBottom:hp(1)}}>Centrally located in elite corner, mukdampur, malda. Near the lic office.</Text>
<SeperatorEmpty/>
<Heading title='Furnished'/>
<Headingtwo content='Furnishing Details'/>


{Data.map((item,index)=>{
return(
<FurnishingDetails titleone={item.title} titletwo={item.titletwo} key={index}/>
)
})}

<SeperatorEmpty/>
<Heading title='Amenities'/>
<Headingtwo content='Furnishing Details'/>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<AmenitiesDetail title='Main Theatre' />
<AmenitiesDetail title='Concierge Service' />
<AmenitiesDetail title='Car wash area' />
<AmenitiesDetail title='Swimming Pool' />
</View>

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<AmenitiesDetail title='Chill-Out Lounge' />
<AmenitiesDetail title='Medical Center' />
<AmenitiesDetail title='Salon' />
<AmenitiesDetail title='Barbecue' />


</View>
<View style={{flexDirection:'row',justifyContent:"space-between"}}>
<AmenitiesDetail title='Restaurent' />


</View>
</ScrollView>
);

const SecondRoute = () => (
  <ScrollView style={{ flex: 1, backgroundColor:COLORS.white,paddingHorizontal:wp('5%')}}>
  <Text style={{fontFamily:FONTFAMILY.Regular,fontSize:rf(2.8),color:COLORS.black,paddingTop:hp(2),paddingBottom:hp(2)}}>Find Location in Map</Text>
  <View style={styles.mapcontainer}>
  <MapView style={styles.map} 
  region={
  {latitude:   24.923130,
  longitude: 67.103702,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,}}>
  <Marker coordinate={{latitude: 24.923130,longitude: 67.103702}}/>
  </MapView>
  </View>
  <View style={styles.btn}>
  <Button title='Get Direction'/>
  </View>
  <Text style={{fontFamily:FONTFAMILY.Regular,fontSize:rf(2.8),color:COLORS.black,paddingTop:hp(2),paddingBottom:hp(1)}}>Near by</Text>
  <View>
  <LocationDetail distance='2.1km ' building='Temple' nearby='Centrally located in elite corner, mukdampur, malda. Near the lic office.'/>
  <LocationDetail distance='1km ' building='Mumbai School' nearby='Centrally located in elite corner, mukdampur, malda. Near the lic office.'/>
  <LocationDetail distance='0.5km ' building='Restaurant' nearby='Centrally located in elite corner, mukdampur, malda. Near the lic office.'/>
  <LocationDetail distance='1.2km ' building='Mechanics' nearby='Centrally located in elite corner, mukdampur, malda. Near the lic office.'/>
  <LocationDetail distance='0.2km ' building='Markets' nearby='Centrally located in elite corner, mukdampur, malda. Near the lic office.'/>
  <LocationDetail distance='0.1km ' building='Mumbai Hospital' nearby='Centrally located in elite corner, mukdampur, malda. Near the lic office.'/>
  <SeperatorEmpty/>
  </View>
  <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between'}}>
  <Text style={{fontFamily:FONTFAMILY.Medium,color:COLORS.Config,paddingTop:hp(0.8)}}>Like This Property? Share with people</Text>

  <TouchableOpacity><Facebook/></TouchableOpacity>
  <TouchableOpacity><Twitter/></TouchableOpacity>
  <TouchableOpacity><Message/></TouchableOpacity>
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: "rgba(74,144,226,1)",
      }}>
    </View>

  </View>
  <Text style={{fontFamily:FONTFAMILY.SemiBold,color:COLORS.Config,textAlign:'center',paddingTop:hp(2),paddingBottom:hp(1)}}>Property sold out or Incorrect data?</Text>
<View style={{paddingBottom:20}}>
<Button title='Report'/>
</View>
  </ScrollView>

);

const ThirdRoute = () => {
  const data = [
    {
      label: 'Individual'
     },
     {
      label: 'Owner'
     }
    ];
  
  return(
  
  <ScrollView style={{ flex: 1, backgroundColor:COLORS.white,paddingHorizontal:wp('5%'), }}>
  <Text style={{fontFamily:FONTFAMILY.Medium,fontSize:rf(2.4),color:COLORS.black,paddingTop:hp(2),paddingBottom:hp(2)}}>Owner Details</Text>
  <Image style={{ width: 177, height: 177,}} resizeMode={"contain"} source={require("../../assets/dummy.png")}/>
  <Text style={{fontFamily:FONTFAMILY.Medium,fontSize:rf(2.3),color:COLORS.Config,paddingTop:hp(2),paddingBottom:hp(2)}}>Properties Listed:1</Text>
<OwnerName name='Ratnabali Das' who='Owner'/>
<Button title='View Phone Number'/>
<Text style={{fontFamily:FONTFAMILY.Medium,fontSize:rf(2.8),color:COLORS.black,paddingTop:hp(2),paddingBottom:hp(1)}}>Send Enquiry to owner</Text>
<View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingBottom:20}}>
<Text style={{fontFamily:FONTFAMILY.Medium,fontSize:rf(2.2),color:COLORS.black,alignSelf:'center',paddingTop:8}}>You are</Text>



</View>
<EditText placeholder='Name'/>
<EditText placeholder='Email'/>
<EditText placeholder='Interested in this property' style={{height:150, alignItems:'flex-start',paddingTop:10}}/>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<EditText placeholder='IND (+91)' keyboardType='numeric' style={{width:('25%')}}/>
<EditText placeholder='Phone no' keyboardType='numeric' style={{width:('73%')}}/>

</View>
<Text style={{fontSize:rf(1.6),fontFamily:FONTFAMILY.Medium,color:COLORS.Config,paddingTop:hp(0.1),paddingBottom:hp(2)}}>By clicking below you agree to Terms and Conditions</Text>
<Button title='Send Email & SMS'/>


  </ScrollView>
)}

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,

});



export default function PropertyDetailScreen() {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Overview'},
    { key: 'second', title: 'Location'},
    { key: 'third', title: 'Owner' },


  ]);

  const renderTabBar = props => (
  	<TabBar
     	 {...props}
      	activeColor={'#01478F'}
        indicatorStyle={{ backgroundColor:'#01478F' ,width:wp(22),}}
      	inactiveColor={'black'}
        style={{backgroundColor:COLORS.white,elevation:0,marginLeft:25,marginRight:25,}}
        labelStyle={{fontFamily:FONTFAMILY.Bold,fontSize:rf(2.0), textAlign:'left', width:110,textTransform:'capitalize',}}
  	/>
  );


  return (
    
    <>



<TabView
  navigationState={{ index, routes }}
  renderScene={renderScene}
  onIndexChange={setIndex}
  initialLayout={{ width: layout.width }}
  renderTabBar={renderTabBar}
      style={{backgroundColor:COLORS.white}}
/>
</>

  );
}
const styles = StyleSheet.create({
  container: {
alignItems:"center"
  },
  coverImage: {
    marginTop:hp(3),
    width:'100%',
    height:hp(25),
  },
  textView: {

    position:'absolute',
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageTextUpper: {
    fontSize: 8,
    color:'#1F975D',
    fontWeight: '500',
    width:60,
    padding:3,
    textAlign:'center'
  },
  imageText: {
    fontFamily:FONTFAMILY.Regular,
    fontSize: 10,
    color:COLORS.white,
    fontWeight: '700',
    backgroundColor:'#F39C12',
    width:60,
    padding:4,
    textAlign:'center'
  },
  statusView:{
    fontFamily:FONTFAMILY.SemiBold,
    color:COLORS.white,
    fontSize:rf(1.3),
  },

  availview:{
    fontFamily:FONTFAMILY.Medium,
    backgroundColor: '#E5E7EA',
    textAlign:'center',
    color:COLORS.black,
    fontSize:rf(1.3),
    fontWeight:'500',
    justifyContent:'center',
    padding:hp(0.5),

  },
  mapcontainer: {
    height: hp(31),
    width: ('100%'),
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  btn:{
    paddingTop:hp(3)
  },
  countryCodePicker: {
    alignSelf: 'center',
  },
  togglerContainerStyle: {
    backgroundColor: '#baffc0',
    borderRadius: 10,
    padding: 5,
  },
  togglerLabelStyle: {
    fontSize: 20,
  },
  searchInputStyle: {
    borderColor: '#888888',
    borderWidth: 1,
    height: 36,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  pickerItemLabelStyle: {
    marginLeft: 10,
    marginVertical: 10,
    alignSelf: 'center',
  },
  pickerItemContainerStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },

});


const Data=[
  {
    id:1,
    title:'0 Water Purifier',
    titletwo:'5 Fan'
  },
  {
    id:2,
    title:'0 Geyser',
    titletwo:'0 Stove'
  },
  {
    id:3,
    title:'0 Modular Kitchen',
    titletwo:'0 TV'
  },
  {
    id:4,
    title:'1 Fridge',
    titletwo:'0 undefined'
  },
  {
    id:5,
    title:'4 Light',
    titletwo:'0 AC'
  },
  {
    id:6,
    title:'3 Wardrobe',
    titletwo:'3 undefnied'
  },
  {
    id:7,
    title:'1 Dinning Table',
    titletwo:'0 Exhaust Fan'
  },
  {
    id:8,
    title:'0 Curtains',
    titletwo:'0 Chimney'
  },
  {
    id:9,
    title:'0 Microwave',
    titletwo:'1 Sofa'
  },
]

