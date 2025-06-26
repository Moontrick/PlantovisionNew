
import { useAnchorEl } from '@/hooks/useAnchorEl';
import { MouseEvent, useEffect, useState } from 'react';
import { ResultType } from './types';
import { searchStore } from '@/shared/store/searchStore/searchStore';

interface UseResultEditViewInterface  {
    id: number;
}
export function useResultEditView({id}:UseResultEditViewInterface) {
    const [data, setData] = useState<ResultType | null>(null)

    useEffect(() => {
        async function fetchData() {
            const newData = await searchStore.async.fetchGetResultById(id);
            if (newData && typeof newData.id === 'number') {
                setData(newData as ResultType);
            } else {
                setData(null);
            }
        }
        fetchData();
    }, [searchStore.state.resultData, id])
  return {
    data
  };
}
