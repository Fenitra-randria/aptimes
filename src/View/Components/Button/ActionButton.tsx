import React from 'react';
import {makeStyles, useTheme} from '@rneui/themed';
import TouchableOpacityUi from 'Ui/TouchableOpacityUi/TouchableOpacityUi';
import useAppNavigator from 'hooks/useAppNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import metrics from 'themes/Metrics';

type Props = {
  icon: string;
  onPress?: () => void;
};

const ActionButton = (props: Props) => {
  const styles = Styles();
  const {theme} = useTheme();
  const appNavigator = useAppNavigator();
  const goTo = () => null;

  return (
    <TouchableOpacityUi onPress={props?.onPress} style={[styles.container]}>
      <MaterialCommunityIcons
        name={props.icon}
        color={theme.colors.orangeColor}
        size={metrics.icons.medium}
      />
    </TouchableOpacityUi>
  );
};
export default ActionButton;

const Styles = makeStyles(theme => ({
  container: {
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: theme.colors.orangeColor,
  },
}));
