import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';
const {width, height, fontScale} = Dimensions.get('window');

export const fontSize = fontSize => {
  return fontSize / fontScale;
};

// guideline height for standard 5" device screen is 680
export function RFValue(fontSize, standardScreenHeight = 680) {
  const {height, width} = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

  const deviceHeight =
    Platform.OS === 'android' ? standardLength - offset : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;

export const size = {
  f24: 24,
  f20: 20,
  f19: 19,
  f18: 18,
  f16: 16,
  f15: 15,
  f14: 14,
  f13: 13,
  f11: 11,
  f12: 12,
  f10: 10,
  f9: 9,
  f8: 8,
};

export const padding = {
  p0: 5,
  p2: 2,
  p5: 5,
  p10: 10,
  p12: 12,
  p15: 15,
  p16: 16,
  p20: 20,
  p25: 25,
  p30: 30,
  p35: 35,
  p40: 45,
};

// console.log(' WWWWWW ', width);
// console.log('PIXELRATIO', PixelRatio.get());
// console.log('fontScale', fontScale);
