import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {routeName} from './routeName';
import {makeStyles, useTheme} from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DetailsScreen from 'View/Screens/DetailsScreen/DetailsScreen';
import FavorisScreen from 'View/Screens/FavorisScreen/FavorisScreen';
import SearchScreen from 'View/Screens/SearchScreen/SearchScreen';
import HomeScreen from 'View/Screens/HomePage/HomePage';
import RepertoireScreen from 'View/Screens/RepertoireScreen/RepertoireScreen';
import IntroductionScreen from 'View/Screens/IntroductionScreen/IntroductionScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomBarStack = () => {
  const {theme} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName={routeName.auth.home}
      screenOptions={({route}) => ({
        headerShown: false,
        animation: 'fade_from_bottom',
        animationTypeForReplace: 'push',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === routeName.auth.home.toUpperCase()) {
            iconName = 'home-sharp';
          } else if (route.name === routeName.auth.search.toUpperCase()) {
            iconName = 'search-sharp';
          } else if (route.name === routeName.auth.favoris.toUpperCase()) { 
            iconName = 'heart';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarHideOnKeyboard : true,
        tabBarActiveTintColor: theme.colors.whiteFix,
        tabBarInactiveTintColor: "#B77802",
        tabBarStyle: {
          height: 70,
          paddingTop: 10,
          backgroundColor: "#FFA700",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position : 'absolute',
        },
        tabBarLabelStyle: {paddingBottom: 15, fontSize: 10},
      })}>
      <Tab.Screen
        name={routeName.auth.home.toUpperCase()}
        component={HomeRoute}
      />
      <Tab.Screen
        name={routeName.auth.search.toUpperCase()}
        component={SearchScreen}
      />
      <Tab.Screen
        name={routeName.auth.favoris.toUpperCase()}
        component={FavorisScreen}
      />
    </Tab.Navigator>
  );
};

const UserRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routeName.auth.intro}>
      <Stack.Screen name={routeName.auth.home} component={BottomBarStack} />
      <Stack.Screen
        name={routeName.auth.intro}
        component={IntroductionScreen}
      />
    </Stack.Navigator>
  );
};

const HomeRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
        animationTypeForReplace: 'push',
        animationDuration: 275,
      }}>
      <Stack.Screen name={routeName.auth.home} component={HomeScreen} />
      <Stack.Screen
        name={routeName.auth.repertoire}
        component={RepertoireScreen}
      />
      <Stack.Screen name={routeName.auth.detail} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default UserRoute;
