'use client'
import { usePathname, useRouter } from 'next/navigation';
import styled from './ResultPage.module.scss';
import { useTransition } from 'react';
import { LinearProgress } from '@mui/material';


export default function ResultPage() {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  function handleRedirectToUser() {
    startTransition(() => {
      router.push(`${pathname}/${123}`);
    });
  }
  return (
    <div className={styled.root}>
        <div className={styled.root_title}>Результаты анализов</div>
        <div className={styled.root_grid}>
            <div className={styled.root_grid_title}>Дата</div>
            <div className={styled.root_grid_title}>Краткое описание</div>
            <div></div>
        </div>
        <div className={styled.root_gridItem}>
            <div className={styled.root_gridItem_item}>20.05.2025</div>
            <div className={styled.root_gridItem_item}>Плоскостопие, I=72.7</div>
            <div className={styled.root_gridItem_item}>{isPending ? (<div style={{padding: '8px 0px', width: '100%', height: '100%'}}><LinearProgress /></div>) : (<button type='button' className={styled.root_gridItem_button} onClick={handleRedirectToUser}>Подробнее</button>)}</div>
        </div>
        <div className={styled.root_gridItem}>
            <div className={styled.root_gridItem_item}>20.05.2025</div>
            <div className={styled.root_gridItem_item}>Уплощенная стопа, I=54.2</div>
            <div className={styled.root_gridItem_item}>{isPending ? (<div style={{padding: '8px 0px', width: '100%', height: '100%'}}><LinearProgress /></div>) : (<button type='button' className={styled.root_gridItem_button} onClick={handleRedirectToUser}>Подробнее</button>)}</div>
        </div>
    </div>
  );
}
