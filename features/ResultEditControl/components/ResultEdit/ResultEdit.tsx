'use client'

import { useRef, useState } from 'react';
import styled from './ResultEdit.module.scss';
import CircleEdit from '../../ui/CircleEdit/CircleEdit';
import { ResultEditProps } from './types';
import { useResultEdit } from '../../hooks/useResultEdit';
import { IconCursor } from '@/public/assets/icons/IconCursor';
import Line from '../../ui/Line/Line';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { IconFormula } from '@/public/assets/icons/IconFormula';
import MakeFormula from '../../ui/MakeFormula/MakeFormula';
import { IconHome } from '@/public/assets/icons/IconHome';
import { useRouter } from 'next/navigation';

  
export default function ResultEdit({id}: ResultEditProps) {
    const { 
        circles,
        draggedCircleId,
        containerRef,
        handleAddCircle,
        startDrag,
        handleDrag,
        endDrag,
        deleteCircle,
        isLineActive, 
        setIsLineActive,
        hoveredElement, 
        setHoveredElement,
        activeElement, 
        setActiveElement,
        onChangeActiveElement,
        setCurrentTool,
        currentTool,
        onAddLine,
        lines,
        isFirstCircleAdd,
        hoveredElementLine, 
        setHoveredElementLine,
        deleteLine,
        onChangeActiveElementLine,
        activeLine,
        updateTransformState,
        transformState,
        onFormulaAdd,
        formuls
    } = useResultEdit()
    const router = useRouter();
    function handleBackToSessions() {
        router.back();
      }
  return (
    <>
    <div className={styled.menuLeft}>
            <button className={styled.menuLeft_button} onClick={handleBackToSessions}><IconHome width={'100%'} height={'100%'} fill="var(--sapphire-20)"/></button>
            <div className={styled.menuLeft_title}>Номер исследования: {id}</div>
            {circles.map((item, index) => (
              <button key={item.id} className={styled.menuLeft_item} onMouseEnter={() => setHoveredElement(item.id)} onMouseLeave={() => setHoveredElement(null)} onClick={() => onChangeActiveElement(item.id)}>
                <div className={styled.menuLeft_item_circle}/>
                Круг 
                <span> {item.id}</span>
                </button>
            ))}
            {lines.map((item, index) => (
              <button key={item.id} className={styled.menuLeft_item}  onMouseEnter={() => setHoveredElementLine(item.id)} onMouseLeave={() => setHoveredElementLine(null)} onClick={() => onChangeActiveElement(item.id)}>
                <div className={styled.menuLeft_item_line}/>
                Линия 
                <span> {item.id}</span>
                </button>
            ))}
        </div>
      
     {/* <TransformWrapper
        initialScale={1}
        minScale={0.1}
        maxScale={10}
        wheel={{ step: 0.1 }}
        onTransformed={(ref, state) => {
          updateTransformState({
              scale: state.scale,
              positionX: state.positionX,
              positionY: state.positionY
          });
      }}
      >
        <TransformComponent> */}
        <div className={styled.root}       
            onClick={handleAddCircle} 
            ref={containerRef}
            style={{
              cursor: currentTool === 'circle' ? 'pointer' : 'default',
            
            }}
          />
        <div className={styled.image}  />

        
        {circles.map((circle, index) => (
           <CircleEdit 
            x={circle.x} 
            y={circle.y} 
            key={index} 
            id={circle.id} 
            deleteCircle={deleteCircle} 
            startDrag={startDrag}       
            handleDrag={handleDrag}
            endDrag={endDrag}
            hoveredElement={circle.id === hoveredElement}
            activeElement={circle.id === activeElement}
            setActiveElement={onChangeActiveElement}
            isLine={currentTool === 'line'}
            onAddLine={onAddLine}
           />
        ))}
        {lines.map((item) => (
          <Line activeElement={activeElement === item.id} {...item} key={item.id} hoveredElement={item.id === hoveredElementLine} deleteLine={deleteLine} setActiveElement={onChangeActiveElement}/>
        ))}
        {/* </TransformComponent>
        </TransformWrapper> */}
        {currentTool === 'line' && (
          <div className={styled.lineHelp}>
            <div style={{color: isFirstCircleAdd ? 'var(--gray-20)' : 'var(--white-10)'}}>Укажите 1 круг</div>
            <div> {`->`}</div>
            <div style={{color: !isFirstCircleAdd ? 'var(--gray-20)' : 'var(--white-10)'}}>Укажите 2 круг</div>
          </div>
        )
         }
         {currentTool === 'makeFormula' && <MakeFormula lines={lines} circles={circles}   onFormulaAdd={onFormulaAdd} formuls={formuls}
        />}
        <div className={styled.menuBottom}>
          <button type='button' onClick={() => setCurrentTool('cursor')} style={{background: currentTool === 'cursor' ? 'var(--sapphire-20)' : 'transparent'}}>
            <IconCursor width={'100%'} height={'100%'}/>
          </button>
          <button type='button' onClick={() => setCurrentTool('circle')} style={{background: currentTool === 'circle' ? 'var(--sapphire-20)' : 'transparent'}}>
            <div className={styled.menuBottom_circle}/>
          </button>
          <button type='button' onClick={() => setCurrentTool('line')} style={{background: currentTool === 'line' ? 'var(--sapphire-20)' : 'transparent'}}>
            <div className={styled.menuBottom_line}/>
          </button>
          <button type='button' onClick={() => {
            setCurrentTool('makeFormula');
            setActiveElement(null)
          }}
          style={{background: currentTool === 'makeFormula' ? 'var(--sapphire-20)' : 'transparent'}}>
            <IconFormula  width={'100%'} height={'100%'}/>
          </button>
        </div>
    
      </>
  );
}
