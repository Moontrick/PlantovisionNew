'use client'

import { Modal } from '@/shared/ui/Modal';
import styled from './MakeFormula.module.scss';
import { MakeFormulaProps } from './types';
import { useMemo, useState } from 'react';
import { Select } from '@/shared/ui/Select';
import { OptionType } from '@/shared/ui/Select/types';
import Shriter from './components/Shriter/Shriter';
import { FormulaType } from '../../hooks/useResultEdit';
import Rasplast from './components/Rasplast/Rasplast';


type FormulaInfoType = "shriter" | 'rasplast' | "prodol" | null


export default function MakeFormula({lines, circles, onFormulaAdd, formuls}: MakeFormulaProps) {
  const [onOpenModal, onCloseModal] = useState<boolean>(false)
  const [formulaType, setFormulaType] = useState<FormulaInfoType>(null)
  


  const FORMULA_TEXT = {
    'shriter': "Индекс Штритера",
    'rasplast': "Коэффициента распластанности",
    'prodol': "Коэффициент продольного уплощения"
  }
  const optionsLines: OptionType[] = useMemo(() => {
   return lines.map((item) => {
      return {
        label: item.id,
        value: item.id
      }
    })
  },[lines])
  const handleCloseModal = () => {
    onCloseModal(false)
    setFormulaType(null)
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

     const handleAddFormula = (item: FormulaType) => {
      onFormulaAdd({...item});
      handleCloseModal()
     }
  return (
      <div className={styled.menuRight}>
        <div className={styled.menuRight_title}>Готовые значения</div>
        {formuls.map((item) => (
            <div className={styled.menuRight_item}>
                <div className={styled.menuRight_item_title}>Тип: <span>{item.title}</span></div>
                <div className={styled.menuRight_item_title}>Результат: <span>{item.text}</span></div>
            </div>
        ))}
        <button className={styled.menuRight_button} onClick={() => onCloseModal(true)}>Создать формулу</button>
        <Modal onClose={handleCloseModal} isOpen={onOpenModal} label={'Создать формулу'}>
          <div className={styled.modal}>
            {formulaType ? (
              <>
                <div>{FORMULA_TEXT[formulaType]}</div>
                <div>Составьте формулу:</div>
                {formulaType === 'shriter' ? (
                  <Shriter lines={lines} onFormulaAdd={handleAddFormula}/>
                ) : (
                  <>
                  {formulaType === 'rasplast' ? (
                    <Rasplast lines={lines} onFormulaAdd={handleAddFormula}/>
                  ): (
                    <div>123</div>
                  )}
                  </>
                )}
              </>
            ) : (
              <>
              <div className={styled.modal_title}>Выберите макет формулы</div>
              <div className={styled.modal_buttonGroup}>
                <button onClick={() => setFormulaType('shriter')}>Индекс Штритера</button>
                <button onClick={() => setFormulaType('rasplast')}>Коэффициента распластанности</button>
                <button onClick={() => setFormulaType('prodol')}>Коэффициент продольного уплощения</button>
              </div>
              </>
            )}
           
          </div>
        </Modal>
      </div>
  );
}
