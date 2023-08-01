import React, {useState} from 'react';
import AppContainer from 'View/Components/AppContainer/AppContainer';
import {makeStyles, useTheme} from '@rneui/themed';
import TextUi from 'Ui/Text/TextUi';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import {Dimensions, Image, ImageBackground, Linking, View} from 'react-native';
import metrics from 'themes/Metrics';
import defaultStyle from 'themes/defaultStyle';
import ActionButton from 'View/Components/Button/ActionButton';
import images from 'assets/images';
import TouchableOpacityUi from 'Ui/TouchableOpacityUi/TouchableOpacityUi';
import {url} from 'controller/useAppInit';
type Props = {};

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const DetailsScreen = (props: Props) => {
  const styles = Styles();
  const {theme} = useTheme();
  const [isFavorited, setisFavorited] = useState(false);

  const {name, phone, adress, mail, link, about, image, cover_image} =
    props.route?.params || {};
  const phoneNumber = 'tel: ' + phone;
  function makeCall() {
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (supported) {
          Linking.openURL(phoneNumber);
        } else {
          console.log('Numéro de téléphone non valide');
        }
      })
      .catch(err => console.log(err));
  }
  function sendSMS() {
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (supported) {
          Linking.openURL(phoneNumber);
        } else {
          console.log('Numéro de téléphone non valide');
        }
      })
      .catch(err => console.log(err));
  }
  const email = mail;
  const handleEmail = (to: any) => {
    const subject = "Sujet de l'email";
    const body = "Contenu de l'email";
    const url = `mailto:${to}?subject=${subject}&body=${body}`;

    Linking.openURL(url).catch(err => console.error('Error:', err));
  };

  return (
    <AppContainer  routeName="Retour">
      <ImageBackground
        source={
          cover_image?.data?.attributes?.url
            ? {
                uri: url + cover_image?.data?.attributes?.url,
              }
            : images.background2
        }
        resizeMode="cover"
        style={styles.bc}>
        <View
          style={[
            styles.body,
            {
              backgroundColor:theme.colors.AppContainerColor},
          ]}>
          <Image
            style={styles.image}
            source={
              image?.data?.attributes?.url
                ? {
                    uri: url + image?.data?.attributes?.url,
                  }
                : images.profil
            }
          />
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <TextUi
              type="f15"
              color="white"
              weight="800"
              style={{
                textAlign: 'center',
              }}>
              {name}
            </TextUi>
            <TouchableOpacityUi
              style={{marginLeft: 10}}
              onPress={() => setisFavorited(!isFavorited)}>
              <MaterialCommunityIcons
                name={isFavorited ? 'heart' : 'heart-outline'}
                color={isFavorited ? 'tomato' : theme.colors.textColor}
                size={metrics.icons.medium}
              />
            </TouchableOpacityUi>
          </View>

          <View style={defaultStyle.container}>
            <TextUi
              type="f13"
              color="white"
              weight="normal"
              style={styles.textWrapper}>
              {about}
            </TextUi>
            <View
            style={{
              paddingHorizontal:20
            }}
            >
              <TextUi
                type="f12"
                color="white"
                weight="900"
                style={{marginTop: 20, marginBottom: 7}}>
                <MaterialCommunityIcons
                  name="phone-portrait-sharp"
                  color={theme.colors.white}
                  size={metrics.icons.tiny}
                />
                {'  ' + phone}
              </TextUi>
              <TextUi type="f12" color="white" weight="normal"
               style={{marginBottom: 7}}
              >
                <MaterialCommunityIcons
                  name="mail"
                  color={theme.colors.white}
                  size={metrics.icons.tiny}
                />
                {'  ' + email}
              </TextUi>
              <TextUi type="f12" color="white" weight="normal">
                <MaterialCommunityIcons
                  name="location"
                  color={theme.colors.white}
                  size={metrics.icons.tiny}
                />
                {'  ' + adress}
              </TextUi>
            </View>

            <View style={styles.buttonContainer}>
              <ActionButton onPress={makeCall} icon="md-call-outline" />
              <ActionButton
                onPress={() => handleEmail(email)}
                icon="link"
              />
              <ActionButton onPress={() => handleEmail(email)} icon="mail" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </AppContainer>
  );
};

export default DetailsScreen;

const Styles = makeStyles(theme => ({
  screen: {
    height: windowHeight,
    backgroundColor: 'green',
  },
  body: {
    height: windowHeight / 1.5,
    width: windowWidth,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 100,
    backgroundColor: 'grey',
    marginTop: -110,
    borderColor: theme.colors.AppContainerColor,
    borderWidth: 5,
  },
  bc: {
    minHeight: windowHeight,
    width: '100%',
    marginTop : 0
  },
  textWrapper: {
    marginTop: 10,
    textAlign: 'justify',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    
  },
  icon: {
    marginRight: 5,
  },
}));
