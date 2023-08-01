import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {appInitialState} from 'store/slice/app/initialState';
import {OfferParent} from 'services/application/offres/type';

export const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    setAllOffers: (state, action: PayloadAction<OfferParent[]>) => {
      action.payload.map((offerParent: OfferParent) => {
        if (offerParent.attributes.name === 'mobile') {
          state.offers.mobile = offerParent.attributes.categories;
        }
      });
    },
  },
});

export const {setAllOffers} = appSlice.actions;

export default appSlice.reducer;
