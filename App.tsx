import React from 'react';
import {ThemeProvider} from '@rneui/themed';
import {theme} from 'themes/themes';
import {NavigationContainer} from '@react-navigation/native';
import UserRoute from 'routes/UserRoute';
import {AppContext} from 'hooks/AppContext';
import useAppInit from 'controller/useAppInit';
import {View} from 'react-native';

const App = () => {
  const ctr = useAppInit();
  return (
    <AppContext.Provider
      value={{
        loading: ctr?.loading,
        datas: ctr?.datas,
        defaultTheme: ctr?.defaultTheme,
      }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <UserRoute />
        </NavigationContainer>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
