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
  charcoalGrey: '#252525',
  brownGrey: '#949494',
  blue: '#0037c1',
  brightYellow: '#fcf400',
  golden: '#FFD700',
  veryLightPink: '#d5d5d5',
  halfpwhite: '#F8FAFC',
  transparent: 'transparent',
  naviWithOpacity: 'rgba(0,30,62,0.4)',
  trueGreen: '#1eaf08',
  cranBerry: '#ab0030',
  greenishBlack: '#2b2b2b',
  skyBlue: '#72bacf',
  Greyscale:'#64748B',
  placeHolderColor:'#94A3B8'
};

const appTheme = {COLORS};

export default appTheme;

/* * Fonts * */
export const FONTFAMILY = {
  Light: 'Metropolis-Light',
  Medium: 'Poppins-SemiBold',
  Regular: 'Poppins-Regular',
  Bold: 'Poppins-Bold',
  BoldItalic: 'Product Sans Bold Italic',
  Circularstd: 'Circular Std Font',
  futur: 'Futura Heavy font',
};

/* * Images * */
export const IMAGES = {
  googleLogo:require('../assets/Images/googleLogo.png'),
  facebook_logo:require('../assets/Images/facebook-logo.png'),
};

/* * Screens * */
export const SCREENS = {
 
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
 
};
