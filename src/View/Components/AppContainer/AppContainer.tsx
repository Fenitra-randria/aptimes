import {
  Alert,
  Image,
  Modal,
  Pressable,
  RefreshControl,
  StatusBar,
  View,
} from 'react-native';
import React, {ReactNode, useEffect, useState} from 'react';
import {makeStyles, useTheme, useThemeMode} from '@rneui/themed';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../Header/Header';
import TouchableOpacityUi from 'Ui/TouchableOpacityUi/TouchableOpacityUi';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import metrics from 'themes/Metrics';
import useAppInit from 'controller/useAppInit';
import TextUi from 'Ui/Text/TextUi';
import {useNavigation} from '@react-navigation/native';

import donation from 'assets/images/donation.png';

type Props = {
  children: ReactNode;
  routeName?: string;
  title?: string;
  disableHeader?: boolean;
};

const AppContainer = (props: Props) => {
  const styles = Styles();
  const {theme} = useTheme();
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);
  const {mode, setMode} = useThemeMode();
  const [sombre, setSombre] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const ctr = useAppInit();

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      await ctr.initFunc();
    } catch (error) {}

    setRefreshing(false);
  }, []);

  useEffect(() => {
    setSombre(mode === 'dark');
  }, []);

  const onChangeTheme = async () => {
    setSombre(!sombre);
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={!props.disableHeader ? styles.header : styles.headerTrans}>
        <View style={{}}>
          {props.routeName && (
            <TouchableOpacityUi
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="chevron-back"
                color={theme.colors.whiteFix}
                size={metrics.icons.medium}
              />
              <TextUi type="f16" color="whiteFix" weight="800">
                {props.routeName.length < 35
                  ? `${props.routeName}`
                  : `${props.routeName.substring(0, 30)}...`}
              </TextUi>
            </TouchableOpacityUi>
          )}
          {props.title && (
            <TextUi type="f16" color="whiteFix" weight="600">
              {props.title}
            </TextUi>
          )}
        </View>
        <View
          style={{
            flexGrow: 1,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacityUi
            style={styles.button}
            onPress={() => setModalVisible(!modalVisible)}>
            <MaterialCommunityIcons
              name="ios-wallet"
              color={theme.colors.whiteFix}
              size={metrics.icons.small}
            />
          </TouchableOpacityUi>
          <TouchableOpacityUi style={styles.button}>
            <MaterialCommunityIcons
              name="notifications-sharp"
              color={theme.colors.whiteFix}
              size={metrics.icons.small}
            />
          </TouchableOpacityUi>
          <TouchableOpacityUi style={styles.button} onPress={onChangeTheme}>
            <MaterialCommunityIcons
              name={theme.mode === 'light' ? 'md-moon' : 'sunny-sharp'}
              color={theme.colors.whiteFix}
              size={metrics.icons.small}
            />
          </TouchableOpacityUi>
        </View>
      </View>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor={'white'}
            colors={[theme.colors.primary]}
            style={{zIndex: 999}}
          />
        }>
        {/* <StatusBar backgroundColor={theme.colors.primary} /> */}

        <View style={styles.children}>
          {props.children}
          <View style={{height: 150}} />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextUi
                color="white"
                type="f16"
                weight="900"
                style={{marginBottom: 10}}>
                Donation
              </TextUi>
              <TextUi color="white">
                Nous nous adressons à vous et comptons sur votre générosité pour
                nous soutenir dans l’atteinte des objectifs que nous nous sommes
                fixés bien que nos services soient appréciés de tous.
              </TextUi>
              <Image
                style={{width: 90, height: 90, margin: 20}}
                source={donation}
              />
              <View style={{flexDirection: 'row'}}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <TextUi color="white">Plus tard</TextUi>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <TextUi color="white">Maintenant</TextUi>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};
export default AppContainer;

const Styles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.colors.AppContainerColor,
    flex: 1,
    flexDirection: 'column',
    marginTop: -50,
    paddingTop: 50,
  },
  buttonClose: {
    //backgroundColor: '#2196F3',
    borderColor: theme.colors.blackGrey,
    borderWidth: 1,
    borderRadius: 8,
    padding: 3,
    width: 80,
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: '#07070763',
  },
  modalView: {
    margin: 20,
    backgroundColor: theme.colors.whiteBlack,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: theme.colors.whiteFix,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFA700',
    paddingTop: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: 15,
    zIndex: 1,
  },
  headerTrans: {
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 9999,
    backgroundColor: theme.colors.headTrans,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    marginLeft: 10,
  },
  children: {
    
  },
}));
