import fonts from 'assets/fonts';

export enum TextWeightType {
  'bold',
  'light',
  'normal',
  'semibold',
}

export const fontWeightType = {
  [TextWeightType.normal]: fonts.medium,
  [TextWeightType.light]: fonts.light,
  [TextWeightType.bold]: fonts.bold,
  [TextWeightType.semibold]: fonts.semiBold,
};

export enum TextTypeEnum {
  'h1' = 'h1',
  'h2' = 'h2',
  'h3' = 'h3',
  'h4' = 'h4',
  'h5' = 'h5',
  'h6' = 'h6',
  'normal' = 'normal',
  'description' = 'description',
  'light' = 'light',
}
export type TextType =
  | 'f24'
  | 'f20'
  | 'f18'
  | 'f16'
  | 'f15'
  | 'f14'
  | 'f13'
  | 'f11'
  | 'f12'
  | 'f10'
  | 'f9'
  | 'f8'
;
export type AppColor =
  | 'primary'
  | 'secondary'
  | 'grey0'
  | 'grey1'
  | 'grey2'
  | 'grey3'
  | 'grey4'
  | 'grey5'
  | 'white'
  | 'whiteGray'
  | 'primarySecondary'
  | 'whiteGreen'
  | 'grayWhite'
  | 'blackFix'
  | 'whiteFix'
  | 'colorbackground'
  | 'shadowColor'
  | 'footerColor'
  | 'error'
  | 'borderGreen'
  | 'borderBuy'
  | 'greenBackground'
  | 'shadowTab'
  | 'darkGrey'
  | 'backgroundDetails'
  | 'iconBackground1'
  | 'greyInput'
  | 'selectedColor'
  | 'dashGrey'
  | 'buttonColor'
  | 'greyFix'
  | 'greenYellow'
  | 'popupround'
  | 'whiteBlack'
  | 'inputBorder'
  | 'roundColor'
  | 'roundColor2'
  | 'iconContainerColor'
  | 'greyContainer'
  | 'greyCard'
  | 'blackGrey'
  | 'stepGrey'
  | 'shadow1'
  | 'cardgray'
  | 'warningColor'
  | 'menuColor'
  | 'cardBackground'
  | 'AppContainerColor'
  | 'tertiary'
  | 'cardColor'
  | 'textColor'
  | 'orangeColor'
  | 'colorCard'
  ;
