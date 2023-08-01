import React from 'react';
import AppContainer from 'View/Components/AppContainer/AppContainer';
import {makeStyles} from '@rneui/themed';
import defaultStyle from 'themes/defaultStyle';
import {View} from 'react-native';
import RepertoireCard from 'View/Components/Card/RepertoireCard';
import {
  SwipeProvider,
} from 'react-native-swipe-item';
type Props = {};

const RepertoireScreen = (props: Props) => {
  const styles = Styles();

  return (
    <AppContainer routeName={props.route?.params?.name}>
      <View style={defaultStyle.container}>
        <SwipeProvider>
          {props.route?.params.list.map((el: any, kk: number) => {
            return <RepertoireCard key={'__rep_kkl_' + kk} data={el} />;
          })}
        </SwipeProvider>
      </View>
    </AppContainer>
  );
};

export default RepertoireScreen;

const Styles = makeStyles(theme => ({
  button: {
    width: '99%',
    height: 100,
    alignSelf: 'center',
    marginVertical: 5,
  },
  swipeContentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: '#e3e3e3',
    borderWidth: 1,
  },
}));
