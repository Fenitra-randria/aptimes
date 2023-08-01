import {Image, Linking, View} from 'react-native';
import React, {ReactNode} from 'react';
import {makeStyles, useTheme} from '@rneui/themed';
import TextUi from 'Ui/Text/TextUi';
import useAppNavigator from 'hooks/useAppNavigator';
import {routeName} from 'routes/routeName';
import TouchableOpacityUi from 'Ui/TouchableOpacityUi/TouchableOpacityUi';
import {url} from 'controller/useAppInit';
import defaultStyle from 'themes/defaultStyle';

type Props = {
  children: ReactNode;
  isLarger?: boolean;
  isActive?: boolean;
  data?: any;
};

const CardPartner = (props: Props) => {
  const styles = Styles();
  const {theme} = useTheme();
  const goTo = () => {
    return (
      props.data?.link &&
      Linking.openURL(props.data?.link).catch(err =>
        console.error('Error:', err),
      )
    );
  };

  return (
    <TouchableOpacityUi
      onPress={goTo}
      style={[
        styles.container,
        {height: 100},
        {
          backgroundColor: "transparent"
        },
      ]}>
      <Image
        style={styles.image}
        source={{
          uri: url + props.data?.logo?.data?.attributes?.url,
        }}
      />
    </TouchableOpacityUi>
  );
};
export default CardPartner;

const Styles = makeStyles(theme => ({
  container: {
    width: 110,
    borderRadius: 12,
    marginLeft: 15,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.orangeColor,
  },
  image: {
    height: 70,
    resizeMode: 'contain',
    width: 75,
    //borderWidth: 5,
  },
}));
