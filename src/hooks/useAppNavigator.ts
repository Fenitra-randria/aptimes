import {
  DrawerActions,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

export default function useAppNavigator() {
  const navigation = useNavigation();
  const router = useRoute();
  const isFocused = useIsFocused();

  const navigateScreen = (name: string, params: any = {}) => {
    // @ts-ignore
    navigation.navigate(name, params);
  };

  const getParams = <T>(): T => {
    return router?.params as any;
  };

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  return {
    navigateScreen,
    openDrawer,
    closeDrawer,
    ...navigation,
    getParams,
    isFocused,
  };
}
