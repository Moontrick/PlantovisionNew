import { Circle, FormulaType, LineType } from "../../hooks/useResultEdit"

export type MakeFormulaProps = {
    lines: LineType[];
    circles: Circle[];
    onFormulaAdd: (item: FormulaType) => void
    formuls: FormulaType[]
}