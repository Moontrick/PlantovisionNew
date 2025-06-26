
import { useAnchorEl } from '@/hooks/useAnchorEl';
import { MouseEvent, useEffect, useRef, useState } from 'react';

export type Circle = {
    id: string;
    x: number;
    y: number;
    name?: string;
}

export type LineType = {
  id: string;
  name?: string;
  point1: Circle;
  point2: Circle;
}

export type FormulaType = {
  id?: string;
  title: string;
  result: string;
  text: string;
  lines: LineType[];
}

type ToolType = "cursor" | 'circle' | 'line' | 'makeFormula';
export function useResultEdit() {

  const [formuls, setFormuls] = useState<FormulaType[]>([])


    const [circles, setCircles] = useState<Circle[]>([]);

    const [lines, setLines] = useState<LineType[]>([]);
    const [isFirstCircleAdd, setIsFirstCircleAdd] = useState<boolean>(false)
    const [firstCircle, setFirstCircle] = useState<Circle | null>(null)

    const [currentTool, setCurrentTool] = useState<ToolType>('cursor')
    const [draggedCircleId, setDraggedCircleId] = useState<string | null>(null);

    const [hoveredElement, setHoveredElement] = useState<string | null>(null)
    const [hoveredElementLine, setHoveredElementLine] = useState<string | null>(null)


    const [isLineActive, setIsLineActive] = useState<boolean>(false)
    const [activeLine, setActiveLine] = useState<string | null>(null)

    
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeElement, setActiveElement] = useState<string | null>(null)

    const [transformState, setTransformState] = useState({
      scale: 1,
      positionX: 0,
      positionY: 0
  });

  function onFormulaAdd(item: FormulaType){
    setFormuls([
      ...formuls,
      {
      ...item,
      id: Math.random().toString(36).substring(2, 9),
      }
    ])
  }



  const updateTransformState = (state: {
      scale: number;
      positionX: number;
      positionY: number;
  }) => {
      setTransformState(state);
  };

  const handleAddCircle = (e: React.MouseEvent) => {
    if (currentTool !== 'circle') return;
    if (draggedCircleId) return;

    if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;
        
        const x = clientX - rect.left
        const y = clientY - rect.top
        // // Преобразование координат в пространство внутри TransformComponent
        // const x = (clientX - rect.left - transformState.positionX) / transformState.scale;
        // const y = (clientY - rect.top - transformState.positionY) / transformState.scale;
        const newCircle = {
            id: Math.random().toString(36).substring(2, 9),
            x,
            y,
            name: (circles.length + 1).toString()
        };
        setCircles([...circles, newCircle]);
    }
};
  
    const startDrag = (e: React.MouseEvent, id: string) => {
      if(currentTool !== 'cursor') return;
      e.stopPropagation(); 
      setDraggedCircleId(id);
    };
  
    const handleDrag = (e: React.MouseEvent) => {
      if (!draggedCircleId || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setCircles(circles.map(circle => 
        circle.id === draggedCircleId ? { ...circle, x, y } : circle
      ));
      setLines(lines.map(line => {
        if(line.point1.id === draggedCircleId) {
          return {...line, point1: {
            ...line.point1,
            x,
            y,
          }}
        }
        if(line.point2.id === draggedCircleId) {
          return {...line, point2: {
            ...line.point2,
            x,
            y,
          }}
        }
        return line
      }
        
      ));
    };
  
    const endDrag = (e: React.MouseEvent) => {
        e.stopPropagation()
      setDraggedCircleId(null);
    };

    const deleteCircle = (index: number | string) => {
      const doesLineExist : boolean = lines.some(line => {
        return (
          (line.point1.id === index) ||
          (line.point2.id === index)
        );
      });
      if(doesLineExist) {
        setLines(lines.filter(line => 
          line.point1.id !== index && line.point2.id !== index
        ));
      };

      setCircles(circles.filter((item) => item.id !== index));
      };


    const deleteLine = (index: number | string) => {
        setLines(lines.filter((item) => item.id !== index));
      };

      function onChangeActiveElement(id: string) {
        if(currentTool !== 'cursor') return;
        setActiveElement(id)
      }

      function onChangeActiveElementLine(id: string) {
        setActiveLine(id)
      }


      function onAddLine(cir: Circle){
        if(!isFirstCircleAdd){
          setFirstCircle({...cir});
          setIsFirstCircleAdd(true);
        }else{
          if(firstCircle){
            const doesLineExist : boolean = lines.some(line => {
              return (
                (line.point1.id === firstCircle.id && line.point2.id === cir.id) ||
                (line.point1.id === cir.id && line.point2.id === firstCircle.id)
              );
            });
            if(doesLineExist) return;
            
            const newLine: LineType = {
              id: Math.random().toString(36).substring(2, 9),
              name: (lines.length + 1).toString(),
              point1: {...firstCircle},
              point2: {...cir}
            };
            setLines([...lines, newLine])
            setFirstCircle(null);
            setIsFirstCircleAdd(false);
            setCurrentTool('cursor');
          }
        }
      }


  return {
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
  };
}
