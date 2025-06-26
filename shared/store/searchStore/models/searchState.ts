import { makeAutoObservable, observable } from 'mobx';
import { Loadings, UserType } from '../types';
import { ResultType } from '@/features/ResultEditControl/hooks/useResultEditView/types';


class SearchState {

  loadings: Loadings = {
    resultLoading: false,
  };

  @observable resultData: ResultType| null = null
  @observable userData: UserType| null = null

  constructor() {
    makeAutoObservable(this);
  }
}

export const searchStateStore = new SearchState();
export type SearchStateStore = typeof searchStateStore;
