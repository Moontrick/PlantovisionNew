
import { action } from 'mobx';
import type { Loadings, UserType } from '../types';
import { searchStateStore, SearchStateStore } from './searchState';
import { ResultType } from '@/features/ResultEditControl/hooks/useResultEditView/types';

class SearchSync {
  state: SearchStateStore;

  constructor(storeState: SearchStateStore) {
    this.state = storeState;
  }
  //Гетеры
  //______________________________________________________________________________________________
  public getLoadings() {
    return this.state.loadings;
  }
  
  public getResultData() {
    return this.state.resultData;
  }

  public getUserData() {
    return this.state.userData;
  }

  //______________________________________________________________________________________________



  //Сетеры
  //______________________________________________________________________________________________
  public setLoadings(value: boolean, key: keyof Loadings) {
    this.state.loadings = { ...this.state.loadings, [key]: value };
  }

  public setResultData(value: ResultType) {
    this.state.resultData = {...value}
  }

  public setUserData(value: UserType ) {
    this.state.userData = {...value}
  }
  //______________________________________________________________________________________________
}

export const searchSyncStore = new SearchSync(searchStateStore);
export type SearchSyncStore = typeof searchSyncStore;
