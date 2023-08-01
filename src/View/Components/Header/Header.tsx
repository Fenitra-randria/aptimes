import React from 'react';
import {makeStyles, useTheme} from '@rneui/themed';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import metrics from 'themes/Metrics';
import TouchableOpacityUi from 'Ui/TouchableOpacityUi/TouchableOpacityUi';
import {padding} from 'themes/Fonts';

type Props = {};

const Header = (props: Props) => {
  const styles = Styles();
  const {theme} = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacityUi style={styles.button}>
        <MaterialCommunityIcons
          name="notifications"
          color={theme.colors.white}
          size={metrics.icons.medium}
        />
      </TouchableOpacityUi>
      <TouchableOpacityUi style={styles.button}>
        <MaterialCommunityIcons
          name="ios-moon-outline"
          color={theme.colors.white}
          size={metrics.icons.medium}
        />
      </TouchableOpacityUi>
    </View>
  );
};

export default Header;

const Styles = makeStyles(theme => ({
  container: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    marginLeft: 10,
  },
}));
