import {widthPercentageToDP} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

const defaultStyle = StyleSheet.create({
  container: {
    paddingLeft: widthPercentageToDP(6),
    paddingRight: widthPercentageToDP(6),
  },
  shadow: {
    // its for android
    shadowColor: '#474545',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    // its for android
    elevation: 5,
    shadowRadius: 13,
  },
});
export default defaultStyle;
