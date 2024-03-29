declare module 'StoreTypes' {
  import { StateType, ActionType } from 'typesafe-actions'
  export type Store = StateType<typeof import('./index').default>;
  export type RootAction = ActionType<typeof import('./root-action').default>;
  export type RootState = StateType<typeof import('./root-reducer').default>;
  export type Services = typeof import('../services').default;
}
