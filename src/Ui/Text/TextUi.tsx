import React, {ReactNode} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {makeStyles} from '@rneui/themed';

import {AppColor, TextType} from './types';
import {RFValue, size} from 'themes/Fonts';
import fonts from 'assets/fonts';

type IProps = TextProps & {
  children: ReactNode;
  style?: TextStyle;
  type?: TextType;
  color?: AppColor;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
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

const TextUi = (props: IProps) => {
  const weight = props?.weight ?? 'normal';
  const textType = props?.type ?? 'f10';
  const color = props?.color || 'grey0';

  const styles = Styles({color});
  return (
    <Text
      allowFontScaling={false}
      ellipsizeMode={props.ellipsizeMode}
      numberOfLines={props.numberOfLines}
      style={[
        styles.text,
        props?.style,
        {fontSize: RFValue(size?.[textType] || 10)},
        {fontWeight: weight},
        {fontFamily: 'CINNAMON-CAKE'},
      ]}>
      {props?.children}
    </Text>
  );
};

export default TextUi;
const Styles = makeStyles((theme, props: any) => {
  return {
    text: {
      color: (theme.colors as any)[props?.color],
    },
  };
});
