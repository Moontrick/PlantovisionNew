'use client'

import styled from './Shriter.module.scss';
import { useMemo, useState } from 'react';
import { Select } from '@/shared/ui/Select';
import { OptionType } from '@/shared/ui/Select/types';
import { ShriterType } from './types';
import { FormulaType } from '@/features/ResultEditControl/hooks/useResultEdit';



export default function Shriter({lines, onFormulaAdd}: ShriterType ) {
    const [changeFormula, setChangeFormula] = useState<Number>(0);
    const [viewResult, setViewResult] = useState<boolean>(false);
    const [selectedGD, setSelectedGD] = useState<OptionType>({label: '', value: ''})
    const [selectedVD, setSelectedVD] = useState<OptionType>({label: '', value: ''})

    const getText = () => {
        if (Number(changeFormula) > 0 && Number(changeFormula) <= 36) {
            return 'Полая стопа';
        } 
        else if (Number(changeFormula) > 36 && Number(changeFormula) <= 43) {
            return 'Повышенный свод';
        } 
        else if (Number(changeFormula) > 43 && Number(changeFormula) <= 50) {
            return 'Нормальная стопа';
        } 
        else if (Number(changeFormula) > 50 && Number(changeFormula) <= 60) {
            return 'Уплощенная стопа';
        } 
        else if (Number(changeFormula) > 60 && Number(changeFormula) <= 70) {
            return 'Плоскостопие';
        } 
        else {
            return 'Плоскостопие';
        }
    }

    const onSaveFormula = () => {
        const gdLine = lines.find((item) => item.id === selectedGD.value)
        const vdLine = lines.find((item) => item.id === selectedVD.value)
        if(gdLine && vdLine){
            const item: FormulaType = {
                title: 'Индекс Штритера',
                result: changeFormula.toFixed(1),
                text: getText(),
                lines: [gdLine, vdLine]
            }
            onFormulaAdd({...item})
        }
    }

    const getLength = (id: string) => {
        const line = lines.find((item) => item.id === id)
        if(line){
            const lengthPx = Math.sqrt(
                Math.pow(line.point2.x - line.point1.x, 2) + 
                Math.pow(line.point2.y - line.point1.y, 2)
              );
              return lengthPx.toFixed(1)
        }
     }

    const handleGetFormula = () =>{

        const result = Number(getLength(selectedGD.value.toString())) * Number(100 / Number(getLength(selectedVD.value.toString())));
        setChangeFormula(Number(result))
        setViewResult(true)
    }


    const onChangeGD = (value: OptionType) => {
        setSelectedGD(value)
    }
    const onChangeVD = (value: OptionType) => {
        setSelectedVD(value)
    }
  const optionsLines: OptionType[] = useMemo(() => {
   return lines.map((item) => {
      return {
        label: item.id,
        value: item.id
      }
    })
  },[lines])

  return (
    <div className={styled.root}>
        <div className={styled.root_title}>Вид формулы: I = ГД * (100 / ВД)</div>
        <Select options={optionsLines} selected={selectedGD} onSelected={onChangeGD} label='ГД'/>
        <Select options={optionsLines} selected={selectedVD} onSelected={onChangeVD} label='ВД'/>
        <button className={styled.root_button} onClick={handleGetFormula}>Посчитать формулу</button>
        {viewResult && (
            <div>
                <div>Формула: I = {getLength(selectedGD.value.toString())} * (100 / {getLength(selectedVD.value.toString())})</div>
                <div>Результат: I = {changeFormula.toFixed(1)}</div>
                <div>Итог: {getText()}</div>
                <button className={styled.root_button} onClick={onSaveFormula}>Сохранить формулу</button>
            </div>
        )}
    </div>
  );
}
