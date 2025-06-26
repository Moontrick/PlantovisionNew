import { FormulaType, LineType } from "@/features/ResultEditControl/hooks/useResultEdit"

export type ShriterType = {
    lines: LineType[];
    onFormulaAdd: (item: FormulaType) => void
}