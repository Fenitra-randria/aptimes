/* eslint-disable react-hooks/exhaustive-deps */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {ThemeMode} from '@rneui/themed';
import axios from 'axios';

const qs = require('qs');
export const url = 'https://aptime.akartis-dev.com';

const useAppInit = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [defaultTheme, setDefaultTheme] = useState<ThemeMode | null>();
  const [currItem, setCurrItem] = useState<any>({});
  const [partner, setPartner] = useState<any>([]);
  const [elements, setElementes] = useState<any>([]);
  const [getInitialDataDone, setGetInitialDataDone] = useState<boolean>(false);

  const [datas, setDatas] = useState<any>([]);

  useEffect(() => {
    initFunc();
  }, []);

  const initFunc = async () => {
    console.log(`
    ****************************************************
    *             APP   INIT                           *
    *                                                  *
    * **************************************************
    `);

    try {
      await getTheme();
    } catch (error) {
      console.log('Error get getTheme: ', error);
    }
    try {
      await getInitialDataPart();
    } catch (error) {
      console.log('Error get getInitialDataPart: ', error);
    }

    try {
      await getInitialData();
    } catch (error) {
      console.log('Error get getInitialData: ', error);
    }
    setGetInitialDataDone(true);
  };

  const getInitialData = async () => {
    const datas = (await AsyncStorage.getItem('datas')) || '[]';
    datas && JSON.parse(datas).length && initElement(JSON.parse(datas));
    setDatas(JSON.parse(datas));

    try {
      const query = qs.stringify(
        {
          populate: {
            category: {
              populate: {
                list: {
                  populate: ['cover_image', 'image'],
                },
              },
            },
          },
          pagination: {
            pageSize: 1000,
            page: 1,
          },
        },
        {
          encodeValuesOnly: true, // prettify URL
        },
      );
      console.log('********** GET DATA **********', query);
      const res = await axios.get(url + '/api/datas?' + query);
      console.log(' ok ok  res?.data?.data ----- ', res?.data?.data);

      await AsyncStorage.setItem(
        'datas',
        JSON.stringify(res?.data?.data || []),
      );
      initElement(res?.data?.data || []);
      setDatas(res?.data?.data || []);
    } catch (error) {
      console.log(' ERROR *************************************** ', error);
    }
  };

  const initElement = (d: any) => {
    let MyData: any = [];
    if (d && d.length > 0) {
      d.map((el: any) => {
        el.attributes.category.map((ee: any) => {
          MyData.push(
            ...ee.list.map((eee: any) => ({
              ...eee,
              rubrique: ee.name,
              menu: el?.attributes?.name,
            })),
          );
        });
      });
    }
    setElementes(MyData);
  };

  const getInitialDataPart = async () => {
    let datas = await AsyncStorage.getItem('partner');
    try {
      const query = qs.stringify(
        {
          populate: '*',
          pagination: {
            pageSize: 1000,
            page: 1,
          },
        },
        {
          encodeValuesOnly: true, // prettify URL
        },
      );
      console.log('********** GET PARTNER **********', query);
      const res = await axios.get(url + '/api/partners?' + query);
      console.log(' ok ok  res?.data?.data  partner ----- ', res?.data?.data);

      await AsyncStorage.setItem(
        'partner',
        JSON.stringify(res?.data?.data || []),
      );
      setPartner(res?.data?.data || []);
    } catch (error) {
      setPartner(JSON.parse(datas || '[]'));
    }
  };

  const getTheme = async () => {
    const theme: any = (await AsyncStorage.getItem('theme')) || 'light';
    setDefaultTheme(theme);
  };

  return {
    loading,
    defaultTheme,
    datas,
    currItem,
    setCurrItem,
    initFunc,
    elements,
    partner,
  };
};

export default useAppInit;
