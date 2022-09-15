import {StyleSheet} from 'react-native';


/* *************** Colors ********** */

export const COLORS = {
  primary: '#01478F',
  navy: '#001e3e',
  cherry: '#dd003e',
  black: '#121826',
  red: '#F75555',
  yellow: '#F0CA21',
  white: '#ffffff',
  charcoalGrey: '#757575',
  brownGrey: '#949494',
  blue: '#0037c1',
  brightYellow: '#fcf400',
  golden: '#F39C0F',
  veryLightPink: '#EFEFEF',
  halfpwhite: '#F8FAFC',
  transparent: 'transparent',
  naviWithOpacity: 'rgba(0,30,62,0.4)',
  trueGreen: '#1eaf08',
  cranBerry: '#ab0030',
  greenishBlack: '#2b2b2b',
  skyBlue: '#72bacf',
  Greyscale:'#AEAEAE',
  placeHolderColor:'#94A3B8',
  tabBarLabel:'#64748B',
  skyBlueLight:'#E0EEFF',
  skyBlueDark:'#E5EBF3',
  lightBlue:'#01478F',
  socialBg:'#F8FAFC',
  tabFillColor:'#2972FF',
  Config:'#8696B4',
  seperator: '#e4e4e4',



};

const appTheme = {COLORS};

export default appTheme;

/* * Fonts * */
export const FONTFAMILY = {
  Light: '',
  Medium: 'Inter-Medium',
  Regular: 'Inter-Regular',
  Bold: 'Inter-Bold',
  ExtraBold: 'Inter-ExtraBold',
  SemiBold: 'Inter-SemiBold',
 
};

/* * Images * */
export const IMAGES = {
  googleLogo:require('../assets/Images/googleLogo.png'),
  facebook_logo:require('../assets/Images/facebook-logo.png'),
  BackImage:require('../assets/Images/BackImage.png'),
  award:require('../assets/Images/award.png'),
  coverProperty:require('../assets/Images/property.png'),
};

/* * Screens * */
export const SCREENS = {
  SignUp:'SignUp',
  SignIn:'SignIn',
  MoreUserProfile:'MoreUserProfile',
  SignUpMore:'SignUpMore',
  BottomNavigation:'BottomNavigation',
  Profile:'Profile',
  ShortListed:'ShortListed',
  Activity:'Activity',
  Home:'Home',
  MyDrawer:'MyDrawer',
  Residential:'Residential',
  FilterTabs:'FilterTabs',
  Commercial:'Commercial',
  FilterSearchList:'FilterSearchList',
  AddProperty1:'AddProperty1',
  AddProperty2:'AddProperty2',
  AddPropertyScreen3:'AddPropertyScreen3',
  AddPropertyScreen4:'AddPropertyScreen4',
  AddPropertyScreen5:'AddPropertyScreen5',
  PropertyDetailScreen:'PropertyDetailScreen'
};

export const STYLES = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

/* * Api Path * */
export const CONSTANTS = {
 User:'user',
 Architect:'Architect',
 Sign_Board:'Sign Board',
 Builder:'Builder'
};
