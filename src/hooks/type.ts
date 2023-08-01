import {ThemeMode} from '@rneui/themed';

export type AppContextType = {
  carousel?: any;
  setCarousel?: (element: any) => void;
  loading: boolean;
  defaultTheme: ThemeMode | null | undefined;
  datas: any;
  currItem?: any;
  setCurrItem?: any;
};

export type DatasType = {
  id: number;
  attributes: {};
};
