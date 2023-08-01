import {View} from 'react-native';
import React, {ReactNode} from 'react';
import {makeStyles, useTheme} from '@rneui/themed';
import {ScrollView} from 'react-native-gesture-handler';
import TextUi from 'Ui/Text/TextUi';
import defaultStyle from 'themes/defaultStyle';

type Props = {
  children: ReactNode;
  title?: string;
};

const ListComponent = (props: Props) => {
  const styles = Styles();
  const {theme} = useTheme();
  return (
    <View style={styles.container} >
      <View style={defaultStyle.container}>
        <TextUi type="f16" color="darkGrey" weight="600">
          {props.title}
        </TextUi>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} horizontal>
        <View>{props.children}</View>
      </ScrollView>
    </View>
  );
};
export default ListComponent;

const Styles = makeStyles(theme => ({
  container: {
    backgroundColor : 'grey',
  },
}));
