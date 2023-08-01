import React from 'react';
import {AppContextType} from 'hooks/type';

export const AppContext = React.createContext<AppContextType | null>(null);
