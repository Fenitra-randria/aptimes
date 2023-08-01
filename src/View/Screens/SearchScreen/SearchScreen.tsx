import React, {useEffect, useState} from 'react';
import AppContainer from 'View/Components/AppContainer/AppContainer';
import {makeStyles, useTheme} from '@rneui/themed';
import defaultStyle from 'themes/defaultStyle';
import {TextInput, View} from 'react-native';
import RepertoireCard from 'View/Components/Card/RepertoireCard';
import {SwipeProvider} from 'react-native-swipe-item';
import TextUi from 'Ui/Text/TextUi';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import metrics from 'themes/Metrics';
import useAppInit from 'controller/useAppInit';

type Props = {};

const SearchScreen = (props: Props) => {
  const styles = Styles();
  const [listes, setListes] = useState([]);
  const [text, setText] = useState('');
  const {theme} = useTheme();
  const ctr = useAppInit();

  useEffect(() => {
    let MyData: any = [];
    if (ctr.datas) {
      ctr.datas.map((el: any) => {
        el.attributes.category.map((ee: any) => {
          MyData.push(...ee.list);
        });
      });
      setListes(MyData);
    }
  }, [ctr.datas]);

  return (
    <AppContainer title="Recherche">
      <View style={defaultStyle.container}>
        <TextUi color="textColor" type="f15">
          De quoi vous en avez besoin?
        </TextUi>
        <View>
          <TextInput
            onChangeText={setText}
            placeholder="Recherche..."
            placeholderTextColor={theme.colors.whiteGray}
            style={{
              borderWidth: 1,
              marginHorizontal: 8,
              marginVertical: 20,
              borderRadius: 10,
              paddingHorizontal: 10,
              height: 40,
              fontSize: 16,
              fontWeight: '400',
              color: theme.colors.textColor,
              borderColor: theme.colors.white,
            }}
          />
        </View>

        <SwipeProvider>
          {listes
            .filter(
              (elem: any) =>
                (elem.adress + elem.name + elem.phone + elem.type)
                  .toUpperCase()
                  .indexOf(text.toUpperCase().trim()) > -1,
            )
            .map((el: any, kk: number) => {
              return <RepertoireCard key={'__rep_kkl_' + kk} data={el} />;
            })}
        </SwipeProvider>
      </View>
    </AppContainer>
  );
};

export default SearchScreen;

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
