import React from 'react';
import AppContainer from 'View/Components/AppContainer/AppContainer';
import {makeStyles, useTheme} from '@rneui/themed';
import TextUi from 'Ui/Text/TextUi';

type Props = {};

const FavorisScreen = (props: Props) => {
  const styles = Styles();
  const {theme} = useTheme();
  return (
    <AppContainer>
      <TextUi type="f16" color="darkGrey" weight="600">
        FavorisScreen
      </TextUi>
    </AppContainer>
  );
};

export default FavorisScreen;

const Styles = makeStyles(theme => ({}));
