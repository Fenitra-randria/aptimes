import React, {useEffect, useState} from 'react';
import AppContainer from 'View/Components/AppContainer/AppContainer';
import TextUi from 'Ui/Text/TextUi';
import {ScrollView, View} from 'react-native';
import defaultStyle from 'themes/defaultStyle';
import CardItem from 'View/Components/Card/CardItem';
import CardCategorie from 'View/Components/Card/CardCategorie';
import useAppInit from 'controller/useAppInit';
import CardPartner from 'View/Components/Card/CardPartner';
import TouchableOpacityUi from 'Ui/TouchableOpacityUi/TouchableOpacityUi';
import {useTheme} from '@rneui/themed';

const HomeScreen = () => {
  const {partner, datas, elements} = useAppInit();

  const [menuSelected, setmenuSelected] = useState('');
  const [menuSelectedIndex, setMenuSelectedIndex] = useState(0);
  const [categorieSelected, setCategorieSelected] = useState('');
  const [categorieList, setCategorieList] = useState([]);
  const {theme} = useTheme();

  useEffect(() => {
    const categ = new Set([
      ...elements.filter(g => g.menu === menuSelected)?.map(e => e.type),
    ]);

    setCategorieList([...categ]);
  }, [elements, menuSelected]);

  useEffect(() => {
    datas?.length && setmenuSelected(datas[0]?.attributes?.name);
  }, [datas]);

  useEffect(() => {
    categorieList?.length && setCategorieSelected(categorieList[0]);
  }, [categorieList]);

  return (
    <AppContainer title="Bienvenue sur AP Times">
      <View style={[defaultStyle.container, {paddingTop: 20}]}>
        <TextUi type="f12" color="textColor" weight="600">
          Partenaires
        </TextUi>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {partner?.map((el: any, kk: number) => {
          return (
            <CardPartner
              key={'__key_kfg_' + kk}
              children={undefined}
              data={el?.attributes}
            />
          );
        })}
      </ScrollView>
      <View style={[defaultStyle.container, {paddingTop: 20}]}>
        <TextUi type="f12" color="textColor" weight="600">
          Menu
        </TextUi>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {datas?.map((data: any, index: number) => {
          return (
            <CardCategorie
              key={'_CardCategorie_' + index}
              data={data.attributes}
              title={data.attributes.name}
              onPress={() => {
                setmenuSelected(data.attributes.name);
                setMenuSelectedIndex(index);
              }}
              isActive={data.attributes.name === menuSelected}
            />
          );
        })}
      </ScrollView>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {categorieList
          ?.filter(oo => oo)
          ?.map((data: any, index: number) => {
            return (
              <TouchableOpacityUi
                key={'erererer__' + index}
                onPress={async () => {
                  setCategorieSelected(data);
                }}
                style={[
                  {
                    backgroundColor:
                      data === categorieSelected
                        ? theme.colors.orangeColor
                        : 'transparent',
                    margin: 10,
                    padding: 7,
                    width: 130,
                    paddingHorizontal: 10,
                    alignItems: 'center',
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: theme.colors.orangeColor,
                  },
                ]}>
                <TextUi
                  type="f13"
                  color={
                    data === categorieSelected ? 'whiteFix' : 'orangeColor'
                  }
                  weight="600">
                  {data}
                </TextUi>
              </TouchableOpacityUi>
            );
          })}
      </ScrollView>
      <View style={[defaultStyle.container, {paddingTop: 20}]}>
        <TextUi type="f12" color="textColor" weight="600">
          Rubrique
        </TextUi>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {datas[menuSelectedIndex]?.attributes?.category
          .filter((yy: any) =>
            yy.list?.find(ss => ss.type === categorieSelected),
          )
          .map((it: any, k: number) => (
            <CardItem
              key={'_cardItem_nmj_' + k}
              children={undefined}
              title={it?.name}
              item={it}
            />
          ))}
        {/* <CardItem children={undefined} title={'salut'} />
        <CardItem children={undefined} title={'salut'} />
        <CardItem children={undefined} title={'salut'} /> */}
      </ScrollView>
    </AppContainer>
  );
};

export default HomeScreen;
