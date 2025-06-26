
import { runInAction } from 'mobx';

import { searchStateStore, SearchStateStore } from './searchState';
import { searchSyncStore, SearchSyncStore } from './searchSync';

import { baseService } from '@/shared/api/api';
import { ResultType } from '@/features/ResultEditControl/hooks/useResultEditView/types';

class SearchAsync {
  state: SearchStateStore;
  sync: SearchSyncStore;

  constructor(
    storeState: SearchStateStore,
    syncStore: SearchSyncStore,
  ) {
    this.state = storeState;
    this.sync = syncStore;
  }

  async fetchGetResultById(id: number) {
    try {
      this.state.loadings.resultLoading = true;
    
    //   const response = await authService.post<Annotation>(
    //     ROUTES.GetAnnotation,
    //     {
    //       company_collection: integrationFolderName,
    //       user_name: this.stateUser.userInfo?.fullName,
    //       file_name: integrationFileName,
    //       document_id: documentId,
    //     },
    //   );
    //   const data = toCamelOrSnakeCase<Annotation>(response.data, true);
        // await baseService.get('/test')

    // await new Promise(resolve => setTimeout(resolve, 3000));
    const data: ResultType = {
      id: 1,
      number: 3,
      date: '20.05.2025',
      result: 'Плоскостопие 1 степени',
      shtriter: '72.7',
      koef: '0.51',
      conclusion: 'Плоскостопие 1 степени, Экскавированная стопа, Вальгусное отклонение 1 пальца',
      img: ['/assets/images/1.png', '/assets/images/2.png', '/assets/images/3.png'],
    }
    return data
    } catch (error) {
    //   alertHandler.addAlert({ alert: error });
    console.log('Все плохо, мы падаем')
    } finally {
      this.state.loadings.resultLoading = false;
    }
  }


}

export const searchAsyncStore = new SearchAsync(
  searchStateStore,
  searchSyncStore,
);
export type SearchAsyncStore = typeof searchAsyncStore;
