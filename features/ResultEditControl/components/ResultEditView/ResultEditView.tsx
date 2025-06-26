'use client'

import { useRef, useState, useTransition } from 'react';
import styled from './ResultEditView.module.scss';
import CircleEdit from '../../ui/CircleEdit/CircleEdit';
import { ResultEditProps } from './types';
import { useResultEdit } from '../../hooks/useResultEdit';
import { IconCursor } from '@/public/assets/icons/IconCursor';
import Line from '../../ui/Line/Line';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { IconFormula } from '@/public/assets/icons/IconFormula';
import MakeFormula from '../../ui/MakeFormula/MakeFormula';
import { IconHome } from '@/public/assets/icons/IconHome';
import { usePathname, useRouter } from 'next/navigation';
import ResultEdit from '../ResultEdit/ResultEdit';
import { useResultEditView } from '../../hooks/useResultEditView';
import Image from 'next/image';

  
export default function ResultEditView({id}: ResultEditProps) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
    const router = useRouter()
    const LABEL_DATA = ['Индекс распластанности', 'Индекс Штритера', 'Продольное уплощение']
    const {data} = useResultEditView({id})
    function handleBackToSessions() {
        router.back();
      }
      function handleRedirectToEdit() {
        startTransition(() => {
          router.push(`${pathname}/${123}`);
        });
      }
  return (
    <div className={styled.root}>
        <div className={styled.root_header}>Результат исследования</div>
        <div className={styled.root_title}>Номер исследования: <span>{id}</span></div>
        <div className={styled.root_title}>Дата исследования: <span>{data?.date}</span></div>
        <div className={styled.root_title}>Итоговый результат <span>{data?.result}</span></div>
        <div className={styled.root_title}>Индекс Штритера: <span>{data?.shtriter}</span></div>
        <div className={styled.root_title}>Коэффициент распластанности верхного отдела стопы: <span>{data?.koef}</span></div>
        <div className={styled.root_title}>Пояснения: <span>{data?.conclusion}</span></div>
        <div className={styled.root_header} style={{marginTop: '24px'}}>Снимки результатов</div>
        <div className={styled.root_image}>
          {data?.img.map((item, index) => (
            <div key={index} className={styled.root_image_img}>
            <Image src={item} alt={item}  width={400} height={700}/>
            <div>{LABEL_DATA[index]}</div>
            </div>
          ))}
        </div>
        <div className={styled.root_buttonGroup}>
          <button onClick={handleRedirectToEdit}>Редактировать изображения</button>
        </div>
    </div>
  );
}
