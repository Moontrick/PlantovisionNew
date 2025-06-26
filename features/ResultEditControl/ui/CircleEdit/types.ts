import { Circle } from "../../hooks/useResultEdit";

export type CircleEditProps = {
    x: number;
    y: number;
    id: number | string;
    deleteCircle: (index: string) => void;
    startDrag: (e: React.MouseEvent, id: string) => void;
    handleDrag: (e: React.MouseEvent) => void;
    endDrag: (e: React.MouseEvent) => void;
    hoveredElement: boolean;
    activeElement: boolean;
    setActiveElement: (id: string) => void;
    isLine: boolean;
    onAddLine: (cir: Circle) => void
}