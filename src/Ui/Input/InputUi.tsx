import React, {ReactElement, useState} from 'react';
import {KeyboardTypeOptions, TextInput, View} from 'react-native';
import {makeStyles, useTheme} from '@rneui/themed';
import fonts from 'assets/fonts';
import {padding, RFValue, size} from 'themes/Fonts';
import TextUi from 'Ui/Text/TextUi';

type IProps = {
  rightIcons?: ReactElement;
  leftIcons?: ReactElement;
  placeholder?: string;
  maxLength?: number;
  secureTextEntry?: boolean;
  value?: string;
  isMultiline?: boolean;
  keyboard?: any;
  setText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  style?: any;
  errorState?: boolean;
  errorMessage?: string;
};

const InputUi = (props: IProps) => {
  const styles = Styles();
  const {theme} = useTheme();
  const [focus, setFocus] = useState(false);

  return (
    <View style={styles.viewContainer}>
      {focus && (
        <View style={styles.label}>
          <TextUi type="f12" color="primary">
            {props.placeholder}
          </TextUi>
        </View>
      )}
      <TextInput
        multiline={props.isMultiline || false}
        keyboardType={props?.keyboardType || 'default'}
        style={
          focus 
            ? [styles.inputOnfocus, {paddingLeft: props?.leftIcons ? 37 : 7}]
            : [styles.input, {paddingLeft: props?.leftIcons ? 37 : 7}]
        }
        placeholder={focus ? '' : props.placeholder}
        placeholderTextColor={theme.colors.greyInput}
        secureTextEntry={props.secureTextEntry}
        value={props?.value}
        onChangeText={text => (props?.setText ? props?.setText(text) : null)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {props?.rightIcons && (
        <View style={styles.rightIcon}>{props.rightIcons}</View>
      )}
      {props?.leftIcons && (
        <View style={styles.leftIcon}>{props.leftIcons}</View>
      )}
      {props?.errorState && (
        <View style={{position: 'absolute', bottom: -18}}>
          <TextUi type="f9" color="error">
            {props?.errorMessage}
          </TextUi>
        </View>
      )}
    </View>
  );
};

export default InputUi;
const Styles = makeStyles(theme => ({
  viewContainer: {
    width: '100%',
    backgroundColor: theme.colors.grey2,
    borderRadius: 10,
  },
  input: {
    color: theme.colors.white,
    width: '100%',
    height: 42,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    fontSize: RFValue(size.f12),
    borderColor: theme.colors.inputBorder,
    fontFamily: fonts.semiBold,
    paddingHorizontal: padding.p16,
  },
  inputOnfocus: {
    color: theme.colors.white,
    width: '100%',
    height: 42,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    fontSize: RFValue(size.f12),
    borderColor: theme.colors.primary,
    fontFamily: fonts.semiBold,
    paddingHorizontal: padding.p16,
    paddingVertical: 2,
  },
  rightIcon: {
    position: 'absolute',
    right: 10,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftIcon: {
    position: 'absolute',
    left: 10,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    width: '100%',
    position: 'absolute',
    top: -17,
  },
}));
