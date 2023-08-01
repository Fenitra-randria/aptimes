import {Pressable, View} from 'react-native';
import React from 'react';
import {makeStyles, useTheme} from '@rneui/themed';
import TextUi from 'Ui/Text/TextUi';
import metrics from 'themes/Metrics';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyle from 'themes/defaultStyle';

type Props = {
  title: string;
  isActive?: boolean;
  data?: any;
  onPress: () => void;
};

const CardCategorie = (props: Props) => {
  const styles = Styles();
  const {theme} = useTheme();

  return (
    <Pressable onPress={props.onPress} style={[styles.container]}>
      <View
        style={[
          {
            justifyContent: 'center',
          },
          styles.content,
          {
            backgroundColor: props.isActive
              ? theme.colors.orangeColor
              : theme.colors.colorCard,
          },
        ]}>
        <MaterialCommunityIcons
          name={props?.data?.icon_name || 'podcast'}
          color={props.isActive ? 'white' : theme.colors.orangeColor}
          size={metrics.icons.medium}
        />
      </View>

      <TextUi
        type="f14"
        color={props.isActive ? 'orangeColor' : 'textColor'}
        weight="400"
        style={styles.title}>
        {props.title?.length < 25
          ? `${props?.title}`
          : `${props?.title.substring(0, 25)}...`}
      </TextUi>
    </Pressable>
  );
};
export default CardCategorie;

const Styles = makeStyles(theme => ({
  container: {
    width: 110,
    marginBottom: 60,
    marginLeft: 10,
    marginRight: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    height: 110,
    width: 110,
    backgroundColor: theme.colors.darkGrey,
    alignItems: 'center',
    borderRadius: 17,
  },
  title: {
    textAlign: 'center',
    position: 'absolute',
    top: 113,
  },
}));
