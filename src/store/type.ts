import React from 'react';

export interface IAction {
  type: string;
  payload: any;
}

export type Dispatch = React.Dispatch<IAction>;
