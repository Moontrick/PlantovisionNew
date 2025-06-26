'use client'

import styled from './Rasplast.module.scss';
import { useMemo, useState } from 'react';
import { Select } from '@/shared/ui/Select';
import { OptionType } from '@/shared/ui/Select/types';
import { RasplastType } from './types';
import { FormulaType } from '@/features/ResultEditControl/hooks/useResultEdit';



export default function Rasplast({lines, onFormulaAdd}: RasplastType ) {
    const [changeFormula, setChangeFormula] = useState<Number>(0);
    const [viewResult, setViewResult] = useState<boolean>(false);
    const [selectedAB, setSelectedAB] = useState<OptionType>({label: '', value: ''})
    const [selectedEF, setSelectedEF] = useState<OptionType>({label: '', value: ''})

    const getText = () => {
        if (Number(changeFormula) > 0.3 && Number(changeFormula) <= 0.35) {
            return 'Нормальная стопа';
        } 
        else {
            return 'Продольное плоскостопие';
        }
    }

    const onSaveFormula = () => {
        const abLine = lines.find((item) => item.id === selectedAB.value)
        const efLine = lines.find((item) => item.id === selectedEF.value)
        if(abLine && efLine){
            const item: FormulaType = {
                title: 'Коэффициент распластанности',
                result: changeFormula.toFixed(1),
                text: getText(),
                lines: [abLine, efLine]
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
        const result = Number(getLength(selectedAB.value.toString())) / Number(getLength(selectedEF.value.toString()));
        setChangeFormula(Number(result))
        setViewResult(true)
    }


    const onChangeAB = (value: OptionType) => {
        setSelectedAB(value)
    }
    const onChangeEF = (value: OptionType) => {
        setSelectedEF(value)
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
        <div className={styled.root_title}>Вид формулы: k2 = АБ / EF</div>
        <Select options={optionsLines} selected={selectedAB} onSelected={onChangeAB} label='АБ'/>
        <Select options={optionsLines} selected={selectedEF} onSelected={onChangeEF} label='EF'/>
        <button className={styled.root_button} onClick={handleGetFormula}>Посчитать формулу</button>
        {viewResult && (
            <div>
                <div>Формула: k2 = {getLength(selectedAB.value.toString())} / {getLength(selectedEF.value.toString())}</div>
                <div>Результат: k2 = {changeFormula.toFixed(1)}</div>
                <div>Итог: {getText()}</div>
                <button className={styled.root_button} onClick={onSaveFormula}>Сохранить формулу</button>
            </div>
        )}
    </div>
  );
}
