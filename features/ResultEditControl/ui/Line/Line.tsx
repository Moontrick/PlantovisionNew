import React, { useEffect, useState } from 'react';
import { LineType } from '../../hooks/useResultEdit';
import { useResultEditLine } from '../../hooks/useResultEditLine';
import styled from './Line.module.scss';


type LineBetweenPointsProps = {
  hoveredElement: boolean;
  activeElement: boolean;
  deleteLine: (id: string) => void;
  setActiveElement: (id: string) => void
} & LineType

const Line: React.FC<LineBetweenPointsProps> = ({
  id,
  point1,
  point2,
  hoveredElement,
  activeElement,
  deleteLine,
  setActiveElement
}) => {
    const { 
        color,
        setColor,
        textColor,
        setTextColor,
        strokeWidth, 
        setStrokeWidth,
        setFontSize,
        fontSize
    } = useResultEditLine()
    const [relativeLength, setRelativeLength] = useState(0);
    const calculateAngle = (point1: {x: number, y: number}, point2: {x: number, y: number}) => {
        return Math.atan2(point2.y - point1.y, point2.x - point1.x) * 180 / Math.PI;
      };
    useEffect(() => {
      const calculateLength = () => {
        const lengthPx = Math.sqrt(
          Math.pow(point2.x - point1.x, 2) + 
          Math.pow(point2.y - point1.y, 2)
        );
        const relative = lengthPx;
        setRelativeLength(relative);
      };
  
      calculateLength();
      window.addEventListener('resize', calculateLength);
      
      return () => {
        window.removeEventListener('resize', calculateLength);
      };
    }, [point1, point2]);
    const angle = calculateAngle(point1, point2);
    const midX = (point1.x + point2.x) / 2;
    const midY = (point1.y + point2.y) / 2;
    const textX = midX + (4 * Math.sin(-angle * Math.PI / 180));
    const textY = midY + (4 * Math.cos(angle * Math.PI / 180));
  return (
    <>
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} onClick={() => setActiveElement(id)}>
            <line
                x1={point1.x}
                y1={point1.y}
                x2={point2.x}
                y2={point2.y}
                stroke={hoveredElement ? 'var(--sapphire-20)': color}
                strokeWidth={strokeWidth}
            />
            <text
                x={(point1.x + point2.x) / 2}
                y={(point1.y + point2.y) / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={textColor}
                fontSize={fontSize}
                transform={`rotate(${angle}, ${textX + 20}, ${textY})`}
            >
                Длина: {relativeLength.toFixed(1)}px
            </text>
        </svg>
     {activeElement && (
        <div className={styled.menuRight}>
          <div className={styled.popover}>
                  <div className={styled.popover_box}>
                      <div className={styled.popover_box_title}>Позиция</div>
                        <div className={styled.popover_grid}>
                          <div className={styled.popover_grid_title}>
                              X1 
                          </div>
                          <div className={styled.popover_grid_item}>
                              {point1.x}
                          </div>
                      </div>
                      <div className={styled.popover_grid}>
                          <div className={styled.popover_grid_title}>
                              Y1
                          </div>
                          <div className={styled.popover_grid_item}>
                              {point1.y}
                          </div>
                      </div>
                        <div className={styled.popover_grid}>
                          <div className={styled.popover_grid_title}>
                              X2 
                          </div>
                          <div className={styled.popover_grid_item}>
                              {point2.x}
                          </div>
                      </div>
                      <div className={styled.popover_grid}>
                          <div className={styled.popover_grid_title}>
                              Y2
                          </div>
                          <div className={styled.popover_grid_item}>
                              {point2.y}
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
                          Цвет текста 
                      </div>
                      <input className={styled.popover_grid_input} type="color" id="head" name="head" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
                  </div>
                  <div className={styled.popover_grid}>
                      <div className={styled.popover_grid_title}>
                          Размер текста 
                      </div>
                      <input className={styled.popover_grid_input}  type="number" value={fontSize} onChange={(e) => setFontSize(e.target.value)} />
                  </div>
                  <div className={styled.popover_grid}>
                      <div className={styled.popover_grid_title}>
                          Ширина 
                      </div>
                      <input className={styled.popover_grid_input} type="number" value={strokeWidth} onChange={(e) => setStrokeWidth(Number(e.target.value))} />
                  </div>
                  <div className={styled.popover_button}>
                      <button type='button' onClick={() => deleteLine(id.toString())}>Удалить</button>
                  </div>
              </div>
          </div>
        )}
        </>
  );
};

export default Line;