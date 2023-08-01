import {OfferCategories} from 'services/application/offres/type';

export type appInitialStateType = {
  offers: {
    mobile: Array<OfferCategories>;
  };
};
