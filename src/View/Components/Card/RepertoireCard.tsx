import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {makeStyles, useTheme} from '@rneui/themed';
import TextUi from 'Ui/Text/TextUi';
import TouchableOpacityUi from 'Ui/TouchableOpacityUi/TouchableOpacityUi';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import useAppNavigator from 'hooks/useAppNavigator';
import {routeName} from 'routes/routeName';
import metrics from 'themes/Metrics';
import images from 'assets/images';
import {url} from 'controller/useAppInit';
import {SwipeButtonsContainer, SwipeItem} from 'react-native-swipe-item';
import defaultStyle from 'themes/defaultStyle';

type Props = {
  data?: any;
};

const RepertoireCard = (props: Props) => {
  const styles = Styles();
  const {theme} = useTheme();
  const appNavigator = useAppNavigator();
  const goTo = () =>
    appNavigator.navigateScreen(routeName.auth.detail, {...props.data});

  function makeCall(phoneNumber: string) {
    Linking.canOpenURL('tel: ' + phoneNumber)
      .then(supported => {
        if (supported) {
          Linking.openURL('tel: ' + phoneNumber);
        } else {
          console.log('Numéro de téléphone non valide');
        }
      })
      .catch(err => console.log(err));
  }

  const [isFavorited, setisFavorited] = useState(false);

  // const leftButton = (
  //   <SwipeButtonsContainer
  //     style={[ defaultStyle.shadow ,{
  //       alignSelf: 'center',
  //       aspectRatio: 1,
  //       flexDirection: 'column',
  //       padding: 1,
  //     }]}>
  //     <TouchableOpacity onPress={() => makeCall(props.data?.phone)}>
  //       <MaterialCommunityIcons
  //         name="ellipsis-vertical"
  //         color={theme.colors.textColor}
  //         size={metrics.icons.medium}
  //       />
  //     </TouchableOpacity>
  //   </SwipeButtonsContainer>
  // );
console.log("data ==============> " , props.data);

  const rightButton = (
    <SwipeButtonsContainer
      style={{
        alignSelf: 'center',
        aspectRatio: 1,
        flexDirection: 'column',
        padding: 1,
      }}>
      <TouchableOpacity
        style={styles.call}
        onPress={() => makeCall(props.data?.phone)}>
        <MaterialCommunityIcons
          name="call"
          color="green"
          size={metrics.icons.small}
        />
      </TouchableOpacity>
    </SwipeButtonsContainer>
  );
  const leftButton = (
    <SwipeButtonsContainer
      style={{
        alignSelf: 'center',
        aspectRatio: 1,
        flexDirection: 'column',
        padding: 1,
      }}>
      <TouchableOpacityUi
        style={{marginRight: 10}}
        onPress={() => setisFavorited(!isFavorited)}>
        <MaterialCommunityIcons
          name={isFavorited ? 'heart' : 'heart-outline'}
          color={isFavorited ? 'tomato' : theme.colors.textColor}
          size={metrics.icons.medium}
        />
      </TouchableOpacityUi>
    </SwipeButtonsContainer>
  );

  return (
    <SwipeItem
      style={styles.button}
      swipeContainerStyle={[
        styles.swipeContentContainerStyle,
      ]}
      leftButtons={leftButton}
      rightButtons={rightButton}>
      <TouchableOpacityUi onPress={goTo} style={[styles.container]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.image}
            source={
              props.data?.image?.data?.attributes?.url
                ? {
                    uri: url + props.data?.image?.data?.attributes?.url,
                  }
                : images.profil
            }
          />
          <View>
            <TextUi type="f13" color="textColor" weight="800">
              {props.data?.name.length < 35
                ? `${props.data?.name}`
                : `${props.data?.name.substring(0, 42)}...`}

            </TextUi>
            <TextUi type="f11" color="white" weight="100">
              {props.data?.phone}
            </TextUi>
          </View>
        </View>
        {/* <MaterialCommunityIcons
          name="ellipsis-vertical"
          color={theme.colors.textColor}
          size={metrics.icons.medium}
        /> */}
      </TouchableOpacityUi>
    </SwipeItem>
  );
};
export default RepertoireCard;

const Styles = makeStyles(theme => ({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 70,
    alignSelf: 'center',
    marginVertical: 5,
  },
  swipeContentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.colorCard,
    borderRadius: 10,
    // borderColor: theme.colors.blackGrey,
    //borderWidth: 1,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'grey',
    marginRight: 20,
  },
  call: {
    marginHorizontal: 10,
    borderRadius: 20,
    borderColor: 'green',
    borderWidth: 2,
    padding: 5,
  },
  favorite: {
    marginHorizontal: 10,
    borderRadius: 20,
    borderColor: 'tomato',
    borderWidth: 2,
    padding: 5,
  },
}));
