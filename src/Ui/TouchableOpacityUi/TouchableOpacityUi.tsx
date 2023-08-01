import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

type IProps = TouchableOpacityProps & {};

const TouchableOpacityUi = (props: IProps) => {
  return (
    <TouchableOpacity activeOpacity={props?.activeOpacity || 0.7} {...props}>
      {props?.children}
    </TouchableOpacity>
  );
};

export default TouchableOpacityUi;
