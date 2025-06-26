'use client'

import { useState } from 'react';
import styled from './CircleEdit.module.scss';
import { CircleEditProps } from './types';
import { useResultEditCircle } from '../../hooks/useResultEditCircle';
import { Popover } from '@/shared/ui/Popover';
import { Circle } from '../../hooks/useResultEdit';


export default function CircleEdit({x, y, id, deleteCircle, startDrag, handleDrag, endDrag, hoveredElement, activeElement, setActiveElement, onAddLine, isLine}: CircleEditProps) {
  const {
    anchorEl, 
    color, 
    setColor,
    width,
    setWidth,
    height,
    setHeight,
    radius,
    setRadius,
    text,
    setText,
  } = useResultEditCircle()

  return (
    <>
    <button
        className={styled.circle}
        style={{
            left: `${x}px`,
            top: `${y}px`,
            background: hoveredElement ? 'var(--sapphire-20)' : color,
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: `${radius}px`,
            border: hoveredElement || activeElement ? '1px solid var(--sapphire-20)' : '1px solid var(--steel-10)'
        }}
        onMouseDown={(e) => {startDrag(e, id.toString())}}
        onMouseMove={handleDrag}
        onMouseUp={(e) => {endDrag(e)}}
        onMouseLeave={(e) => { endDrag(e)}}
        onClick={() => {
            
            setActiveElement(id.toString())
            if(isLine){
                const circle: Circle = {
                    id: id.toString(),
                    x,
                    y
                }
                onAddLine(circle)
            }
        }}
        // onClick={anchorEl.handleOpenPopover}
    >
        {text}
    </button>
      {activeElement && (
      <div className={styled.menuRight}>
        <div className={styled.popover}>
                <div className={styled.popover_box}>
                    <div className={styled.popover_box_title}>Позиция</div>
                    <div className={styled.popover_grid}>
                        <div className={styled.popover_grid_title}>
                            X 
                        </div>
                        <div className={styled.popover_grid_item}>
                            {x}
                        </div>
                    </div>
                    <div className={styled.popover_grid}>
                        <div className={styled.popover_grid_title}>
                            Y 
                        </div>
                        <div className={styled.popover_grid_item}>
                            {y}
                        </div>
                    </div>
                </div>
                <div className={styled.popover_grid}>
                    <div className={styled.popover_grid_title}>
                        Номер 
                    </div>
                    <div className={styled.popover_grid_item}>
                        {id}
                    </div>
                </div>
                <div className={styled.popover_grid}>
                    <div className={styled.popover_grid_title}>
                        Цвет 
                    </div>
                    <input className={styled.popover_grid_color} type="color" id="head" name="head" value={color} onChange={(e) => setColor(e.target.value)} />
                </div>
                <div className={styled.popover_grid}>
                    <div className={styled.popover_grid_title}>
                        Ширина 
                    </div>
                    <input className={styled.popover_grid_input} type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
                </div>
                <div className={styled.popover_grid}>
                    <div className={styled.popover_grid_title}>
                        Высота 
                    </div>
                    <input className={styled.popover_grid_input} type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <div className={styled.popover_grid}>
                    <div className={styled.popover_grid_title}>
                        Радиус 
                    </div>
                    <input className={styled.popover_grid_input} type="number" value={radius} onChange={(e) => setRadius(e.target.value)} />
                </div>
                <div className={styled.popover_grid}>
                    <div className={styled.popover_grid_title}>
                        Текст 
                    </div>
                    <input className={styled.popover_grid_input} type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className={styled.popover_button}>
                    <button type='button' onClick={() => deleteCircle(id.toString())}>Удалить</button>
                </div>
            </div>
        </div>
      )}
    </>
  );
}
