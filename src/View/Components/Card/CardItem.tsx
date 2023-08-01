import {View} from 'react-native';
import React, {ReactNode} from 'react';
import {makeStyles, useTheme} from '@rneui/themed';
import TextUi from 'Ui/Text/TextUi';
import metrics from 'themes/Metrics';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useAppNavigator from 'hooks/useAppNavigator';
import {routeName} from 'routes/routeName';
import TouchableOpacityUi from 'Ui/TouchableOpacityUi/TouchableOpacityUi';
import defaultStyle from 'themes/defaultStyle';

type Props = {
  children: ReactNode;
  title: string;
  isLarger?: boolean;
  isActive?: boolean;
  item?: any;
};

const CardItem = (props: Props) => {
  const styles = Styles();
  const {theme} = useTheme();
  const isLarger = props?.isLarger || false;
  const appNavigator = useAppNavigator();
  const goTo = (data: any) =>
    appNavigator.navigateScreen(routeName.auth.repertoire, data);

  return (
    <TouchableOpacityUi
      style={{width: 110, marginLeft: 15}}
      onPress={async () => {
        goTo(props.item);
      }}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: props.isActive
              ? theme.colors.orangeColor
              : theme.colors.colorCard,
          },
        ]}>
        <View
          style={{
            height: 70,
            justifyContent: 'center',
          }}>
          <MaterialCommunityIcons
            name={props?.item?.icon_name || 'podcast'}
            color={theme.colors.orangeColor}
            size={metrics.icons.medium}
          />
        </View>
      </View>
      <TextUi type="f14" color="textColor" weight="400" style={styles.title}>
        {props.title?.length < 25
          ? `${props?.title}`
          : `${props?.title.substring(0, 25)}...`}
      </TextUi>
    </TouchableOpacityUi>
  );
};
export default CardItem;

const Styles = makeStyles(theme => ({
  container: {
    width: 110,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: 110,
    borderColor: theme.colors.whiteBlack,
  },
  title: {
    textAlign: 'center',
  },
}));
