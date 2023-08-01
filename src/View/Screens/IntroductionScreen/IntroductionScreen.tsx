import React from 'react';
import {makeStyles, useTheme} from '@rneui/themed';
import TextUi from 'Ui/Text/TextUi';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import {routeName} from 'routes/routeName';
import useAppNavigator from 'hooks/useAppNavigator';
import images from 'assets/images';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import metrics from 'themes/Metrics';
import TouchableOpacityUi from 'Ui/TouchableOpacityUi/TouchableOpacityUi';

type Props = {};

const IntroductionScreen = (props: Props) => {
  const styles = Styles();
  const {theme} = useTheme();
  const windowHeight = Dimensions.get('window').height;
  const appNavigator = useAppNavigator();
  const goTo = () => appNavigator.navigateScreen(routeName.auth.home);

  return (
    <SafeAreaView>
      <StatusBar hidden />
      <ImageBackground style={styles.container} source={images.introLight}>
        <TouchableOpacityUi style={styles.button} onPress={goTo}>
          <TextUi type="f18" style={{color: '#FD890E'}} weight="600">
            Commencer
          </TextUi>
          <MaterialCommunityIcons
            name={'arrow-forward'}
            color="#FD890E"
            size={metrics.icons.small}
            style={{marginLeft: 5}}
          />
        </TouchableOpacityUi>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default IntroductionScreen;

const Styles = makeStyles(theme => ({
  container: {
    width: Dimensions.get("screen").width,
    height: "100%",
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 50,
    // width: '70%',
    borderRadius: 10,
    position: 'absolute',
    bottom: '25%',
    backgroundColor: '#FD890E33',
    borderColor: '#FD890E',
    borderWidth: 1,
  },
  textWrapper: {
    marginTop: 10,
  },
}));
