import React, {ReactNode} from 'react';
import {
  Button,
  Text,
  TextProps,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {makeStyles} from '@rneui/themed';

import {padding, RFValue, size} from 'themes/Fonts';
import {AppColor, TextType} from 'Ui/Text/types';
import TouchableOpacityUi from 'Ui/TouchableOpacityUi/TouchableOpacityUi';
import TextUi from 'Ui/Text/TextUi';

type IProps = TextProps & {
  children: ReactNode;
  style?: any;
  type?: TextType;
  color?: AppColor;
  leftIcons?: ReactNode;
  rightIcons?: ReactNode;
  onPress: () => void;
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
};

const ButtonUi = (props: IProps) => {
  const weight = props?.weight ?? 'normal';
  const textType = props?.type ?? 'f10';
  const color = props?.color || 'grey0';

  const styles = Styles({color});
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onPress}
      style={props.style ?? [styles.container]}>
      {props.children}
    </TouchableOpacity>
  );
};

export default ButtonUi;
const Styles = makeStyles(theme => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    backgroundColor: theme.colors.secondary,
    padding: 12,
    borderRadius: 8,
  },
}));
