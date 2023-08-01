import React from 'react';
import AppContainer from 'View/Components/AppContainer/AppContainer';
import {makeStyles} from '@rneui/themed';
import defaultStyle from 'themes/defaultStyle';
import {ScrollView, View} from 'react-native';
import TextUi from 'Ui/Text/TextUi';
import RepertoireCard from 'View/Components/Card/RepertoireCard';
import useAppInit from 'controller/useAppInit';

type Props = {};

const RepertoireScreen = (props: Props) => {
  const ctr = useAppInit();

  return (
    <AppContainer>
      <View style={defaultStyle.container}>
        <TextUi type="f16" color="textColor" weight="600">
          {props.route?.params?.name}
        </TextUi>
      </View>
      <View style={defaultStyle.container}>
        <ScrollView>
          {props.route?.params.list.map((el: any, kk: number) => {
            return <RepertoireCard key={'__rep_kkl_' + kk} data={el} />;
          })}
        </ScrollView>
      </View>
    </AppContainer>
  );
};

export default RepertoireScreen;

const Styles = makeStyles(theme => ({}));
